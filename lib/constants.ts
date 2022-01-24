const API_URL = "https://api.opensea.io/api/v1";
const ORDER_BY = [
  {
    label: "PK",
    value: "pk",
  },
  {
    label: "Sale date",
    value: "sale_date",
  },
  {
    label: "Sale count",
    value: "sale_count",
  },
  {
    label: "Sale price",
    value: "sale_price",
  },
];
const ORDER_DIRECTION = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];
const MENU = [
  {
    value: "/",
    label: "Home",
  },
  {
    value: "/updates",
    label: "Updates",
  },
  {
    value: "/manifesto",
    label: "Manifesto",
  },
];
const EXPORTS = {
  API_URL,
  ORDER_BY,
  ORDER_DIRECTION,
  MENU,
};

export default EXPORTS;
