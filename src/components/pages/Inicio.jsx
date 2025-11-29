import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Inicio = () => {
  return (
    <>
      <div
        id="carouselCanchas"
        className="carousel slide position-relative"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        {/* BOTÓN FIJO, INDEPENDIENTE DE LAS FOTOS */}
        <button className="btn btn-warning position-absolute boton-alquilar">
          Alquilá ya
        </button>

        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <div className="carousel-ratio">
              <img
                src="img/banderin.jpg"
                className="w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block page m=0">
                <h1 className="display-6 fw-bold">¡Vení estrenala!</h1>
                <p className="lead fw-normal">
                  Ya esta habilitada la cancha con alfombra de agua
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-ratio">
              <img
                src="img/luces estadio.webp"
                className="w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-6 fw-bold">¡Las Mejores Instalaciones!</h1>
                <p className="lead fw-normal">
                  Calidad garantizada: iluminación profesional y césped de primera.
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-ratio">
              <img
                src="img/pelota red.jpg"
                className="w-100 h-100 object-fit-cover"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="display-6 fw-bold">¡Tu Cancha te Espera!</h1>
                <p className="lead fw-normal">
                  Reservá tu cancha de fútbol 5 al instante.
                </p>
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
    </>
  );
};

export default Inicio;
