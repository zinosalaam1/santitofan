import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import HBCDetail from "./pages/HBCDetail";
import SantitoDetail from "./pages/SantitoDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/hbc-solar-fan",
    Component: HBCDetail,
  },
  {
    path: "/santito-solar-fan",
    Component: SantitoDetail,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
