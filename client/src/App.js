import * as React from "react";
import { useState } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import Home from "./pages/home";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/auth/signin" replace />;
  }

  return children;
};



const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home />
      
    ),
    // children:[
    //   {
    //     path: "auth/signup",
    //     element: <SignUp />
    //   },
    //   {
    //     path: "auth/signin",
    //     element: <SignIn />
    //   }
    // ]
  },
  {
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
]);

export default router;
