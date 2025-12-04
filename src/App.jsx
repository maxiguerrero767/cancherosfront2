import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import "./styles/inicio.css";
import Login from "./components/pages/Login";
import Nosotros from "./components/pages/Nosotros";
import CatalogoElla from "./components/pages/productos/CatalogoElla";
import CatalogoHombre from "./components/pages/productos/CatalogoHombre";
import CatalogoNinios from "./components/pages/productos/CatalogoNinios";
import CatalogoAccesorio from "./components/pages/productos/CatalogoAccesorio";
import Administrador from "./components/pages/administrador";



function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/productos/catalogoElla" element={<CatalogoElla />} />
          <Route
            path="/productos/catalogoHombre"
            element={<CatalogoHombre />}
          />
          <Route
            path="/productos/catalogoNinios"
            element={<CatalogoNinios />}
          />
          <Route path="/productos/catalogoAccesorio" element={<CatalogoAccesorio />} />
          <Route path="/admin" element={<Administrador />} />
        </Routes>
       </main>
      {<Footer></Footer>}
    </BrowserRouter>
  );
}

export default App;
