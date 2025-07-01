import { lazy } from "react";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./Home"));
const Test = lazy(() => import("./Test"));
const Logs = lazy(() => import("./Logs"));
const Light = lazy(() => import("./Light"));
const Dark = lazy(() => import("./Dark"));

export { Cart, Home, Test, Logs, Light, Dark };
