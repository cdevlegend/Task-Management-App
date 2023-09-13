import { lazy } from "react";
import Loadable from "src/components/atoms/Loadable";

const Dashboard = Loadable(lazy(() => import("../views/dashboard/index")));

const PublicRoutes = {
  path: "/",
  element: <Dashboard />,
};

export default PublicRoutes;
