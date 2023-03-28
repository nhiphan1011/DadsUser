import { Navigate, RouteObject } from "react-router-dom";

import { PublicLayout } from "components/layouts";
// import { Register } from "pages/RegisterPage";

const AuthRoutes = (auth: boolean) => {
  return [
    {
      path: "/register",
      element: auth ? <Navigate to={"/"} /> : <PublicLayout />,
      children: [
        {
          index: true,
          // element: <Register />,
        },
      ],
    },
  ];
};

export default AuthRoutes;
