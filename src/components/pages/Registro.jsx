import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Registro = ({ show, handleClose, setUsuarioLogueado, abrirLogin }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Resetea el formulario cada vez que se abre
  useEffect(() => {
    if (show) reset();
  }, [show, reset]);

  const onSubmit = (data) => {
    Swal.fire({
      title: `¡Bienvenido, ${data.nombre}!`,
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
    setUsuarioLogueado({ nombre: data.nombre, isAdmin: false });

    // PASAMOS true para indicar que el registro fue exitoso
    handleClose(true);
  };

  const irALogin = () => {
    handleClose();
    abrirLogin();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      contentClassName="border border-white border-3"
    >
      <Modal.Header closeButton>
        <Modal.Title>Registro de usuario</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          {/* Columna del formulario */}
          <div className="col-md-6">
            <Form onSubmit={handleSubmit(onSubmit)}>
              {/* Nombre */}
              <Form.Group className="mb-3">
                <Form.Label>Nombre completo *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre completo"
                  {...register("nombre", {
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 3,
                      message: "Debe tener al menos 3 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
                      message: "Solo se permiten letras y espacios",
                    },
                  })}
                />
                {errors.nombre && (
                  <Form.Text className="text-danger">
                    {errors.nombre.message}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="correo@email.com"
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,4}$/,
                      message: "Formato de email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <Form.Text className="text-danger">
                    {errors.email.message}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Teléfono */}
              <Form.Group className="mb-3">
                <Form.Label>Teléfono *</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="sin codigo de area"
                  {...register("telefono", {
                    required: "El teléfono es obligatorio",
                    pattern: {
                      value: /^[0-9]{8,15}$/,
                      message: "Sólo números, de 8 a 15 dígitos",
                    },
                  })}
                />
                {errors.telefono && (
                  <Form.Text className="text-danger">
                    {errors.telefono.message}
                  </Form.Text>
                )}
              </Form.Group>

              {/* Contraseña */}
              <Form.Group className="mb-3">
                <Form.Label>Contraseña *</Form.Label>
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

              {/* Botón */}
              <Button variant="primary" type="submit" className="w-100 mt-2">
                Registrarme
              </Button>

              {/* Leyenda para ir al login */}
              <div className="text-center mt-3">
                <span>¿Ya tenés cuenta? </span>
                <button
                  type="button"
                  className="btn btn-link p-0 text-primary"
                  onClick={irALogin}
                >
                  Iniciá sesión
                </button>
              </div>
            </Form>
          </div>

          {/* Columna de la imagen */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="../img/login.jpg"
              alt="pelota de fútbol"
              className="img-fluid rounded h-100 w-100 object-fit-cover"
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Registro;
