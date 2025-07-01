import { lazy } from "react";
const App = lazy(()=> import("../App"))
import {SignIn, SignIn_2, SignUp, Driver, User, Students, Statictics, Head} from "@pages"
import {Logs, Light, Dark} from "@components"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        {/* <Route path="main" element={<Main />} /> */}
        <Route path="signin_2" element={<SignIn_2 />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="logs" element={<Logs />}>
          <Route path="users" element={<User />} />
          <Route path="students" element={<Students />} />
          <Route path="driver" element={<Driver />} />
          <Route path="dark" element={<Dark />} />
          <Route path="head" element={<Head />} />
          <Route path="statictics" element={<Statictics />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
