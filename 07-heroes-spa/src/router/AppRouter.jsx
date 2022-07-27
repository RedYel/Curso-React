import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../auth";
import { MarvelPage, DcPage } from "../heroes";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Rutas de Heroes */}
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        {/* Rutas de Login */}
        <Route path="login" element={<LoginPage />} />
        {/* Rutas Default */}
        <Route path="/" element={<Navigate to={"/marvel"} />} />
      </Routes>
    </>
  );
};
