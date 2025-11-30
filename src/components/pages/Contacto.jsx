import { Container, Form, Button, FloatingLabel } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="my-5 p-4 p-md-5 border rounded-3 shadow-lg bg-body-tertiary">
      <h1 className="text-center mb-4 display-5">¿Tenés alguna consulta o sugerencia?</h1>
      <p className="text-center mb-5 text-muted">
        Contactanos y nuestro equipo de Cancheros te responderá a la brevedad.
      </p>

      <Form>
        {/* Nombre */}
        <FloatingLabel
          controlId="floatingInputNombre"
          label="Nombre completo"
          className="mb-3"
        >
          <Form.Control 
          type="text" 
          placeholder="Tu Nombre" 
          required />
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
            required
          />
        </FloatingLabel>

        {/* Mensaje (Textarea) */}
        <FloatingLabel
          controlId="floatingTextareaMensaje"
          label="Escribe tu mensaje o consulta"
          className="mb-4"
        >
          <Form.Control
            as="textarea"
            placeholder="Escribe tu mensaje o consulta"
            style={{ height: "150px" }} // Define la altura del textarea
            required
          />
        </FloatingLabel>

        {/* Botón de Enviar */}
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit" size="lg">
            Enviar Consulta
          </Button>
        </div>

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
