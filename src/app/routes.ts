import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Candidatos } from "./pages/Candidatos";
import { Propuestas } from "./pages/Propuestas";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/candidatos",
    Component: Candidatos,
  },
  {
    path: "/propuestas",
    Component: Propuestas,
  },
]);
