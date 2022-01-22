import useSWR from "swr";
import axios from "axios";
import { or, and } from "ramda";

import constants from "../lib/constants";

import { Assets } from "../types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useAssets(): {
  data: Assets;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error } = useSWR(
    `${constants.API_URL}/assets?format=json`,
    fetcher
  );
  return {
    data: or(data, { assets: [] }),
    isLoading: and(!error, !data),
    isError: error,
  };
}

export default useAssets;
