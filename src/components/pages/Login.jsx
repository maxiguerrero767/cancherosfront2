import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Login = ({ show, handleClose, abrirRegistro, setUsuarioLogueado }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const adminEmail = import.meta.env.VITE_API_EMAIL;
    const adminPassword = import.meta.env.VITE_API_PASSWORD;

    if (data.email === adminEmail && data.password === adminPassword) {
      setUsuarioLogueado({ isAdmin: true });
      reset();
      handleClose();
      Swal.fire({
        icon: "success",
        title: "Bienvenido administrador",
        text: "Has iniciado sesión correctamente",
      });
    } else {
      setUsuarioLogueado({ isAdmin: false });
      Swal.fire({
        icon: "error",
        title: "Credenciales incorrectas",
        text: "El email o la contraseña son inválidos",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered contentClassName="border border-white border-3">
      <Modal.Header closeButton>
        <Modal.Title>Iniciar sesión</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@email.com"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,4}$/,
                  message: "El formato del email no es válido",
                },
              })}
            />
            {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="********"
              {...register("password", {
                required: "La contraseña es obligatoria",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}[\]|:;"'<>,.?/]).{8,}$/,
                  message: "Mínimo 8 caracteres, una mayúscula, un número y un símbolo especial",
                },
              })}
            />
            {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
          </Form.Group>

          <Button variant="primary" type="submit" className="w-50 mx-auto d-block">Iniciar sesión</Button>

          <div className="text-center mt-3">
            <span>¿Aún no te registraste? </span>
            <button type="button" className="btn btn-link p-0 text-primary" onClick={() => { handleClose(); abrirRegistro(); }}>
              Registrate
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
