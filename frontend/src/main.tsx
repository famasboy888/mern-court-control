import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      hideProgressBar
      draggable
      newestOnTop
    />
  </StrictMode>
);
