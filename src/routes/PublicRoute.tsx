import { RouteObject } from "react-router-dom";

import PublicPage from "pages/PublicPage";
import { Register } from "pages/RegisterPage";
import Home from "pages/home";
import WatchToEarnPage from "pages/watchtoearn/WatchToEarn";
import MissionToEarn from "pages/missiontoearn/MissionToEarn";
import ShopToEarn from "pages/shoptoearn";
import PlayToEarn from "pages/playtoearn/PlayToEarn";
import Wallet from "pages/wallet/Wallet";
import Profile from "pages/profile/Profile";
import { PrivateLayout } from "components/layouts";
import Assistant from "pages/assistant/Assistant";

const PublicRoute: Array<RouteObject> = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/public",
        element: <PublicPage />,
      },
      {
        path: "/watch",
        element: <WatchToEarnPage />,
      },
      {
        path: "/mission",
        element: <MissionToEarn />,
      },
      {
        path: "/shop",
        element: <ShopToEarn />,
      },
      {
        path: "/shop/:id",
        element: <ShopToEarn />,
      },
      {
        path: "/play",
        element: <PlayToEarn />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        element: <Assistant />,
        path: "/assistants",
      },
    ],
  },
];

export default PublicRoute;
