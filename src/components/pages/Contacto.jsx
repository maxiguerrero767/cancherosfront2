import {
  Container,
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
} from "react-bootstrap";
import "../../styles/contacto.css";

const Contacto = () => {
  return (
    <Container className="my-5 p-4 p-md-5 border rounded-3 shadow-lg bg-body-tertiary">
      <h1 className="text-center mb-4 display-5">
        ¿Tenés alguna consulta o sugerencia?
      </h1>
      <p className="text-center mb-5 text-muted">
        Contactanos y nuestro equipo de Cancheros te responderá a la brevedad.
      </p>

      <Form>
        <Container>
          <Row className="row-gap-3 justify-content-center">
            <Col xs={10} md={7}>
              {/* Nombre */}
              <FloatingLabel
                controlId="floatingInputNombre"
                label="Nombre y apellido"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Tu Nombre"
                  minLength={5}
                  maxLength={30}
                  required
                />
              </FloatingLabel>

              {/* Email */}
              <FloatingLabel
                controlId="floatingInputEmail"
                label="Correo electrónico"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="nombre@ejemplo.com"
                  minLength={3}
                  maxLength={100}
                  required
                />
              </FloatingLabel>

              {/* Teléfono */}
              <FloatingLabel
                controlId="floatingInputTeléfono"
                label="Teléfono"
                className="mb-3"
              >
                <Form.Control
                  type="tel"
                  placeholder="Teléfono"
                  minLength={10}
                  maxLength={17}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={10} md={5}>
              {/* Mensaje (Textarea) */}
              <div className="textarea" >
                <FloatingLabel
                  controlId="floatingTextareaMensaje"
                  label="Escribe tu mensaje o consulta"
    style={{ height: '150px' }}
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Escribe tu mensaje o consulta"
                    minLength={10}
                    maxLength={500}
                    
                    required
                  />
                </FloatingLabel>
              </div>

              {/* Botón de Enviar */}
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size="lg">
                  Enviar Consulta
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Si necesitas un botón de "Volver" */}
        {/* <div className="text-center mt-3">
                    <Button as={Link} to="/" variant="secondary">
                        Volver al Inicio
                    </Button>
                </div> */}
      </Form>
    </Container>
  );
};

export default Contacto;
