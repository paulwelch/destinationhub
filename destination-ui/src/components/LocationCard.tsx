import { Box, Badge, Link, Flex, Text, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import { City, State } from "../generated/graphql";

interface LocationCardProps {
  id: string;
  name: string;
  shortDescription: string;
  city: City;
  state: State;
  imageFilename: string;
}

const LocationCard: React.FC<LocationCardProps> = (props) => {
  return (
    <Box maxW="xl" m={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge height="5" borderRadius="full" px="2" colorScheme="blue">
            <NextLink
              href={{
                pathname: "/location",
                query: { id: props.id },
              }}
            >
              <Link>{props.name}</Link>
            </NextLink>
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {props.city.name}
            {", "}
            {props.state.name}
          </Box>
        </Box>
      </Box>
      <Flex color="gray.500" ml="2">
        <Image
          src={`/images/${props.imageFilename}`}
          height={90}
          width={90}
          alt={props.name}
        />
        <Box
          color="gray.500"
          fontSize="small"
          textTransform="none"
          ml="4"
          mr="2"
        >
          {props.shortDescription}
        </Box>
      </Flex>
    </Box>
  );
};

export default LocationCard;
