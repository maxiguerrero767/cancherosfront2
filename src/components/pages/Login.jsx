import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = ({ show, handleClose, abrirRegistro }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del login:", data);
    reset();
    handleClose();
    abrirRegistro();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="border border-white border-3"
    >
      <Modal.Header closeButton className="">
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="juan@email.com"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,4}$/,
                  message: "El formato del email no es válido",/* des pues del @ . min 2, max 4 letras */
                },
              })}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              {...register("password", {
                required: "La contraseña es obligatoria",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{8,}$/,
                  message:
                    "Mínimo 8 caracteres, una mayúscula, un número y un símbolo especial",
                },
              })}
            />
            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-50 mx-auto d-block"
          >
            Iniciar sesión
          </Button>
          <div className="text-center mt-3">
            <span>¿Aún no te registraste? </span>

            <button
              type="button"
              className="btn btn-link p-0 text-primary"
              onClick={() => {
                handleClose(); // Cierra el login
                abrirRegistro(); // Abre el registro
              }}
            >
              Registrate
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
