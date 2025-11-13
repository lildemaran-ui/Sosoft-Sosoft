import PaginaInicial from "../Pages/PaginaInicial";
import Sobre from "../Pages/Sobre";
import Portfolio from "../Pages/Portifolio";

import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../Templates/DefaultLayout";

export default function AppRoutes() {
  return (
    <Routes>
      
        <Route path="/" element={<DefaultLayout/>}>
      <Route path="/" element={<Navigate to="/PaginaInicial" />}></Route>
      <Route
        path="/PaginaInicial"
        element={<PaginaInicial></PaginaInicial>}
      ></Route>
      <Route path="/Portifolio" element={<Portfolio></Portfolio>}></Route>
      <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
      </Route>
    </Routes>
  );
}
