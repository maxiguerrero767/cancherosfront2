import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../../styles/ModalTurno.css"; 

const ModalTurno = ({ show, handleClose }) => {
  const hoy = new Date().toISOString().split("T")[0];

  const [turno, setTurno] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    cancha: "",
  });

  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (!show) {
      setTurno({ nombre: "", fecha: "", hora: "", cancha: "" });
      setErrores({});
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTurno({ ...turno, [name]: value });
    setErrores({ ...errores, [name]: "" });
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!turno.nombre.trim()) nuevosErrores.nombre = "Este campo es obligatorio";
    if (!turno.fecha) {
      nuevosErrores.fecha = "Debes seleccionar una fecha";
    } else if (new Date(turno.fecha) < new Date(hoy)) {
      nuevosErrores.fecha = "No podés elegir un día anterior a hoy";
    }
    if (!turno.hora) nuevosErrores.hora = "Seleccioná una hora disponible";
    if (!turno.cancha) nuevosErrores.cancha = "Seleccioná una cancha";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const guardarTurno = () => {
    if (!validar()) return;

    // Guardar turno en LocalStorage
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
    const nuevosTurnos = [...turnosGuardados, turno];
    localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));

    // Mostrar SweetAlert con los detalles
    Swal.fire({
      title: "✅ Turno reservado con éxito",
      html: `
        <div class="swal-turno">
          <p><strong>📅 Fecha:</strong> ${turno.fecha}</p>
          <p><strong>🕓 Hora:</strong> ${turno.hora} hs</p>
          <p><strong>⚽ Cancha:</strong> ${turno.cancha}</p>
          <p><strong>👤 Nombre reserva:</strong> ${turno.nombre}</p>
        </div>
      `,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#198754",
    });

    setTurno({ nombre: "", fecha: "", hora: "", cancha: "" });
    setErrores({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Reservar Turno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Nombre */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Completá tu nombre"
              value={turno.nombre}
              onChange={handleChange}
              className="sin-borde"
            />
            {errores.nombre && (
              <div className="mensaje-error">{errores.nombre}</div>
            )}
          </Form.Group>

          {/* Fecha */}
          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name="fecha"
              value={turno.fecha}
              onChange={handleChange}
              min={hoy}
              className="sin-borde"
            />
            {errores.fecha && (
              <div className="mensaje-error">{errores.fecha}</div>
            )}
          </Form.Group>

          {/* Hora */}
          <Form.Group className="mb-3">
            <Form.Label>Hora</Form.Label>
            <Form.Select
              name="hora"
              value={turno.hora}
              onChange={handleChange}
              className="sin-borde"
            >
              <option value="">Seleccioná un horario</option>
              <optgroup label="Mañana">
                <option value="10">10:00</option>
                <option value="11">11:00</option>
                <option value="12">12:00</option>
                <option value="13">13:00</option>
              </optgroup>
              <optgroup label="Tarde">
                <option value="15">15:00</option>
                <option value="16">16:00</option>
                <option value="17">17:00</option>
                <option value="18">18:00</option>
              </optgroup>
            </Form.Select>
            {errores.hora && (
              <div className="mensaje-error">{errores.hora}</div>
            )}
          </Form.Group>

          {/* Cancha */}
          <Form.Group className="mb-3">
            <Form.Label>Cancha</Form.Label>
            <Form.Select
              name="cancha"
              value={turno.cancha}
              onChange={handleChange}
              className="sin-borde"
            >
              <option value="">Seleccioná una cancha</option>
              <option value="Cancha 1">Cancha 1</option>
              <option value="Cancha 2">Cancha 2</option>
              <option value="Cancha 3">Cancha 3</option>
            </Form.Select>
            {errores.cancha && (
              <div className="mensaje-error">{errores.cancha}</div>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={guardarTurno}>
          Guardar turno
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTurno;
