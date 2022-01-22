import React from "react";
import { Grid, Box } from "@chakra-ui/layout";
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
  const { data: collections } = useCollections();

  return (
    <Grid gridTemplateColumns={"1fr 4fr"} minHeight={"100vh"}>
      <Box>
        <Filters
          collections={collections}
          setOrderBy={setOrderBy}
          setOrderDirection={setOrderDirection}
        />
      </Box>
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
    </Grid>
  );
};

export default Home;
