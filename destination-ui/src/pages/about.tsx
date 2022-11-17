import {
  Box,
  Grid,
  GridItem,
  Spinner,
  Flex,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import bodyStyles from "../styles/Body.module.css";
import ContentBlockCard from "../components/ContentBlock";

import * as pageContent from "../generated/graphql";

const About = () => {
  const {
    data: contentData,
    loading: contentLoading,
    error: contentError,
  } = pageContent.useContentBlockQuery({ variables: { page: "about" } });
  if (contentError) {
    return <p>{contentError.message}</p>;
  } else if (contentLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <Box>
        <Flex width="100%">
          <Spacer />
          <h1 className={bodyStyles.title}>
            <span>About Destination Hub</span>
          </h1>
          <Spacer />
        </Flex>
        <Flex width="100%">
          <Spacer />
          <p className={bodyStyles.description}>
            We help people find their destination!
          </p>
          <Spacer />
        </Flex>

        <Grid h="100%" templateColumns="repeat(1, 1fr)" gap={3}>
          <GridItem colSpan={1} padding="3" bg="transparent">
            <VStack>
              <Box>
                {!contentData
                  ? null
                  : contentData.allContentBlocks.map((e) => {
                      return e.column == 1 ? (
                        <ContentBlockCard content={e.richText} />
                      ) : null;
                    })}
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    );
  }
};

export default About;
