import {
    Box,
    Grid,
    GridItem,
    Spinner,
    Flex,
    Spacer,
    VStack,
  } from "@chakra-ui/react";
  import React from 'react';
  import { useRouter } from 'next/router'
  import bodyStyles from "../../../styles/Body.module.css";
  import ContentBlockCard from "../../../components/ContentBlock";
  import * as pageContent from "../../../generated/graphql";
  
  const Content = () => {
    const router = useRouter()
    let id = ""

    console.log("router ready "+router.isReady)
    React.useEffect(() => {
        if(!router.isReady) return;
        console.log("1 router query id: "+router.query.id+" is type "+typeof router.query.id);
        id = router.query.id as string
    }, [router.isReady])
    console.log("router ready "+router.isReady)


    console.log("2 router query id: "+id+" is type "+typeof id);
    id = router.query.id as string

    console.log("3 router query id: "+id+" is type "+typeof id);
    let p = id
    if (p == null || typeof p != "string" || p == "") {
        console.log("setting default p "+p+" is a "+typeof p)
        p = "test1"
    }
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
    };
};

export default Content;