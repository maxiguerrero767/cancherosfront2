import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ModalTurno from "./turno/ModalTurno";
import Registro from "./Registro";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "../../styles/resumenTurno.css";

const Inicio = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const [showModalTurno, setShowModalTurno] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);

  const [turnoActual, setTurnoActual] = useState(() => {
    const guardado = sessionStorage.getItem("turnoActual");
    return guardado ? JSON.parse(guardado) : null;
  }); // guarda el turno que se acaba de crear en el secionStorage

  useEffect(() => {
    const limpiarTurno = () => setTurnoActual(null);

    window.addEventListener("storage", limpiarTurno);
    return () => window.removeEventListener("storage", limpiarTurno);
  }, []);

  const guardarTurno = (turno) => {
    setTurnoActual(turno);
    setShowModalTurno(false);
  };

  const abrirModalTurno = () => {
    if (usuarioLogueado?.nombre) {
      setShowModalTurno(true); // abre el modal de turno si está logueado
    } else {
      Swal.fire({
        icon: "info",
        title: "Debes registrarte",
        text: "Para poder alquilar una cancha, primero debes registrarte o iniciar sesión.",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const cerrarModalTurno = () => setShowModalTurno(false);

  const cerrarRegistro = (exito = false) => {
    setShowRegistro(false);
    if (exito) {
      setShowModalTurno(true); // abre el modal de turno solo si el registro fue exitoso
    }
  };

  const abrirLogin = () => {
    // cerrar modal de registro y abrir login
    setShowRegistro(false);
  };

  return (
    <>
      {/* carousel alquiler de canchas */}
      <div
        id="carouselCanchas"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
      >
        <button
          className="btn btn-outline-light  position-absolute boton-alquilar"
          onClick={abrirModalTurno}
        >
          Alquilá ya
        </button>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-ratio">
              <img
                src="img/banderin.jpg"
                className="w-100 h-100 object-fit-cover"
                alt="cancha con banderin"
              />
              <div className="carousel-caption d-none d-md-block page m-0">
                <div className="bg-dark bg-opacity-50 p-3 rounded  mx-auto caja-texto">
                  <h1 className="display-7 fw-bold">¡Vení estrenala!</h1>
                  <p className="lead fw-normal">
                    Ya está habilitada la cancha con alfombra de agua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-ratio">
              <img
                src="img/luces2.jpg"
                className="w-100  object-fit-cover"
                alt="cancha iluminada"
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="bg-dark bg-opacity-50 p-3 rounded  mx-auto caja-texto">
                  <h1 className="display-7 fw-bold">
                    ¡Las Mejores Instalaciones!
                  </h1>
                  <p className="lead fw-normal">
                    Iluminación profesional y césped de primera.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-ratio">
              <img
                src="img/pelota red.jpg"
                className="w-100  object-fit-cover"
                alt="pelota en fonde de red"
              />
              <div className="carousel-caption d-none d-md-block">
                <div className="bg-dark bg-opacity-50 p-3 rounded  mx-auto caja-texto">
                  <h1 className="display-7 fw-bold">¡Tu Cancha te Espera!</h1>
                  <p className="lead fw-normal">
                    Reservá tu cancha de fútbol 5 al instante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCanchas"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCanchas"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* renderiza el turno actual */}
      {turnoActual && (
        <ResumenTurno
          turno={turnoActual}
          onCancelar={() => setTurnoActual(null)}
        />
      )}

      {/* Carrusel de publicidad */}
      <div className="slider-publicidad my-4">
        <div className="slider-track">
          <div className="slide">
            <img
              src="../img/publicidades/nike1.jpg"
              className="publi1"
              alt="Publicidad 1"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/puma.jpg"
              className="publi2"
              alt="Publicidad 2"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/dibu.jpg"
              className="publi3"
              alt="Publicidad 3"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/nike.png"
              className="publi4"
              alt="Publicidad 4"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/adidas.jpg"
              className="publi5"
              alt="Publicidad 5"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/messi.jpg"
              className="publi6"
              alt="Publicidad 6"
            />
          </div>

          {/* Para que se mueva en forma continua*/}
          <div className="slide">
            <img
              src="../img/publicidades/nike1.jpg"
              className="publi1"
              alt="Publicidad 1"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/puma.jpg"
              className="publi2"
              alt="Publicidad 2"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/dibu.jpg"
              className="publi3"
              alt="Publicidad 3"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/nike.png"
              className="publi4"
              alt="Publicidad 4"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/adidas.jpg"
              className="publi5"
              alt="Publicidad 5"
            />
          </div>
          <div className="slide">
            <img
              src="../img/publicidades/messi.jpg"
              className="publi6"
              alt="Publicidad 6"
            />
          </div>
        </div>
      </div>

      {/* venta productos */}

      <div className="container my-5">
        <h2 className="text-center mb-4">La Indumentaria que Necesitas</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* CARD 1 */}
          <div className="col">
            <div className="card text-white border-0 position-relative">
              <img
                src="./img/mujer.avif"
                className="card-img card-img-altura img-mujer-posicion"
                alt="mujer con ropa de deporte"
              />

              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-25 text-center">
                <h5 className="fw-bold mb-5">Indumentaria para ellas</h5>
                <p>Todos los modelos que buscas de las mejores marcas.</p>
                <Link
                  to="/productos/catalogoElla"
                  className="btn btn-outline-light boton-catalogo w-50 mx-auto"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col">
            <div className="card text-white border-0 position-relative">
              <img
                src="/img/hombre.jpg"
                className="card-img card-img-altura"
                alt="hombre saltando"
              />

              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-25 text-center">
                <h5 className="fw-bold mb-5">Indumentaria para el hombre</h5>
                <p>Camisetas de los mejores clubes y selecciones.</p>
                <Link
                  to="/productos/catalogoHombre"
                  className="btn btn-outline-light boton-catalogo w-50 mx-auto"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col">
            <div className="card text-white border-0 position-relative">
              <img
                src="/img/niños.jpg"
                className="card-img card-img-altura"
                alt="niños sonriendo"
              />

              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-25 text-center">
                <h5 className="fw-bold mb-5">Todo para los niños</h5>
                <p>Las mejores pilchas para los futuros campeones.</p>
                <Link
                  to="/productos/catalogoNinios"
                  className="btn btn-outline-light boton-catalogo w-50 mx-auto"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col">
            <div className="card text-white border-0 position-relative">
              <img
                src="/img/accesorios3.avif"
                className="card-img card-img-altura"
                alt="accesorios deportivos"
              />

              <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-25 text-center">
                <h5 className="fw-bold mb-5">Accesorios Deportivos</h5>
                <p>Todo lo que necesitás para completar tu equipamiento.</p>
                <Link
                  to="/productos/catalogoAccesorio"
                  className="btn btn-outline-light boton-catalogo w-50 mx-auto"
                >
                  Ver Catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de turno */}
      <ModalTurno
        show={showModalTurno}
        handleClose={cerrarModalTurno}
        guardarTurno={guardarTurno}
      />

      {/* Modal de registro */}
      <Registro
        show={showRegistro}
        handleClose={cerrarRegistro} // ahora puede recibir true para abrir turno
        setUsuarioLogueado={setUsuarioLogueado}
        abrirLogin={abrirLogin}
      />
    </>
  );
};

export default Inicio;
