import Home from "../../Features/Home/components/Home";
import Campaigns from "../../Features/Campaigns/components/Campaigns";
import CampaignsNew from "../../Features/Campaigns/components/CampaignsNew";
import Orders from "../../Features/Orders/components/Orders";
import Reports from "../../Features/Reports/components/Reports";
import BrandsNew from "../../Features/Brands/components/BrandsNew";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/campaigns",
    component: Campaigns,
    exact: true
  },
  {
    path: "/campaigns/new",
    component: CampaignsNew
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
    path: "/brands/new",
    component: BrandsNew
  }
];
