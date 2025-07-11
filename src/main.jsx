import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/route";

createRoot(document.getElementById("root")).render(<Router />);
