import React from "react";
import App from "../App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import SignIn from "../auth/SignIn";
import SignIn_2 from "../auth/SignIn_2";
import SignUp from "../auth/SignUp";
import Index from "../pages/Index";
import User from "../pages/User";
import Students from "../pages/Students";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="signin_2" element={<SignIn_2 />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="logs" element={<Index />}>
          <Route path="users" element={<User />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
