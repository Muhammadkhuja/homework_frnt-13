import { lazy } from "react";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./Home"));
const Test = lazy(() => import("./Test"));

export { Cart, Home, Test };
