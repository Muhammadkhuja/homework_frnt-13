import { lazy } from "react";

const SignIn = lazy(() => import("./auth/SignIn"));
const SignIn_2 = lazy(() => import("./auth/SignIn_2"));
const SignUp = lazy(() => import("./auth/SignUp"));
const Index = lazy(() => import("./Index"));
const User = lazy(() => import("./User"));
const Students = lazy(() => import("./Students"));
const Statictics = lazy(() => import("./Statictics"));

export { SignIn, SignIn_2, SignUp, Index, User, Students, Statictics };
