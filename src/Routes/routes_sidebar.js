import Home from "../Home/Home";
import Campaigns from "../Campaigns/Campaigns";
import Brands from "../Brands/Brands";

export default [
  {
    path: "/",
    exact: true,
    main: Home
  },
  {
    path: "/campaigns",
    main: Campaigns
  },
  {
    path: "/brands",
    main: Brands
  }
];
