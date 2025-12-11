import React from "react";
import { Table, Button } from "react-bootstrap";

const TablaTurno = ({ turnos, onEditar, onBorrar, onVer }) => {


  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Administrador de Turnos</h2>
      <Table striped bordered hover responsive className="align-middle text-center shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Cancha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                No hay turnos registrados
              </td>
            </tr>
          ) : (
            turnos.map((t, index) => (
              <tr key={index}>
                <td>{t.nombre}</td>
                <td>{t.fecha}</td>
                <td>{t.hora}:00</td>
                <td>{t.cancha}</td>
                <td>{t.estado}</td>
                <td>
                  <Button variant="info" size="sm" className="me-2" onClick={() => onVer(t, index)}>
                    Ver
                  </Button>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => onEditar(t, index)}>
                    Editar
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => onBorrar(index)}>
                    Borrar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaTurno;
