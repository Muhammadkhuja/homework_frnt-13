import React from "react";
import { Outlet } from "react-router-dom";
// import { lazy } from "react"; 
// const Footer = lazy(()=> import("./components/Footer"))
// const Header = lazy(()=> import("./components/Header"))
// const Main = lazy(()=> import("./components/Main"))
import "./index.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
function App() {
  return <Outlet />;
}

export default App;
