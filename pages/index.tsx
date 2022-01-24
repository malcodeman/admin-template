import React from "react";
import { Grid, Box, Divider, Heading, Center, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { map } from "ramda";
import { Filter } from "react-feather";
import type { NextPage } from "next";

import useAssets from "../hooks/useAssets";
import useCollections from "../hooks/useCollections";

import Asset from "../components/Asset";
import Filters from "../components/Filters";
import Drawer from "../components/Drawer";

import { OrderBy, OrderDirection } from "../types";

const Home: NextPage = () => {
  const [orderBy, setOrderBy] = React.useState<OrderBy>("sale_price");
  const [orderDirection, setOrderDirection] =
    React.useState<OrderDirection>("asc");
  const { data: assets } = useAssets({
    orderBy: orderBy,
    orderDirection: orderDirection,
    collection: "azuki",
  });
  const { data: collections, isLoading } = useCollections();
  const { isOpen, onOpen, onClose } = useDisclosure();

  function renderFiltersButton() {
    return (
      <React.Fragment>
        <Button
          display={["inline-flex", "inline-flex", "none"]}
          size={"sm"}
          onClick={onOpen}
          leftIcon={<Filter />}
        >
          Filters
        </Button>
        <Drawer isOpen={isOpen} header="Filters" onClose={onClose}>
          <Filters
            collections={collections}
            setOrderBy={setOrderBy}
            setOrderDirection={setOrderDirection}
          />
        </Drawer>
      </React.Fragment>
    );
  }

  return (
    <Grid gridGap={"4"} gridTemplateColumns={["1fr", "1fr", "256px 1fr"]}>
      <Box
        display={["none", "none", "block"]}
        position={"sticky"}
        top={"0"}
        alignSelf={"start"}
      >
        <Heading fontSize={"2xl"} textTransform={"uppercase"} mb={"2"}>
          Filter
        </Heading>
        <Divider mb={"4"} />
        <Filters
          collections={collections}
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        />
      </Box>
      <Box>
        <Flex justifyContent={"space-between"}>
          <Heading fontSize={"2xl"} textTransform={"uppercase"} mb={"2"}>
            NFTs
          </Heading>
          {renderFiltersButton()}
        </Flex>
        <Divider mb={"4"} />
        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Grid
            gridGap={"4"}
            gridTemplateColumns={"repeat(auto-fill, minmax(222px, 1fr))"}
          >
            {map(
              (item) => (
                <Asset
                  key={item.id}
                  id={item.id}
                  image_url={item.image_url}
                  name={item.name}
                  permalink={item.permalink}
                />
              ),
              assets.assets
            )}
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default Home;
