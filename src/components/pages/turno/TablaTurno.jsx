import React from "react";
import { Table, Button } from "react-bootstrap";

const TablaTurno = ({ turnos, editarTurno, borrarTurno }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {turnos.length === 0 ? (
          <tr>
            <td colSpan="5" className="text-center">
              No hay turnos
            </td>
          </tr>
        ) : (
          turnos.map((t, index) => (
            <tr key={index}>
              <td>{t.nombre}</td>
              <td>{t.fecha}</td>
              <td>{t.hora}</td>
              <td>{t.estado}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => editarTurno(t, index)}
                >
                  Ver / Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => borrarTurno(index)}
                >
                  Borrar
                </Button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default TablaTurno;
