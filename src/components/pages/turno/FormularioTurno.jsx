import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Form, Button, Row, Col, CardHeader } from "react-bootstrap";

const FormularioTurno = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const hoy = new Date().toISOString().split("T")[0];

  const horarios = Array.from(
    { length: 13 },
    (_, i) => `${(i + 8).toString().padStart(2, "0")}:00`
  );

  const onSubmit = (data) => {
    Swal.fire({
      icon: "success",
      title: "Turno solicitado",
      html: `
        <p><b>Usuario:</b> ${data.usuario}</p>
        <p><b>Cancha:</b> ${data.cancha}</p>
        <p><b>Fecha:</b> ${data.fecha}</p>
        <p><b>Horario:</b> ${data.horario}</p>
      `,
    });
    reset();
  };

  const onErrors = () => {
    Swal.fire({
      icon: "error",
      title: "Faltan datos",
      text: "Completá todos los campos obligatorios.",
    });
  };

  return (
    <div>
      <article className="container my-5">
        <CardHeader className="bg-ModalVer shadow-gm rounded-2 py-3">
          <h2 className="text-center text-light fw-semibold mb-1">
            Solicitar turno
          </h2>
          <p className="text-center text-light mb-0 fs-6">
            Ingrese los datos para reservar la cancha.
          </p>
        </CardHeader>

        <Form
          className="border rounded shadow-lg mb-5 p-3"
          onSubmit={handleSubmit(onSubmit, onErrors)}
        >
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Usuario*</Form.Label>
                <Form.Control
                  type="text"
                  {...register("usuario", { required: true })}
                  placeholder="Ej: Juan Perez"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Cancha*</Form.Label>
                <Form.Select {...register("cancha", { required: true })}>
                  <option value="">Seleccione una cancha</option>
                  <option value="Cancha 1">Cancha 1</option>
                  <option value="Cancha 2">Cancha 2</option>
                  <option value="Cancha 3">Cancha 3</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Fecha*</Form.Label>
                <Form.Control
                  type="date"
                  min={hoy}
                  {...register("fecha", { required: true })}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Horario*</Form.Label>
                <Form.Select {...register("horario", { required: true })}>
                  <option value="">Seleccione un horario</option>
                  {horarios.map((hora) => (
                    <option key={hora} value={hora}>
                      {hora}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex justify-content-center mt-3">
            <Button variant="success" type="submit" className="px-4">
              Solicitar turno
            </Button>
          </div>
        </Form>
      </article>
    </div>
  );
};

export default FormularioTurno;