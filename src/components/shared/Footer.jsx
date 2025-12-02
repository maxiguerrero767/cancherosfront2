import React, { useState } from "react";
import Login from "../pages/Login"; // ajustá la ruta según tu proyecto

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; Todos los derechos reservados.</p>

        {/* BOTÓN TEMPORAL PARA PROBAR LOGIN */}
        <button
          className="btn btn-primary mt-2"
          onClick={() => setShowLogin(true)}
        >
          Probar Login
        </button>

        {/* MODAL LOGIN */}
        <Login show={showLogin} handleClose={() => setShowLogin(false)} />
      </footer>
    </div>
  );
};

export default Footer;
