import { createSchema, list } from "@keystone-next/keystone/schema";
import {
  text,
  relationship,
  password,
  timestamp,
  select,
  integer,
  checkbox,
} from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

export const lists = createSchema({
  /*
   * Auth
   */
  User: list({
    ui: {
      listView: {
        initialColumns: ["name", "lastName", "firstName", "email"],
      },
    },
    fields: {
      name: text({ isRequired: true, isUnique: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password({ isRequired: true }),
      account: relationship({
        ref: "Account.user",
        many: false,
      }),
    },
  }),

  Account: list({
    ui: {
      listView: {
        initialColumns: ["lastName", "firstName", "phone"],
      },
    },
    fields: {
      firstName: text({ isRequired: true }),
      lastName: text({ isRequired: true }),
      phone: text({ isRequired: true, isUnique: true }),
      address1: text({ isRequired: true }),
      address2: text({}),
      city: text({ isRequired: true }),
      state: relationship({ ref: "State", many: false }),
      zip: integer({}),
      user: relationship({
        ref: "User.account",
        many: false,
      }),
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
        dataType: "string",
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
  }),
  State: list({
    fields: {
      code: text({
        isRequired: true,
        isUnique: true,
      }),
      fipsCode: text({
        isRequired: true,
        isUnique: true,
      }),
      name: text({
        isRequired: true,
        isUnique: true,
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
  }),
  County: list({
    fields: {
      fipsCode: text({
        isRequired: true,
        isUnique: false,
      }),
      name: text({
        isRequired: true,
        isUnique: false,
      }),
      type: select({
        dataType: "string",
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
  }),
  CountySubdivision: list({
    fields: {
      fipsCode: text({
        isRequired: true,
        isUnique: false,
      }),
      name: text({
        isRequired: true,
        isUnique: false,
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
  }),
  City: list({
    fields: {
      fipsCode: text({
        isRequired: true,
        isUnique: false,
      }),
      name: text({
        isRequired: true,
        isUnique: false,
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
  }),
  ContentBlock: list({
    fields: {
      active: checkbox({
        isRequired: true,
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
});
