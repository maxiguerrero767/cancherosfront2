import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { registroAPI } from "../../helpers/queries";

const Registro = ({ show, handleClose, setUsuarioLogueado }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = async (data) => {
    const usuarioNuevo = {
      nombre: data.nombre,
      email: data.email,
      password: data.password
    };

    const respuesta = await registroAPI(usuarioNuevo);

    if (respuesta && respuesta.status === 201) {
      const datosUsuario = await respuesta.json();

      sessionStorage.setItem("usuarioKey", JSON.stringify({
        nombre: datosUsuario.nombre,
        token: datosUsuario.token,
        rol: datosUsuario.rol,
        isAdmin: datosUsuario.rol === 'admin'
      }));

      setUsuarioLogueado({
        nombre: datosUsuario.nombre,
        token: datosUsuario.token,
        rol: datosUsuario.rol,
        isAdmin: datosUsuario.rol === 'admin'
      });

      Swal.fire({
        icon: "success",
        title: `¡Bienvenido ${datosUsuario.nombre}!`,
        text: "Registro exitoso. Ya estás logueado.",
        timer: 2000,
        showConfirmButton: false
      });

      reset();
      handleClose();
      navigate("/"); 
    } else {
      const errorData = await respuesta.json();
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error",
        text: errorData.mensaje || "No se pudo crear la cuenta",
      });
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg" contentClassName="border border-white border-3">
      <Modal.Header closeButton>
        <Modal.Title>Registro de usuario</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Nombre completo *</Form.Label>
                <Form.Control type="text" placeholder="Juan Pérez" {...register("nombre", { required: "Obligatorio", minLength: { value: 3, message: "Mínimo 3 letras" } })} />
                {errors.nombre && <Form.Text className="text-danger">{errors.nombre.message}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control type="email" placeholder="correo@email.com" {...register("email", { required: "Obligatorio", pattern: { value: /^\S+@\S+\.\S+$/, message: "Email inválido" } })} />
                {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña *</Form.Label>
                <Form.Control type="password" placeholder="********" {...register("password", { required: "Obligatoria", minLength: { value: 6, message: "Mínimo 6 caracteres" } })} />
                {errors.password && <Form.Text className="text-danger">{errors.password.message}</Form.Text>}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-2">Registrarme e Ingresar</Button>
            </Form>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src="https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg" alt="futbol" className="img-fluid rounded h-100 w-100 object-fit-cover" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Registro;