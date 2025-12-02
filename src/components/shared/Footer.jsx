import React, { useState } from "react";
import Login from "../pages/Login";
import Registro from "../pages/Registro";

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  const abrirLogin = () => setShowLogin(true);
  const abrirRegistro = () => setShowRegistro(true);

  return (
    <div>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; Todos los derechos reservados.</p>

        {/* BOTÓN TEMPORAL PARA PROBAR LOGIN */}
        <button
          className="btn btn-primary mt-2 me-2"
          onClick={() => setShowLogin(true)}
        >
          Probar Login
        </button>

        {/* BOTÓN TEMPORAL PARA PROBAR REGISTRO */}
        <button
          className="btn btn-success mt-2"
          onClick={() => setShowRegistro(true)}
        >
          Probar Registro
        </button>

        {/* MODAL LOGIN */}
        <Login
          show={showLogin}
          handleClose={() => setShowLogin(false)}
          abrirRegistro={abrirRegistro}
        />

        {/* MODAL REGISTRO */}
        <Registro
          show={showRegistro}
          handleClose={() => setShowRegistro(false)}
          abrirLogin={abrirLogin}
        />
      </footer>
    </div>
  );
};

export default Footer;
