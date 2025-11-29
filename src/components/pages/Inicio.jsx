import React from 'react';

const Inicio = () => {
  return (
       
   
     <div>
      <main>
      <div id="cancherosCarousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#cancherosCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#cancherosCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#cancherosCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div classNameName="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/pelota red.jpg"
              className="w-100"
              alt="Arquero en el pasto"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-6 fw-bold">¡Tu Cancha te Espera!</h1>
              <p className="lead fw-normal">
                Reserva canchas de fútbol 5 al instante. Horarios flexibles y
                las mejores instalaciones.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="img/luces estadio.webp"
              className="w-100"
              alt="Césped de la cancha"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-6 fw-bold">¡Las Mejores Instalaciones!</h1>
              <p className="lead fw-normal">
                Calidad garantizada para tu partido: iluminación profesional y
                césped de primera.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="img/banderin.jpg"
              className="w-100"
              alt="Gente jugando al fútbol"
            />
            <div className="carousel-caption d-none d-md-block page m=0">
              <h1 className="display-6 fw-bold">¡Vení estrenala!</h1>
              <p className="lead fw-normal">
                Ya esta habilitada la cancha con alfombra de agua
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cancherosCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cancherosCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container text-center my-4">
        <button
          type="button"
          className="btn btn-primary btn-lg shadow-sm"
          data-bs-toggle="modal"
          data-bs-target="#alquilerModal"
        >
          ¡Alquila la Tuya!
        </button>
      </div>

      <div className="container my-1">
        <hr />
      </div>

      <div className="container mb-5">
        <h2 className="text-center mb-4">La Indumentaria que Necesitas</h2>
        <div className="row text-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100 card-mujer-fondo">
              <div className="card-body">
                <h5 className="card-title text-white mb-3">
                  INDUMENTARIA PARA ELLAS
                </h5>
                <p className="card-text text-white mb-4">
                  Todos los modelos que buscas de las mejores marcas.
                </p>
                <a href="#" className="btn btn-outline-light">Ver Catálogo</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100 card-hombre-fondo">
              <div className="card-body">
                <h5 className="card-title text-white mb-3">
                  INDUMENTARIA PARA EL HOMBRE
                </h5>
                <p className="card-text text-white mb-4">
                  Camisetas de los mejores clubes y selecciones.
                </p>
                <a href="#" className="btn btn-outline-light">Ver Catálogo</a>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 mb-4">
            <div className="card shadow-sm h-100 card-ninos-fondo">
              <div className="card-body">
                <h5 className="card-title text-white mb-3">TODO PARA LOS NIÑOS</h5>
                <p className="card-text text-white mb-4">
                  Las mejores pilchas para los futuros campeones.
                </p>
                <a href="#" className="btn btn-outline-light">Ver Catálogo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="alquilerModal"
        tabindex="-1"
        aria-labelledby="alquilerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title" id="alquilerModalLabel">
                Alquiler de Cancha
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="nombreApellido" className="form-label"
                    >Nombre y Apellido</label
                  >
                  <input
                    type="text"
                    className="form-control"
                    id="nombreApellido"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="fecha" className="form-label">Fecha</label>
                  <input type="date" className="form-control" id="fecha" required />
                </div>

                <div className="mb-3">
                  <label for="hora" className="form-label">Hora</label>
                  <input type="time" className="form-control" id="hora" required />
                </div>

                <div className="mb-3">
                  <label for="celular" className="form-label">Celular</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="celular"
                    placeholder="Ej: 381 1234567"
                    required
                  />
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-success w-75">
                    Confirmar Reserva
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="registroModal"
        tabindex="-1"
        aria-labelledby="registroModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title" id="registroModalLabel">
                Regístrate en Cancheros
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <p className="mb-3">
                  Crea tu cuenta para acceder a reservas y compras.
                </p>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="regName"
                    placeholder="Nombre y Apellido"
                    required
                  />
                  <label for="regName">Nombre y Apellido</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="regEmail"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                  <label for="regEmail">Correo Electrónico</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="regCelular"
                    placeholder="381 1234567"
                    required
                  />
                  <label for="regCelular">Celular</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="regPassword"
                    placeholder="Contraseña"
                    required
                  />
                  <label for="regPassword">Contraseña</label>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-primary w-75">
                    Crear Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title" id="loginModalLabel">Iniciar Sesión</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <p className="mb-3">Ingresa tus datos.</p>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                  <label for="loginEmail">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Contraseña"
                    required
                  />
                  <label for="loginPassword">Contraseña</label>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-success w-75">
                    Ingresar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
   
  );
};

export default Inicio;
