import React from "react";
import { Grid, Box, Divider, Heading, Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { map } from "ramda";
import type { NextPage } from "next";

import useAssets from "../hooks/useAssets";
import useCollections from "../hooks/useCollections";

import Asset from "../components/Asset";
import Filters from "../components/Filters";

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

  return (
    <Grid gridGap={"4"} gridTemplateColumns={["1fr", "1fr", "256px 1fr"]}>
      <Box display={["none", "none", "block"]}>
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
        <Heading fontSize={"2xl"} textTransform={"uppercase"} mb={"2"}>
          NFTs
        </Heading>
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
