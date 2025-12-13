import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../../styles/ModalTurno.css";

const ModalTurno = ({ show, handleClose, turnoEditar, indiceEditar }) => {
  const hoy = new Date().toISOString().split("T")[0];

  const [turno, setTurno] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    cancha: "",
    estado: "Reservado",
  });

  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (show && turnoEditar) {
      // Si estamos editando, cargamos los datos del turno
      setTurno(turnoEditar);
    } else if (!show) {
      // Al cerrar el modal, limpiamos
      setTurno({
        nombre: "",
        telefono: "",
        fecha: "",
        hora: "",
        cancha: "",
        estado: "Reservado",
      });
      setErrores({});
    }
  }, [show, turnoEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTurno({ ...turno, [name]: value });
    setErrores({ ...errores, [name]: "" });
  };

  const validar = () => {
    const nuevosErrores = {};

    if (!turno.nombre.trim())
      nuevosErrores.nombre = "Este campo es obligatorio";
    if (!turno.telefono.trim()) {
      nuevosErrores.telefono = "Este campo es obligatorio";
    } else if (!/^\d+$/.test(turno.telefono.trim())) {
      nuevosErrores.telefono = "El teléfono debe contener solo números";
    }
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

    // Obtener turnos del LocalStorage
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];

    if (indiceEditar !== null && indiceEditar !== undefined) {
      // Verificar si ya existe otro turno con la misma fecha, hora y cancha (excluyendo el actual)
      const turnoExistente = turnosGuardados.find(
        (t, index) => index !== indiceEditar && t.fecha === turno.fecha && t.hora === turno.hora && t.cancha === turno.cancha
      );

      if (turnoExistente) {
        Swal.fire({
          title: "Turno ocupado",
          text: "Ya existe un turno reservado para esta fecha, hora y cancha",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return;
      }

      // Actualizamos el turno existente
      turnosGuardados[indiceEditar] = turno;
      localStorage.setItem("turnos", JSON.stringify(turnosGuardados));

      Swal.fire({
        title: "Turno modificado con éxito",
        html: `
          <div class="swal-turno">
            <p><strong>Fecha:</strong> ${turno.fecha}</p>
            <p><strong>Hora:</strong> ${turno.hora} hs</p>
            <p><strong>Cancha:</strong> ${turno.cancha}</p>
            <p><strong>Nombre reserva:</strong> ${turno.nombre}</p>
            <p><strong>Teléfono:</strong> ${turno.telefono}</p>
            <p><strong>Estado:</strong> ${turno.estado}</p>
          </div>
        `,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#198754",
      });
    } else {
      // Verificar si ya existe un turno con la misma fecha, hora y cancha
      const turnoExistente = turnosGuardados.find(
        (t) => t.fecha === turno.fecha && t.hora === turno.hora && t.cancha === turno.cancha
      );

      if (turnoExistente) {
        Swal.fire({
          title: "Turno ocupado",
          text: "Ya existe un turno reservado para esta fecha, hora y cancha",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return;
      }

      // Creamos un nuevo turno
      const nuevosTurnos = [...turnosGuardados, turno];
      localStorage.setItem("turnos", JSON.stringify(nuevosTurnos));

      Swal.fire({
        title: "Turno reservado con éxito",
        html: `
          <div class="swal-turno">
            <p><strong>Fecha:</strong> ${turno.fecha}</p>
            <p><strong>Hora:</strong> ${turno.hora} hs</p>
            <p><strong>Cancha:</strong> ${turno.cancha}</p>
            <p><strong>Nombre reserva:</strong> ${turno.nombre}</p>
            <p><strong>Teléfono:</strong> ${turno.telefono}</p>
            <p><strong>Estado:</strong> ${turno.estado}</p>
          </div>
        `,
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#198754",
      });
    }

    setTurno({
      nombre: "",
      telefono: "",
      fecha: "",
      hora: "",
      cancha: "",
      estado: "Reservado",
    });
    setErrores({});
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{turnoEditar ? "Modificar Turno" : "Reservar Turno"}</Modal.Title>
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

          {/* Número de teléfono */}
          <Form.Group className="mb-3">
            <Form.Label>Número de teléfono</Form.Label>
            <Form.Control
              type="tel"
              name="telefono"
              placeholder="Ingresá tu número de teléfono"
              value={turno.telefono}
              onChange={handleChange}
              className="sin-borde"
            />
            {errores.telefono && (
              <div className="mensaje-error">{errores.telefono}</div>
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
                <option value="19">19:00</option>
                <option value="20">20:00</option>
                <option value="21">21:00</option>
                <option value="22">22:00</option>
                <option value="23">23:00</option>
                <option value="24">24:00</option>
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
            </Form.Select>
            {errores.cancha && (
              <div className="mensaje-error">{errores.cancha}</div>
            )}
          </Form.Group>

          {/* Estado */}
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              name="estado"
              value={turno.estado}
              onChange={handleChange}
              className="sin-borde"
              disabled={!turnoEditar}
            >
              <option value="Reservado">Reservado</option>
              {turnoEditar && (
                <>
                  <option value="Confirmado">Confirmado</option>
                  <option value="Anulado">Anulado</option>
                </>
              )}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={guardarTurno}>
          {turnoEditar ? "Guardar cambios" : "Guardar turno"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTurno;
