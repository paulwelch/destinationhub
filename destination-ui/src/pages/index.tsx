import {
  Spinner,
  Spacer,
  Flex,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import bodyStyles from "../styles/Body.module.css";
import Banner from "../components/Banner";
import ContentBlockCard from "../components/ContentBlock";

import * as pageContent from "../generated/graphql";

const Index = () => {
  const {
    data: contentData,
    loading: contentLoading,
    error: contentError,
  } = pageContent.useContentBlockQuery({ variables: { page: "home" } });
  if (contentError) {
    return <p>{contentError.message}</p>;
  } else if (contentLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <Banner />
        <Flex width="100%">
          <Spacer />
          <h1 className={bodyStyles.title}>
            <span>Home Page</span>
          </h1>
          <Spacer />
        </Flex>
        <Flex width="100%">
          <Spacer />
          <p className={bodyStyles.description}>
            Find the right place for you!
          </p>
          <Spacer />
        </Flex>
        <Grid
          h="100%"
          templateColumns="repeat(5, 1fr)"
          gap={3}
          autoFlow="row"
          autoRows="10"
          padding={6}
        >
          <GridItem rowSpan={2} colSpan={1} bg="transparent">
            <VStack>
              {!contentData
                ? null
                : contentData.allContentBlocks.map((e) => {
                    return e.column == 1 ? (
                      <ContentBlockCard content={e.richText} />
                    ) : null;
                  })}
            </VStack>
          </GridItem>
          <GridItem colStart={5} rowSpan={2} colSpan={1} bg="transparent">
            <VStack>
              {!contentData
                ? null
                : contentData.allContentBlocks.map((e) => {
                    return e.column == 3 ? (
                      <ContentBlockCard content={e.richText} />
                    ) : null;
                  })}
            </VStack>
          </GridItem>
          <GridItem rowStart={1} colStart={2} colSpan={3} bg="transparent">
            <VStack>
              {!contentData
                ? null
                : contentData.allContentBlocks.map((e) => {
                    return e.column == 2 ? (
                      <ContentBlockCard content={e.richText} />
                    ) : null;
                  })}
            </VStack>
          </GridItem>
        </Grid>
      </>
    );
  }
};

export default Index;
