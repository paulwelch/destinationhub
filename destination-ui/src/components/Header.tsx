import { Box, Spinner, Image, Flex } from "@chakra-ui/react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Destination</span> Hub
      </h1>
      <p className={headerStyles.description}>Find the right place for you!</p>
    </div>
  );
};

export default Header;
