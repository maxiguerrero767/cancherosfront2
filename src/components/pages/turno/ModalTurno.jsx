import { Modal } from "react-bootstrap";
import FormularioTurno from "../turno/FormularioTurno";
import "../../../styles/modalTurno.css";


const ModalTurno = ({ show, handleClose, turnoEditar, guardarTurno }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="modal-turno-borde"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {turnoEditar ? "Editar Turno" : "Nuevo Turno"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormularioTurno
          turnoEditar={turnoEditar}
          guardarTurno={guardarTurno}
          cerrarModal={handleClose}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalTurno;
