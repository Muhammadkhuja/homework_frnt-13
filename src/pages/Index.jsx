// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Home from "../components/Home";

// function Index() {
//   const location = useLocation();
//   const isOnlyApiPath = location.pathname === "/logs";

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {isOnlyApiPath && (
//         <div className="mb-6">
//           <Home />
//         </div>
//       )}
//       <Outlet />
//     </div>
//   );
// }

// export default Index;
import { lazy } from "react";

const SignIn = lazy(()=> import("./auth/SignIn"))
const SignIn_2 = lazy(()=> import("./auth/SignIn_2"))
const SignUp = lazy(()=> import("./auth/SignUp"))
const Index = lazy(()=> import("./Index"))
const User = lazy(()=> import("./User"))
const Students = lazy(()=> import("./Students"))
const Statictics = lazy(()=> import("./Statictics"))



export {SignIn, SignIn_2, SignUp, Index, User, Students, Statictics}