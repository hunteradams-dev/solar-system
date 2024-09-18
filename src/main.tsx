import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Experience from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Experience />
  </StrictMode>
);
