import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Spinner,
  Flex,
  Spacer,
  VStack,
  HStack,
} from "@chakra-ui/react";
import bodyStyles from "../styles/Body.module.css";
import ContentBlockCard from "../components/ContentBlock";
import MyAccountCard from "../components/MyAccountCard";
import * as pageContent from "../generated/graphql";

const Account = () => {
  const {
    data: contentData,
    loading: contentLoading,
    error: contentError,
  } = pageContent.useContentBlockQuery({ variables: { page: "account" } });
  const {
    data: accountData,
    loading: accountLoading,
    error: accountError,
  } = pageContent.useAccountDetailQuery({
    variables: { email: "me@example.com" },
  });
  //TODO: get account info for current logged in user

  if (contentError) {
    return <p>{contentError.message}</p>;
  } else if (accountError) {
    return <p>{accountError.message}</p>;
  } else if (contentLoading || accountLoading) {
    return <Spinner></Spinner>;
  } else {
    return (
      <Box>
        <Flex width="100%">
          <Spacer />
          <h1 className={bodyStyles.title}>
            <span>My Account</span>
          </h1>
          <Spacer />
        </Flex>
        <Flex width="100%">
          <Spacer />
          <p className={bodyStyles.description}>
            Enter your account information
          </p>
          <Spacer />
        </Flex>

        <Grid h="100%" templateColumns="repeat(5, 1fr)" gap={3}>
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
          <GridItem colSpan={3} padding="3" bg="transparent">
            {!accountData || accountData.allAccounts.length == 0 ? (
              <MyAccountCard isSubmitting={false}></MyAccountCard>
            ) : (
              <MyAccountCard
                id={accountData.allAccounts[0].id}
                isSubmitting={false}
                firstName={accountData.allAccounts[0].firstName}
                lastName={accountData.allAccounts[0].lastName}
                email={accountData.allAccounts[0].user.email}
                phone={accountData.allAccounts[0].phone}
                address1={accountData.allAccounts[0].address1}
                address2={accountData.allAccounts[0].address2}
                city={accountData.allAccounts[0].city}
                state={accountData.allAccounts[0].state.code}
                zip={accountData.allAccounts[0].zip}
              ></MyAccountCard>
            )}
          </GridItem>
        </Grid>
      </Box>
    );
  }
};

export default Account;
