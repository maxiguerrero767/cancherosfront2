import { Link } from "react-router-dom";
import "../../styles/Footer.css"; // Asegúrate de crear este archivo css
import coachTeamLeader from "../../../public/coachMotivation.bmp";
import PublicidadFooter from "./PublicidadFooter";
import { Container, Row ,Col } from "react-bootstrap";



const Footer = () => {
  return (
    <Container className="footer-container">
      {/* SECCIÓN 1: PROFESORES (Fondo Negro con Imagen) */}
      <Row className="teacher-section">
        <Col className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              {/* Imagen del profesor (puedes cambiar el src por tu imagen real) */}
              <img
                src={coachTeamLeader}
                alt="Profesor"
                className="teacher-img"
              />
            </div>
         
            <div className="col-md-7 text-white teacher-text-col">
              <h3 className="text-warning fw-bold">¿Sos profesor?</h3>
              <h4 className="fw-bold">
                ¡Registrate gratis y reservá tu lugar!
              </h4>
              <p className="mt-3">
                Asegurá tu lugar en Los Cancheritos para conectar con alumnos y
                expandir tus clases. ¡Apurate! Los cupos son limitados.
              </p>
              <button className="btn btn-warning fw-bold mt-2 px-4 rounded-pill">
                Registrarme
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="app-section text-center text-white py-5">
        
      
       
        <Col className="g-col-6 g-col-md-4">
           <h3 className="fw-bold">
            Registrate, reservá y<br />
            armá tu partido!
          </h3>
          <p className="text-warning small-text">
            Para complejos deportivos, disponible en Android, iOS y nuestra
            plataforma web
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            {/* Botones de Stores (Imágenes SVG o PNG) */}
            <a href="#" className="store-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
              />
            </a>
            <a href="#" className="store-btn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>
          </div>
          <h1>Sitio Amigos</h1>
          <div className="g-col-6 g-col-md-4">
            <PublicidadFooter/>
          </div>

        </Col
        >
       
      </Row>
      
      {/* SECCIÓN 3: LINKS Y CONTACTO (Fondo Negro Inferior) */}
      <Row className="links-section bg-black text-white py-4">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Columna Contactanos */}
            <div className="col-md-4 mb-4 mb-md-0 text-center">
              <h6 className="text-warning fw-bold mb-3">Contactanos</h6>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-envelope"></i>
              </div>
            </div>

            {/* Columna Redes */}
            <div className="col-md-4 mb-4 mb-md-0 text-center">
              <h6 className="text-warning fw-bold mb-3">Nuestras redes</h6>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>

            {/* Columna Descarga */}
            <div className="col-md-4 text-center">
              <h6 className="text-warning fw-bold mb-3">Descargá la app</h6>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="16"
                    fill="currentColor"
                    class="bi bi-apple"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google-play mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center mt-4 pt-3 border-top border-secondary">
            <small className="text-muted">
              © Copyright 2024. Todos los derechos reservados.
            </small>
          </div>
        </div>
      </Row>

      {/* BOTÓN FLOTANTE WHATSAPP (Como en tu imagen abajo derecha) */}
      <a
        href="https://wa.me/"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
        Contactanos
      </a>
    </Container>
  );
};

export default Footer;
