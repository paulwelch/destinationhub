import { KeystoneContext } from '@keystone-next/types';
import { states } from './state-data';
import { counties } from './county-data';
import { countySubdivisions } from './countySubdivisions-data';
import { cities } from './city-data';
import { geoCodes } from './geocode-data';

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
        state = await context.lists.State.findOne({
          where: { code: stateData.code },
          query: 'id',
        });
      } catch (e) { console.log('exception: ' + e ); }
      if (!state) {
        console.log(`👩 Adding state: ${stateData.name}`);
        state = await context.lists.State.createOne({
          data: stateData,
          query: 'id',
        });
      }
      return state;
    };

    const createCity = async (cityData: CityProps) => {
      let city = null;
      let state = null;
      try {
        state = await context.lists.State.findOne({
          where: { fipsCode: cityData.state },
          query: 'id',
        });
      } catch(e) { console.log('exception: ' + e ); }
      if (!state) {
        console.log('ERROR: State not found: ' + cityData.state );
      } else {
        try {
          city = await context.lists.City.count({
            where: { 
                      fipsCode: cityData.fipsCode, 
                      state: state, 
                   },
          });
        } catch (e) { console.log('exception: ' + e ); }
        if (!city && city == 0) {
          cityData.state = { connect: {id: state.id } };
          city = await context.lists.City.createOne({
            data: cityData,
            query: 'id',
          });
        }
      return city;
      }
    };

    const createCounty = async (countyData: CountyProps) => {
      let county = null;
      let state;
      try {
        state = await context.lists.State.findOne({
          where: { fipsCode: countyData.state },
          query: 'id',
        });
      } catch(e) { console.log('exception: ' + e ); };
      if(!state) {
        console.log('ERROR: State not found: ' + countyData.state );
      } else {
        try {
          county = await context.lists.County.count({ 
            where: { fipsCode: countyData.fipsCode, 
                     state: state }, 
          });
        } catch (e) { console.log('exception: ' + e ); }
        if (!county && county == 0) {
          countyData.state = { connect: {id: state.id } };
          county = await context.lists.County.createOne({
            data: countyData,
            query: 'id',
          });
        }
      }
      return county;
    };

    const createCountySubdivision = async (countySubdivisionData: CountySubdivisionProps) => {
      let countySubdivision = null;
      let state;
      try {
        state = await context.lists.State.findOne({
          where: { fipsCode: countySubdivisionData.state },
          query: 'id',
        });
      } catch(e) { console.log('exception: ' + e ); };
      if(!state) {
        console.log('ERROR: State not found: ' + countySubdivisionData.state );
      } else {
        let county;
        try {
          county = await context.lists.County.findMany({
            where: { fipsCode: countySubdivisionData.county,
                     state: state },
          });
        } catch(e) { console.log('exception: ' + e ); };
        if(!county || !county[0]) {
          console.log('Error: County not found: '+ countySubdivisionData.county + ' state: ' + countySubdivisionData.state);
        } else {
          try {
            countySubdivision = await context.lists.CountySubdivision.count({
              where: { fipsCode: countySubdivisionData.fipsCode, 
                       county: county[0], 
                       state: state },
              });
          } catch (e) { console.log('exception: ' + e ); }
          if (!countySubdivision && countySubdivision == 0) { 
            countySubdivisionData.county = { connect: {id: county[0].id } };
            countySubdivisionData.state = { connect: {id: state.id } };
            countySubdivision = await context.lists.CountySubdivision.createOne({
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

      let state;
      if(geoCodeData.state) {
        try {
          state = await context.lists.State.findOne({
            where: { fipsCode: geoCodeData.state },
            query: 'id',
          });
        } catch(e) { console.log('state exception: ' + e) };
        if(geoCodeData.state && !state) console.log('state not found: ' + geoCodeData.state);
      }

      let county;
      if(geoCodeData.county && state) {
          try {
          county = await context.lists.County.findMany({
            where: { fipsCode: geoCodeData.county,
                      state: state },
          });
        } catch(e) { console.log('county exception: ' + e) };
        if(geoCodeData.county && !county) console.log('county not found: ' + geoCodeData.county);
      }

      let countySubdivision;
      if(geoCodeData.countySubdivision && state && county && county[0] ) {
        try {
          countySubdivision = await context.lists.CountySubdivision.findMany({
            where: { fipsCode: geoCodeData.countySubdivision,
                      county: county[0], 
                      state: state },
          });
        } catch(e) { console.log('subdivision exception: ' + e) };
        if(geoCodeData.countySubdivision && !countySubdivision) console.log('subdivision not found: ' + geoCodeData.countySubdivision);
      }

      let city;
      if(geoCodeData.city && state) {
        try {
          city = await context.lists.City.findMany({
            where: { fipsCode: geoCodeData.city,
                      state: state },
          });
        } catch(e) { console.log('city exception: ' + e) };
        if(geoCodeData.city && !city) console.log('city not found: ' + geoCodeData.city);
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

        if(city && city[0]) {
          geoCodeData.city = { connect: {id: city[0].id} };
        } else {
          geoCodeData.city = null;
        }
        if(countySubdivision && countySubdivision[0]) {
          geoCodeData.countySubdivision = { connect: {id: countySubdivision[0].id} }; 
        } else {
          geoCodeData.countySubdivision = null;
        }
        if(county && county[0]) {
          geoCodeData.county = { connect: {id: county[0].id} }; 
        } else {

          geoCodeData.county = null;
        }
        if(state) {
          geoCodeData.state = { connect: {id: state.id} };
        } else {
          geoCodeData.state = null;
        }

        geoCode = await context.lists.FipsGeo.createOne({
          data: geoCodeData,
          query: 'id',
        });
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

    console.log('Purging FipsGeo');
    let fipsGeo;
    try {
      fipsGeo = await context.lists.FipsGeo.findMany({
        query: 'id',
      });
    } catch (e) { fipsGeo = []; }

    fipsGeo = fipsGeo.map(({ id }) => id)
    await context.lists.FipsGeo.deleteMany({
        ids: fipsGeo,
    });

    console.log(`✅ Data purged`);
    process.exit();
}