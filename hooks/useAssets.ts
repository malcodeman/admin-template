import useSWR from "swr";
import axios from "axios";
import { or, and } from "ramda";

import constants from "../lib/constants";

import { Assets, OrderBy, OrderDirection } from "../types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type Props = {
  orderBy: OrderBy;
  orderDirection: OrderDirection;
  collection: string;
};

function useAssets(props: Props): {
  data: Assets;
  isLoading: boolean;
  isError: boolean;
} {
  const { orderBy, orderDirection, collection } = props;
  const { data, error } = useSWR(
    `${constants.API_URL}/assets?format=json&order_by=${orderBy}&order_direction=${orderDirection}&collection=${collection}`,
    fetcher
  );
  return {
    data: or(data, { assets: [] }),
    isLoading: and(!error, !data),
    isError: error,
  };
}

export default useAssets;
