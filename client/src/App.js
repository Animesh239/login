import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
