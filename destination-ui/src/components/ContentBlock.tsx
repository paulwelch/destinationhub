import { Box, Badge, Link, Flex, Text, Image } from "@chakra-ui/react";
import { DocumentRenderer } from "@keystone-next/document-renderer";
import { ContentBlock_RichText_DocumentField } from "../generated/graphql";

interface ContentBlockProps {
  content: ContentBlock_RichText_DocumentField;
}

const ContentBlockCard: React.FC<ContentBlockProps> = (props) => {
  return (
    <Box margin="3" flex="1" width="100%" borderWidth="0px">
      <DocumentRenderer document={props.content.document} />
    </Box>
  );
};

export default ContentBlockCard;
