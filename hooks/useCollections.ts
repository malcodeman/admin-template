import useSWR from "swr";
import axios from "axios";
import { or, and } from "ramda";

import constants from "../lib/constants";

import { Collection } from "../types";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useCollections(): {
  data: Collection;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error } = useSWR(
    `${constants.API_URL}/collections?format=json`,
    fetcher
  );
  return {
    data: or(data, { collections: [] }),
    isLoading: and(!error, !data),
    isError: error,
  };
}

export default useCollections;
