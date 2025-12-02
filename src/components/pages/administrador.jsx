import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Administrador = () => {
  return (
    <div className="container py-4">
      <div className="table-responsive">
        <table className="table table-bordered align-middle bg-light rounded-4 overflow-hidden">
          <thead className="table-secondary">
            <tr>
              <th>id</th>
              <th>Usuario</th>
              <th>Cancha</th>
              <th>Horario</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Fulanito Pérez</td>
              <td>Cancha n°3</td>
              <td>13:20 – 15:30</td>
              <td>27/03/26</td>
              <td>Pendiente</td>

              <td className="text-center">
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn btn-success action-btn">
                    <i className="bi bi-check-lg"></i>
                  </button>

                  <button className="btn btn-warning action-btn">
                    <i className="bi bi-pencil-fill"></i>
                  </button>

                  <button className="btn btn-danger action-btn">
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Administrador;
