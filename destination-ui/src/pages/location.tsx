import { Box, Spinner, Link, Flex } from "@chakra-ui/react";
import LocationDetail from "../components/LocationDetail";

import * as locationData from "../generated/graphql";
//import { loadGetInitialProps } from "next/dist/next-server/lib/utils";

const Location = ({ id }) => {
  //  const router = useRouter()
  //  const {id} = router.query;

  const {
    data: detailData,
    loading: detailLoading,
    error: detailError,
  } = locationData.useLocationDetailQuery({
    variables: {
      id: id,
    },
  });
  if (detailError) {
    return <p>Error: {detailError.message} </p>;
  } else if (detailLoading) {
    console.log("Loading...");
    return <Spinner></Spinner>;
  } else {
    return (
      <Flex>
        {!detailData ? (
          <p>no data!</p>
        ) : (
          <LocationDetail
            id={detailData.allLocations[0].id}
            name={detailData.allLocations[0].name}
            shortDescription={detailData.allLocations[0].shortDescription}
            city={detailData.allLocations[0].city}
            state={detailData.allLocations[0].state}
            imageFilename={detailData.allLocations[0].images[0].filename}
            description={detailData.allLocations[0].description}
            //tag={data.Location.tags}
          ></LocationDetail>
        )}
        {/* <Box>
          <NextLink 
            href={{ 
              pathname: "/",
            }}
          >                  
            <Link>{"Back"}</Link>
          </NextLink>
        </Box> */}
      </Flex>
    );
  }
};

Location.getInitialProps = async ({ query }) => {
  const { id } = query;

  return { id };
};

export default Location;
