const login = () => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}
      className="modal-custom-content"
    >
      <Modal.Header
        closeButton
        className="mmd modal-header modal-custom-header"
      >
        <Modal.Title>Iniciar Sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body className="nav-pri modal-custom-body">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              {...register("email", { required: "El email es obligatorio" })}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
              })}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </Form.Group>

          <div className="text-center mt-3">
            <Link className="text-success fw-semibold text-muted">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="text-center mt-3">
            <small>
              ¿Aún no tienes cuenta?
              <Link to={"/registro"} onClick={closeModal}>
                Regístrate
              </Link>
            </small>
            <div className="my-2">
              <Button variant="success" type="submit">
                Iniciar Sesión
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer className="mmd modal-custom-footer">
        <Button variant="secondary" onClick={closeModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default login;
