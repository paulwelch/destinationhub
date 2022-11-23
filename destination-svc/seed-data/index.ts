import { KeystoneContext } from '@keystone-6/core/dist/declarations/src/types';
import { states } from './state-data';
import { counties } from './county-data';
import { countySubdivisions } from './countySubdivisions-data';
import { cities } from './city-data';
import { geoCodes } from './geocode-data';
import { ExitStatus } from 'typescript';

//TODO: seed data for users/accounts, locations, content blocks

type StateProps = {
    code: string;
    fipsCode: string;
    name: string;
}

type CityProps = {
  fipsCode: string,
  name: string,
  cbsa: string,
  necta: string,
  state: Object,
}

type CountyProps = {
  fipsCode: string,
  state: Object,
  name: string,
//  type: string,  //don't have type data yet
}

type CountySubdivisionProps = {
  fipsCode: string,
  county: Object,
  state: Object,
  name: string,
}

type GeoCodeProps = {
  areaName: string,
  summaryLevel: string,
  state: Object,
  county: Object,
  countySubdivision: Object,
  city: Object,
  consolidatedCity: string,
}

export async function insertSeedData(context: KeystoneContext) {
    console.log(`🌱 Inserting seed data`);
  
    const createState = async (stateData: StateProps) => {
      let state = null;
      try {
        state = await context.query.State.findOne({
          where: { code: stateData.code },
          query: 'id',
        });
      } catch (e) { console.log('exception: ' + e ); }
      if (!state) {
        console.log(`👩 Adding state: ${stateData.name}`);
        state = await context.query.State.createOne({
          data: stateData,
          query: 'id',
        });
      }
      return state;
    };

    const createCity = async (cityData: CityProps) => {
      let city = null;
      let state1 = null;
      try {
        state1 = await context.query.State.findOne({
          where: { fipsCode: cityData.state as string },
          query: 'id',
        });
      } catch(e) { console.log('exception: ' + e ); }
      if (!state1) {
        console.log('ERROR: State not found: ' + cityData.state );
      } else {
        try {
          city = await context.query.City.count({
            where: { fipsCode: {equals: cityData.fipsCode },
                     state: state1.fipsCode }, 
          });
        } catch (e) { console.log('exception: ' + e ); }
        if (!city && city == 0) {
          cityData.state = { connect: {id: state1.id } };
          city = await context.query.City.createOne({
            data: cityData,
            query: 'id',
          });
        }
      return city;
      }
    };

    const createCounty = async (countyData: CountyProps) => {
      let county = null;
      let state1;
      try {
        state1 = await context.query.State.findOne({
          where: { fipsCode: countyData.state as string },
          query: 'id',
        });
      } catch(e) { console.log('exception: ' + e ); };
      if(!state1) {
        console.log('ERROR: State not found: ' + countyData.state );
      } else {
        try {
          county = await context.query.County.count({ 
            where: { fipsCode: {equals: countyData.fipsCode},
                     state: state1.fipsCode,
                    }
          });
        } catch (e) { console.log('exception: ' + e ); }
        if (!county && county == 0) {
          countyData.state = { connect: {id: state1.id } };
          county = await context.query.County.createOne({
            data: countyData,
            query: 'id',
          });
        }
      }
      return county;
    };

    const createCountySubdivision = async (countySubdivisionData: CountySubdivisionProps) => {
      let countySubdivision = null;
      let state1;
      try {
        state1 = await context.query.State.findOne({
          where: { fipsCode: countySubdivisionData.state as string },
          query: 'id',
        });
      } catch(e) { console.log('exception: ' + e ); };
      if(!state1) {
        console.log('ERROR: State not found: ' + countySubdivisionData.state );
      } else {
        let county1;
        try {
          county1 = await context.query.County.findMany({
            where: { fipsCode: {equals: countySubdivisionData.county as string},
                     state: state1.fipsCode,
                    },
          });
        } catch(e) { console.log('exception: ' + e ); };
        if(!county1 || !county1[0]) {
          console.log('Error: County not found: '+ countySubdivisionData.county + ' state: ' + countySubdivisionData.state);
        } else {
          try {
            countySubdivision = await context.query.CountySubdivision.count({
              where: { fipsCode: {equals: countySubdivisionData.fipsCode}, 
                       county: county1[0].fipsCode, 
                       state: state1.fipsCode,
                      },
              });
          } catch (e) { console.log('exception: ' + e ); }
          if (!countySubdivision && countySubdivision == 0) { 
            countySubdivisionData.county = { connect: {id: county1[0].id } };
            countySubdivisionData.state = { connect: {id: state1.id } };
            countySubdivision = await context.query.CountySubdivision.createOne({
              data: countySubdivisionData,
              query: 'id',
            });
          }
        }
      }
      return countySubdivision;
    };

    const createGeoCodes = async (geoCodeData: GeoCodeProps) => {
      let geoCode = null;

      let state1;
      if(geoCodeData.state) {
        try {
          state1 = await context.query.State.findOne({
            where: { fipsCode: geoCodeData.state as string },
            query: 'id',
          });
          console.log("*** state result "+state1.fipsCode);
        } catch(e) { console.log('state exception: ' + e) };
        if(geoCodeData.state && !state1) console.log('state not found: ' + geoCodeData.state);
      }

      let county1;
      if(geoCodeData.county && state1 && state1.fipsCode) {
          try {
            console.log("*** code "+geoCodeData.county+" state fips "+state1.fipsCode);
          county1 = await context.query.County.findMany({
            where: { fipsCode: {equals: geoCodeData.county},
                     state: state1.fipsCode,
                    },
          });
          console.log("*** county: "+ count1[0].id)
        } catch(e) { console.log('county exception: ' + e) };
        if(geoCodeData.county && !county1) console.log('county not found: ' + geoCodeData.county);
      }

      let countySubdivision1;
      if(geoCodeData.countySubdivision && state1 && state1.fipsCode && county1 && county1[0] ) {
        try {
          countySubdivision1 = await context.query.CountySubdivision.findMany({
            where: { fipsCode: {equals: geoCodeData.countySubdivision},
                     county: county1[0].fipsCode, 
                     state: state1.fipsCode,
                    },
          });
        } catch(e) { console.log('subdivision exception: ' + e) };
        if(geoCodeData.countySubdivision && !countySubdivision1) console.log('subdivision not found: ' + geoCodeData.countySubdivision);
      }

      let city1;
      if(geoCodeData.city && state1 && state1.fipsCode) {
        try {
          city1 = await context.query.City.findMany({
            where: { fipsCode: {equals: geoCodeData.city},
                     state: state1.fipsCode,
                    },
          });
        } catch(e) { console.log('city exception: ' + e) };
        if(geoCodeData.city && !city1) console.log('city not found: ' + geoCodeData.city);
      }

      // TODO: make insertSeedData idempotent by only inserting if not already there - for now, assume purge runs first and insert runs once to completions
      // try {
      //   let geoCode = null;
      //   if( county && county[0] && countySubdivision && countySubdivision[0] ) {
      //     geoCode = await context.lists.FipsGeo.count({
      //       where: { areaName: geoCodeData.areaName,
      //                state: state,
      //                county: county[0],
      //                countySubdivision: countySubdivision[0]
      //               },
      //     });
      //   } else {
      //     geoCode = await context.lists.FipsGeo.count({
      //       where: { areaName: geoCodeData.areaName,
      //                state: state
      //              },
      //     });
      //   }
      // } catch (e) { console.log('geo exception: ' + e) }
      // if(geoCode && geoCode > 0) console.log('FipsGeo already exists: ' + geoCodeData.areaName );
      // if (!geoCode || geoCode == 0) { 

        if(city1 && city1[0]) {
          geoCodeData.city = { connect: {id: city1[0].id} };
        } else {
          // geoCodeData.city = null;
        }
        if(countySubdivision1 && countySubdivision1[0]) {
          geoCodeData.countySubdivision = { connect: {id: countySubdivision1[0].id} }; 
        } else {
          // geoCodeData.countySubdivision = null;
        }
        if(county1 && county1[0]) {
          geoCodeData.county = { connect: {id: county1[0].id} }; 
        } else {

          // geoCodeData.county = null;
        }
        if(state1 && state1.fipsCode) {
          geoCodeData.state = { connect: {id: state1.id} };
        } else {
          // geoCodeData.state = null;
        }

        if(state1 && state1.fipsCode && state1.fipsCode != "00") {
            geoCode = await context.query.FipsGeo.createOne({
            data: geoCodeData,
            query: 'id',
          });
        };
      //}

      return geoCode;
    };


   let cnt = 0;
    // for (const state of states) {
    //   cnt++;
    //   await createState(state);
    //   if(cnt % 1000 == 0) { console.log('Inserted ' + cnt + ' states'); }
    // }

    // cnt = 0;
    // for (const county of counties) {
    //   cnt++;
    //   await createCounty(county);
    //   if(cnt % 1000 == 0) { console.log('Inserted ' + cnt + ' counties'); }
    // }

    // cnt = 0;
    // for (const countySubdivision of countySubdivisions) {
    //   cnt++;
    //   await createCountySubdivision(countySubdivision);
    //   if(cnt % 1000 == 0) { console.log('Inserted ' + cnt + ' county subdivisions'); }
    // }

    // cnt = 0;
    // for (const city of cities) {
    //   cnt++;
    //   await createCity(city);
    //   if(cnt % 1000 == 0) { console.log('Inserted ' + cnt + ' cities'); }
    // }

    cnt = 0;
    for (const geoCode of geoCodes) {
      cnt++;
      await createGeoCodes(geoCode);
      if(cnt % 1000 == 0) { console.log('Inserted ' + cnt + ' FipsGeos'); }
    }

    console.log(`✅ Seed data inserted`);
    console.log(`👋 Please start the process with \`yarn dev\` or \`npm run dev\``);
    process.exit();
  }



  export async function purgeData(context: KeystoneContext) {
    //TODO: specify which entities to purge

    // purge code commented out to avoid accidental data loss

    // console.log('Purging counties');
    // let county;
    // try {
    //   county = await context.lists.County.findMany({
    //     query: 'id',
    //   });
    // } catch (e) { county = []; }

    // county = county.map(({ id }) => id)
    // await context.lists.County.deleteMany({
    //     ids: county,
    // });

    // console.log('Purging county subdivisions');
    // let countySubdivision;
    // try {
    //   countySubdivision = await context.lists.CountySubdivision.findMany({
    //     query: 'id',
    //   });
    // } catch (e) { countySubdivision = []; }

    // countySubdivision = countySubdivision.map(({ id }) => id)
    // await context.lists.CountySubdivision.deleteMany({
    //     ids: countySubdivision,
    // });

    // console.log('Purging FipsGeo');
    // let fipsGeo;
    // try {
    //   fipsGeo = await context.query.FipsGeo.findMany({
    //     query: 'id',
    //   });
    // } catch (e) { fipsGeo = []; }

    // fipsGeo = fipsGeo.map(({ id }) => id)
    // await context.query.FipsGeo.deleteMany({
    //     ids: fipsGeo,
    // });

    console.log(`✅ Data purged`);
    process.exit();
}