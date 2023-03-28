import { RouteObject } from "react-router-dom";

import PrivatePage from "pages/PrivatePage";

const PrivateRoute: Array<RouteObject> = [
  {
    path: "/private",
    element: <PrivatePage />,
  },
];

export default PrivateRoute;
