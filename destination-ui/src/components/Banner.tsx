import { Box, Image, Flex, Center, Spacer } from "@chakra-ui/react";
import bannerStyles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <Box>
      <Flex width="100%">
        <Image
          src={`/images/beach-banner.jpg`}
          height={150}
          width="100%"
          alt="test"
        ></Image>
      </Flex>
      <Flex width="100%" className={bannerStyles.headline}>
        <Center>Banner Sub-Headline Stuff</Center>
        <Spacer />
        <Center>Right Aligned Stuff</Center>
      </Flex>
    </Box>
  );
};

export default Banner;
