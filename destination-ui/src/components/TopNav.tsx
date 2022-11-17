import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import Search from "./Search";
import topNavStyles from "../styles/TopNav.module.css";

const TopNav = () => {
  return (
    <Box>
      <nav className={topNavStyles.nav}>
        <Flex width="100%">
          <Center>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {/* TODO: finish implementing login and account pages */}
              {/* <li>
                <Link href="/account">My Account</Link>
              </li> */}
              <li>
                <Link href="/explore">Explore</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </Center>
          <Spacer />
          <Search />
        </Flex>
      </nav>
    </Box>
  );
};

export default TopNav;
