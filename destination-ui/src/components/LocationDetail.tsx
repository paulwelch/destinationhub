import { Box, Badge, Flex, Text, Image } from "@chakra-ui/react";
import { DocumentRenderer } from "@keystone-next/document-renderer";

import {
  State,
  City,
  Tag,
  Location_Description_DocumentField,
} from "../generated/graphql";

interface LocationDetailProps {
  id: string;
  name: string;
  shortDescription: string;
  city: City;
  state: State;
  imageFilename: string;
  description: Location_Description_DocumentField;
  //tags: Tag[];
}

const LocationDetail: React.FC<LocationDetailProps> = (props) => {
  return (
    <Box
      maxW="full"
      maxH="full"
      m={2}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge height="5" borderRadius="full" px="2" colorScheme="blue">
            {props.name}
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
            {/* TODO: wrap this and only show if capital city has a value */}
            {/* {"Capital City is "}
            {props.state.capital} */}
          </Box>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {/* {props.description} */}
          </Box>
        </Box>
      </Box>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        <Image
          src={`/images/${props.imageFilename}`}
          height={144}
          width={144}
          alt={props.name}
        />
      </Box>
      <DocumentRenderer document={props.description.document} />
    </Box>
  );
};

export default LocationDetail;
