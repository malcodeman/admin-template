import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Box, Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { map } from "ramda";

import constants from "../lib/constants";

import { Collection, OrderBy, OrderDirection } from "../types";

type Props = {
  collections: Collection;
  setOrderBy: (val: OrderBy) => void;
  setOrderDirection: (val: OrderDirection) => void;
};

const Filters = (props: Props) => {
  const { collections, setOrderBy, setOrderDirection } = props;
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
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Order
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Select
            mb="2"
            variant={"filled"}
            onChange={(e) =>
              setOrderDirection(e.target.value as OrderDirection)
            }
          >
            {map(
              (item) => (
                <option value={item.value}>{item.label}</option>
              ),
              constants.ORDER_DIRECTION
            )}
          </Select>
          <Select
            variant={"filled"}
            onChange={(e) => setOrderBy(e.target.value as OrderBy)}
          >
            {map(
              (item) => (
                <option value={item.value}>{item.label}</option>
              ),
              constants.ORDER_BY
            )}
          </Select>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Filters;
