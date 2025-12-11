import React from "react";
import "../../styles/menu.css";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import logoDibuNeon17 from "../../img/logoDibuNeon17.png";

const Menu = ({
  isAdmin,
  usuario,
  abrirLogin,
  abrirRegistro,
  cerrarSesion,
}) => {
  return (
    <header className="navbar-oscuro">
      <Link to="/" className="text-decoration-none text-white">
        <div className="logo-container">
{/*           <span className="logo-icon">⚽</span>
 */}         
           <img 
            src={logoDibuNeon17}
            alt="logo cancheros" 
            className="logo-img"
          />
  {/* <span className="logo-text">Cancheros TRUCHO</span> */}
        </div>
      </Link>

      <nav className="nav-links">
        
        <Link to="/" className="nav-item">
          Inicio
        </Link>

        {isAdmin ? (
          <>
            <Link to="/administrador" className="nav-link-light">
              Administrador
            </Link>
            <span className="nav-link-light" onClick={cerrarSesion}>
              Cerrar sesión
            </span>
          </>
        ) : usuario ? (
          <>
            <span className="nav-link-light me-2"><i className="bi bi-person-plus"></i>  {usuario}</span>
            <span className="nav-link-light" onClick={cerrarSesion}>
              Cerrar sesión
            </span>
          </>
        ) : (
          <>
            <span className="nav-link-light" onClick={abrirLogin}>
              Iniciar Sesión
            </span>
            <span className="nav-link-light" onClick={abrirRegistro}>
              Regístrate
            </span>
          </>
        )}
      </nav>
    </header>
  );
};

export default Menu;
