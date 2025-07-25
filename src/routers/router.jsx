import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { UseEffectPage } from "../pages/UseEffectPage";
import { ImagenesPage } from "../pages/ImagenesPage";
import { RutasAnidadasPage } from "../pages/RutasAnidadasPage";
import { PerfilPage } from "../pages/PerfilPage";
import { ConfiguracionPage } from "../pages/ConfiguracionPage";
import { ApisPage } from "../pages/ApisPage";
import { FormulariosPage } from "../pages/FormulariosPage";

export const MyRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/apis" element={<ApisPage />} />
      <Route path="/useffect" element={<UseEffectPage />} />
      <Route path="/imagenes" element={<ImagenesPage />} />
      <Route path="/formularios" element={<FormulariosPage />} />
      <Route path="/rutasanidadas" element={<RutasAnidadasPage />}>
        {/* ruta por defecto */}
        <Route index element={<Navigate to={"perfil/10"} replace />} />

        <Route index path="perfil/:id" element={<PerfilPage />} />
        <Route path="configuracion" element={<ConfiguracionPage />} />
      </Route>

      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
