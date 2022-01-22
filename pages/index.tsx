import type { NextPage } from "next";
import { Grid } from "@chakra-ui/layout";
import { map } from "ramda";

import useAssets from "../hooks/useAssets";

import Asset from "../components/Asset";

const Home: NextPage = () => {
  const { data } = useAssets();

  return (
    <Grid
      gridGap={"4"}
      gridTemplateColumns={[
        "repeat(2,minmax(0,1fr))",
        "repeat(4,minmax(0,1fr))",
        "repeat(6,minmax(0,1fr))",
      ]}
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
        data.assets
      )}
    </Grid>
  );
};

export default Home;
