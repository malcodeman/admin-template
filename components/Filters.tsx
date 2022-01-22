import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { map } from "ramda";

import { Collection } from "../types";

type Props = {
  collections: Collection;
};

const Filters = (props: Props) => {
  const { collections } = props;
  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Collections
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Input variant={"filled"} placeholder="Search..." mb="2" />
          {map(
            (item) => (
              <Flex key={item.slug} alignItems={"center"}>
                {item.slug}
              </Flex>
            ),
            collections.collections
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;
