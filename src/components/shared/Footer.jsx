import { Link } from "react-router-dom";
import "../../styles/Footer.css"; 
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="">
      <Row className="links-section bg-black text-white pt-4">
        <div className="container">
          <div className="row text-center text-md-start pb-2">
            {/* Columna Contactanos */}
            <div className="col-md-4 mb-3 text-center">
              <h6 className="titulos-redes fw-bold mb-1">Contactanos</h6>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <i className="bi bi-whatsapp"></i>
                <i className="bi bi-envelope"></i>
              </div>
            </div>

            {/* Columna Redes */}
            <div className="col-md-4 mb-3 text-center">
              <h6 className="titulos-redes fw-bold mb-1">Nuestras redes</h6>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>

            {/* Columna Descarga */}
            <div className="col-md-4 mb-1 text-center">
              <h6 className="titulos-redes fw-bold mb-1">Descargá la app</h6>
              <div className="d-flex justify-content-center gap-3 social-icons">
                <i class="bi bi-apple"></i>
                <i class="bi bi-google-play"></i>
              </div>
            </div>
          </div>

          <div className="text-center mb-4 pt-3 border-top border-secondary">
            <small className="text-muted">
              © Copyright 2024. Todos los derechos reservados.
            </small>
          </div>
        </div>
      </Row>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="bi bi-whatsapp"></i>
        Contactanos
      </a>
    </Container>
  );
};

export default Footer;
