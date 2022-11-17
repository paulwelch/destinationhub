import { Box, Flex, Center, Spacer, Link } from "@chakra-ui/react";
import bottomNavStyles from "../styles/BottomNav.module.css";

const BottomNav = () => {
  return (
    <>
      <nav className={bottomNavStyles.nav}>
        <Flex width="100%" className={bottomNavStyles.flex}>
          <Spacer />
          <Center>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </Center>
        </Flex>
      </nav>
    </>
  );
};

export default BottomNav;
