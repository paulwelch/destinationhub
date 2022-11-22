import {
    Box,
    Grid,
    GridItem,
    Spinner,
    Flex,
    Spacer,
    VStack,
  } from "@chakra-ui/react";
  import { useRouter } from 'next/router'
  import bodyStyles from "../../../styles/Body.module.css";
  import ContentBlockCard from "../../../components/ContentBlock";
  import * as pageContent from "../../../generated/graphql";
  
  const Content = () => {
    const router = useRouter()
    const p = router.query.id as string

    const {
        data: pageData,
        error: pageError,
    } = pageContent.usePageQuery({ variables: { name: p as string } });

    const {
        data: contentData,
        loading: contentLoading,
        error: contentError,
    } = pageContent.useContentBlockQuery({ variables: { page: p as string } });
    if (pageError || contentError) {
    return <span><p>{pageError.message}</p><p>{contentError.message}</p></span>;
    } else if (contentLoading) {
    return <Spinner></Spinner>;
    } else {
        return (
            <Box>
            <Flex width="100%">
                <Spacer />
                <h1 className={bodyStyles.title}>
                <span>{pageData.allPages[0].title}</span>
                </h1>
                <Spacer />
            </Flex>
            <Flex width="100%">
                <Spacer />
                <p className={bodyStyles.description}>
                {pageData.allPages[0].subTitle}
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
                <GridItem rowStart={1} colStart={2} colSpan={4} bg="transparent">
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
            </Box>
        );
    };
};

export default Content;