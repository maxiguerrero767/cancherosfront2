import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import "./styles/inicio.css";
import Administrador from "./components/pages/administrador";

function App() {
  return (
    <BrowserRouter>
      {<Menu></Menu>}
      
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/admin" element={<Administrador />} />
        </Routes>
      </main>
      {<Footer></Footer>}
    </BrowserRouter>
  );
}

export default App;
