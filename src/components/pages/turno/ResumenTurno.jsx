import "../../../styles/ResumenTurno.css";

const ResumenTurno = ({ turno, onCancelar }) => {
  if (!turno) return null;

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card shadow p-2 col-12 col-md-6 card-resumen-turno fondo-azul-transparente">
        <h4 className="mb-3 text-center">Turno reservado</h4>

        <p className="mb-1">
          <strong>Fecha:</strong> {turno.fecha}
        </p>
        <p className="mb-1">
          <strong>Hora:</strong> {turno.hora}
        </p>
        <p className="mb-3">
          <strong>Nombre reserva:</strong> {turno.nombre}
        </p>

        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-light boton-cancelar-turno"
            onClick={onCancelar}
          >
            Cancelar turno
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumenTurno;
