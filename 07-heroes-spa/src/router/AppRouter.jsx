import { Routes, Route} from "react-router-dom";
import { LoginPage } from "../auth";
import {HeroesRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>

      <Routes>
        {/* Rutas de Login */}
        <Route path="login" element={<LoginPage />} />
        {/* Cualquier ruta que no sea el login desplegarà el componente de HeroesRoutes */}
        <Route path="/*" element={<HeroesRoutes />} />
        
      </Routes>
    </>
  );
};
