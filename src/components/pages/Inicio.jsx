import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <>
      {/* carousel alquiler de canchas */}
      <div
        id="carouselCanchas"
        className="carousel slide position-relative "
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <button className="btn btn-outline-light  position-absolute boton-alquilar">
          Alquilá ya
        </button>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-ratio">
              <img
                src="img/banderin.jpg"
                className="w-100 h-100  object-fit-cover"
                alt="Canchas de fútbol 5"
              />
              <div className="carousel-caption d-none d-md-block page m=0">
                <div className="bg-dark bg-opacity-50 p-3 rounded  mx-auto caja-texto">
                  <h1 className="display-7 fw-bold">¡Vení estrenala!</h1>
                  <p className="lead fw-normal">
                    Ya esta habilitada la cancha con alfombra de agua
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item ">
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
        <h2 className="text-center mb-4">La indumentaria que necesitás</h2>

        <Container>
          <Row className="g-3 justify-content-center">
            {/* CARD 1 */}
            <Col xs={10} md={5} lg={3}>
              <div className="card card-catalogo text-white border-0 position-relative">
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
            </Col>

            {/* CARD 2 */}
            <Col xs={10} md={5} lg={3}>
              <div className="card card-catalogo text-white border-0 position-relative">
                <img
                  src="/img/hombre.jpg"
                  className="card-img card-img-altura"
                  alt="hombre saltando"
                />

                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-25 text-center">
                  <h5 className="fw-bold mb-3">Indumentaria para el hombre</h5>
                  <p>Camisetas de los mejores clubes y selecciones.</p>
                  <Link
                    to="/productos/catalogoHombre"
                    className="btn btn-outline-light boton-catalogo w-50 mx-auto"
                  >
                    Ver Catálogo
                  </Link>
                </div>
              </div>
            </Col>

            {/* CARD 3 */}
            <Col xs={10} md={5} lg={3}>
              <div className="card card-catalogo text-white border-0 position-relative">
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
            </Col>

            {/* CARD 4 */}
            <Col xs={10} md={5} lg={3}>
              <div className="card card-catalogo text-white border-0 position-relative">
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Inicio;
