import { config, list } from '@keystone-6/core';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

import {
    text,
    relationship,
    password,
    timestamp,
    select,
    integer,
    checkbox,
  } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

import { insertSeedData, purgeData } from './seed-data';
// import { lists } from './schema';

import fs from 'fs';
import dotenv from 'dotenv';

//TODO: check if file exists first
const envConfig = dotenv.parse(fs.readFileSync('.env.local'))
for (let k in envConfig) {
  //TODO: valideate value set for key (not empty)
  process.env[k] = envConfig[k];
}

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    );
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: 'isAdmin',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: sessionSecret,
});

type Session = {
    data: {
      id: string;
      name: string;
      isAdmin: boolean;
    }
}
//const isAdmin = ({ session }: { session: Session }) => session?.data.isAdmin;
const isAdmin = () => {return true};


export default withAuth(
    config({
        db: {
            provider: 'postgresql',
            enableLogging: false,
            //idField: { kind: 'uuid' },
            url: process.env.DATABASE_URL || 'postgres://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+'/'+process.env.DB_NAME,
            async onConnect(context) {
            if (process.argv.includes('--purge-data')) {
                await purgeData(context);
            }
            if (process.argv.includes('--seed-data')) {
                await insertSeedData(context);
            }
            },
        },
        lists: {
            /*
            * Auth
            */
            User: list({
                fields: {
                    name: text({ validation: {isRequired: true}, isIndexed: 'unique' }),
                    email: text({ validation: {isRequired: true}, isIndexed: 'unique' }),
                    password: password({ validation: {isRequired: true}}),
                    isAdmin: checkbox(),
                    account: relationship({
                        ref: "Account.user",
                        many: false,
                    }),
                },
                ui: {
                    listView: {
                        initialColumns: ["name", "account", "email"],
                    },
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },
            }),

            Account: list({
                fields: {
                    firstName: text({ validation: {isRequired: true}}),
                    lastName: text({ validation: {isRequired: true}}),
                    phone: text({ validation: {isRequired: true}, isIndexed: 'unique' }),
                    address1: text({ validation: {isRequired: true}}),
                    address2: text({}),
                    city: text({ validation: {isRequired: true}}),
                    state: relationship({ ref: "State", many: false }),
                    zip: integer({}),
                    user: relationship({
                        ref: "User.account",
                        many: false,
                }),
                },
                ui: {
                    listView: {
                        initialColumns: ["lastName", "firstName", "phone"],
                    },
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },
            }),

            /*
            * Core Destination Entities
            */
            Tag: list({
                ui: {
                isHidden: true,
                },
                fields: {
                name: text(),
                locations: relationship({
                    ref: "Location.tags",
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },
            }),
            Location: list({
                fields: {
                name: text(),
                shortDescription: text(),
                state: relationship({
                    ref: "State.locations",
                    ui: {
                    displayMode: "cards",
                    cardFields: ["name"],
                    inlineEdit: { fields: ["name"] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ["name"] },
                    },
                    many: false,
                }),
                // TODO: should city-location be many-to-many?
                city: relationship({
                    ref: "City.locations",
                    ui: {
                    displayMode: "cards",
                    cardFields: ["name"],
                    inlineEdit: { fields: ["name"] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ["name"] },
                    },
                    many: false,
                }),
                status: select({
                    options: [
                    { label: "Active", value: "active" },
                    { label: "Inactive", value: "inactive" },
                    ],
                    ui: {
                    displayMode: "segmented-control",
                    },
                }),
                description: document({
                    formatting: true,
                    layouts: [
                    [1, 1],
                    [1, 1, 1],
                    [2, 1],
                    [1, 2],
                    [1, 2, 1],
                    ],
                    links: true,
                    dividers: true,
                }),
                createdDate: timestamp(),
                tags: relationship({
                    ref: "Tag.locations",
                    ui: {
                    displayMode: "cards",
                    cardFields: ["name"],
                    inlineEdit: { fields: ["name"] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ["name"] },
                    },
                    many: true,
                }),
                images: relationship({
                    ref: "Image.locations",
                    ui: {
                    displayMode: "cards",
                    cardFields: ["filename"],
                    inlineEdit: { fields: ["filename"] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ["filename"] },
                    },
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },
            }),

            /*
            * Geo
            * Consolidated OMB data with FIPS Geo Codes
            */
            FipsGeo: list({
                ui: {
                description: "FIPS Geo Code",
                labelField: "areaName",
                searchFields: ["areaName"],
                },
                fields: {
                areaName: text(),
                summaryLevel: select({
                    type: "string",
                    options: [
                    { label: "US", value: "010" },
                    { label: "State", value: "040" },
                    { label: "County", value: "050" },
                    { label: "County Subdivision", value: "061" },
                    { label: "Place", value: "162" },
                    { label: "Consolidated City", value: "170" },
                    ],
                    ui: { displayMode: "select" },
                }),
                state: relationship({
                    ref: "State.fipsGeo",
                    many: false,
                }),
                county: relationship({
                    ref: "County.fipsGeo",
                    many: false,
                }),
                countySubdivision: relationship({
                    ref: "CountySubdivision.fipsGeo",
                    many: false,
                }),
                city: relationship({
                    ref: "City.fipsGeo",
                    many: false,
                }),
                consolidatedCity: text(),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },
            }),
            State: list({
                fields: {
                code: text({
                    validation: {isRequired: true},
                    isIndexed: 'unique',
                }),
                fipsCode: text({
                    validation: {isRequired: true},
                    isIndexed: 'unique',
                }),
                name: text({
                    validation: {isRequired: true},
                    isIndexed: 'unique',
                }),
                capital: text(),
                largestCity: text(),
                //usAdmission: date
                population: integer(),
                areaSqMi: integer(),
                landAreaSqMi: integer(),
                waterAreaSqMi: integer(),
                locations: relationship({
                    ref: "Location.state",
                    many: true,
                }),
                fipsGeo: relationship({
                    ref: "FipsGeo.state",
                    many: true,
                }),
                county: relationship({
                    ref: "County.state",
                    many: true,
                }),
                countySubdivision: relationship({
                    ref: "CountySubdivision.state",
                    many: true,
                }),
                city: relationship({
                    ref: "City.state",
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),
            County: list({
                fields: {
                fipsCode: text({
                    validation: {isRequired: true},
                    isIndexed: 'unique',
                }),
                name: text({
                    validation: {isRequired: true},
                }),
                type: select({
                    type: "string",
                    options: [
                    { label: "Central", value: "Central" },
                    { label: "Outlying", value: "Outlying" },
                    ],
                    ui: { displayMode: "select" },
                }),
                state: relationship({
                    ref: "State.county",
                    many: false,
                    ui: {
                    displayMode: "select",
                    },
                }),
                countySubdivision: relationship({
                    ref: "CountySubdivision.county",
                    many: true,
                }),
                fipsGeo: relationship({
                    ref: "FipsGeo.county",
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),
            CountySubdivision: list({
                fields: {
                fipsCode: text({
                    validation: {isRequired: true},
                    isIndexed: 'unique',
                }),
                name: text({
                    validation: {isRequired: true},
                }),
                county: relationship({
                    ref: "County.countySubdivision",
                    many: false,
                }),
                state: relationship({
                    ref: "State.countySubdivision",
                    many: false,
                }),
                fipsGeo: relationship({
                    ref: "FipsGeo.countySubdivision",
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),
            City: list({
                fields: {
                fipsCode: text({
                    validation: {isRequired: true},
                    isIndexed: 'unique',
                }),
                name: text({
                    validation: {isRequired: true},
                }),
                cbsa: text(),
                necta: text(),
                state: relationship({
                    ref: "State.city",
                    ui: {
                    displayMode: "cards",
                    cardFields: ["name", "fipsCode"],
                    inlineEdit: { fields: ["name"] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ["name"] },
                    },
                    many: false,
                }),
                locations: relationship({
                    ref: "Location.city",
                    many: true,
                }),
                fipsGeo: relationship({
                    ref: "FipsGeo.city",
                    ui: {
                    displayMode: "cards",
                    cardFields: ["areaName"],
                    inlineEdit: { fields: ["areaName"] },
                    linkToItem: true,
                    inlineConnect: true,
                    inlineCreate: { fields: ["areaName"] },
                    },
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),

            /*
            * Dynamic Content
            */
            //TODO: figure out how to handle dynamic pages
            Image: list({
                ui: {
                isHidden: true,
                },
                fields: {
                filename: text(),
                locations: relationship({
                    ref: "Location.images",
                    many: true,
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),
            ContentBlock: list({
                fields: {
                active: checkbox({
                    //validation: {isRequired: true},
                    defaultValue: false,
                }),
                page: text(),
                column: integer(),
                blockOrder: integer(),
                richText: document({
                    formatting: true,
                    dividers: true,
                    links: true,
                    layouts: [
                    [1, 1],
                    [1, 1, 1],
                    ],
                }),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),
            Page: list({
                fields: {
                active: checkbox({
                    //isRequired: true,
                    defaultValue: false,
                }),
                name: text(),
                title: text(),
                subTitle: text(),
                },
                access: {
                    operation: {
                        create: isAdmin,
                        update: isAdmin,
                        delete: isAdmin,
                        query: isAdmin,
                    } 
                },                
            }),
            //do we need unformatted text?
            // TextBlock: list({
            //   fields: {
            //     page: text(),
            //     column: integer(),
            //     blockOrder: integer(),
            //     text: text(),
            //   },
            // }),
        },
        session,
        server: {
            cors: { origin: ['http://localhost:3000', 'http://localhost:3080'], credentials: true },
        },      
        
    })
);
