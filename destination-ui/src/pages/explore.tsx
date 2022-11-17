import { Box, Spinner, Grid, GridItem } from "@chakra-ui/react";
import bodyStyles from "../styles/Body.module.css";
import Header from "../components/Header";
import LocationCard from "../components/LocationCard";

import * as locationData from "../generated/graphql";

const Explore = () => {
  const {
    data: homeData,
    loading: homeLoading,
    error: homeError,
  } = locationData.useLocationsQuery();
  if (homeError) {
    return <p>Error: {homeError.message}</p>;
  } else if (homeLoading) {
    console.log("Loading...");
    return <Spinner></Spinner>;
  } else {
    console.log("Rendering data...");

    return (
      <>
        <Header />
        <Box>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={6}
          >
            {!homeData
              ? null
              : homeData.allLocations.map((e) => {
                  return (
                    <LocationCard
                      id={e.id}
                      name={e.name}
                      shortDescription={e.shortDescription}
                      city={e.city}
                      state={e.state}
                      imageFilename={e.images[0].filename}
                    ></LocationCard>
                  );
                })}
          </Grid>
        </Box>
      </>
    );
  }
};

export default Explore;
