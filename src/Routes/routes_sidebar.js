import Home from "../Home/Home";
import Campaigns from "../Campaigns/Campaigns";
import Orders from "../Orders/Orders";
import Reports from "../Reports/Reports";
import Brands from "../Brands/Brands";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/campaigns",
    component: Campaigns
  },
  {
    path: "/orders",
    component: Orders
  },
  {
    path: "/reports",
    component: Reports
  },
  {
    path: "/brands",
    component: Brands
  }
];
