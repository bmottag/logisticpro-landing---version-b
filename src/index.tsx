import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VersionB } from "./screens/VersionB/VersionB";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <VersionB />
  </StrictMode>,
);
