import { lazy } from "react";

const Cart = lazy(() => import("./Cart"));
const Home = lazy(() => import("./Home"));
const Test = lazy(() => import("./Test"));
const Logs = lazy(()=> import("./Logs"))

export { Cart, Home, Test, Logs };
