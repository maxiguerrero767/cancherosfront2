import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Table, Button, Modal, Form } from "react-bootstrap";
import TablaTurno from "../pages/turno/TablaTurno";
import ModalTurno from "../pages/turno/ModalTurno";
import ModalVerTurno from "../pages/turno/ModalVerTurno";

const Administrador = ({ productosCreados, setProductosCreados }) => {
  /* Para Turnos */

  const [turnos, setTurnos] = useState([]);
  const [showModalTurno, setShowModalTurno] = useState(false);
  const [turnoEditar, setTurnoEditar] = useState(null);
  const [indiceEditar, setIndiceEditar] = useState(null);
  const [showVerModalTurno, setShowVerModalTurno] = useState(false);
  const [turnoVer, setTurnoVer] = useState(null);

  useEffect(() => {
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnos(turnosGuardados);
  }, []);

  const verTurno = (turno) => {
    setTurnoVer(turno);
    setShowVerModalTurno(true);
  };

  const editarTurno = (turno, indice) => {
    setTurnoEditar(turno);
    setIndiceEditar(indice);
    setShowModalTurno(true);
  };

  const borrarTurno = (indice) => {
    Swal.fire({
      title: "¿Seguro quieres borrar este turno?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
        turnosGuardados.splice(indice, 1);
        localStorage.setItem("turnos", JSON.stringify(turnosGuardados));
        setTurnos(turnosGuardados);

        Swal.fire({
          icon: "success",
          title: "Turno borrado",
          text: "El turno ha sido eliminado correctamente",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const cerrarModalTurno = () => {
    setShowModalTurno(false);
    setTurnoEditar(null);
    setIndiceEditar(null);
    // Recargar turnos desde localStorage
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnos(turnosGuardados);
  };

  const [showModal, setShowModal] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    talles: "",
    imagen: "",
    categoria: "ellas",
  });

  const abrirCrearProducto = () => {
    setNuevoProducto({
      nombre: "",
      precio: "",
      descripcion: "",
      talles: "",
      imagen: "",
      categoria: "ellas",
    });
    setShowModal(true);
    setEditandoId(null);
  };

  /* PRODUCTOS */

  /* Sin imagen */
  const imagenPorDefecto =
  "https://images.pexels.com/photos/28216688/pexels-photo-28216688.png?_gl=1*mmuo1c*_ga*OTI5MTUwOTU1LjE3NDY5MTY0MDM.*_ga_8JE65Q40S6*czE3NjU3NTY4MzMkbzMyJGcxJHQxNzY1NzU3NDg4JGo1OSRsMCRoMA..";


  /* ver producto */
  const [showVerModal, setShowVerModal] = useState(false);
  const [productoVer, setProductoVer] = useState(null);

  // Función para abrir el modal de ver producto
  const verProducto = (producto) => {
    setProductoVer(producto);
    setShowVerModal(true);
  };

  // Estado para saber si estamos editando
  const [editandoId, setEditandoId] = useState(null);

  // Función para abrir el modal con los datos del producto a editar
  const editarProducto = (producto) => {
    setNuevoProducto(producto); // precargamos los datos
    setEditandoId(producto.id); // guardamos el id que vamos a editar
    setShowModal(true); // abrimos modal
  };

  const guardarProducto = () => {
    const productoConId = { ...nuevoProducto, imagen: nuevoProducto.imagen && nuevoProducto.imagen.trim() !== ""? nuevoProducto.imagen : imagenPorDefecto };

    if (editandoId) {
      // Editando: reemplazamos el producto existente
      const productosActualizados = productosCreados.map((p) =>
        p.id === editandoId ? productoConId : p
      );
      setProductosCreados(productosActualizados);
      setEditandoId(null);

      // Guardamos en localStorage
      localStorage.setItem(
        "productosCreados",
        JSON.stringify(productosActualizados)
      );

      // SweetAlert para edición
      Swal.fire({
        icon: "success",
        title: "Producto editado",
        text: `${nuevoProducto.nombre} ha sido editado exitosamente`,
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      // Creando: agregamos nuevo producto
      productoConId.id = Date.now();
      const productosActualizados = [...productosCreados, productoConId];
      setProductosCreados(productosActualizados);

      // Guardamos en localStorage
      localStorage.setItem(
        "productosCreados",
        JSON.stringify(productosActualizados)
      );

      // SweetAlert para creación
      Swal.fire({
        icon: "success",
        title: "Producto creado",
        text: `${nuevoProducto.nombre} ha sido agregado con éxito`,
        timer: 2000,
        showConfirmButton: false,
      });
    }

    setShowModal(false);
  };

  const borrarProducto = (id) => {
    Swal.fire({
      title: "¿Seguro quieres borrar?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const productosActualizados = productosCreados.filter(
          (p) => p.id !== id
        );
        setProductosCreados(productosActualizados);

        Swal.fire({
          icon: "success",
          title: "Producto borrado",
          text: "El producto ha sido eliminado correctamente",
          timer: 2000,
          showConfirmButton: false,
        });

        // Actualizamos localStorage
        localStorage.setItem(
          "productosCreados",
          JSON.stringify(productosActualizados)
        );
      }
    });
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-center flex-grow-1">Administrador de Productos</h2>
        <Button className="btn-verde" onClick={abrirCrearProducto}>
          + Crear
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Talle</th>
            <th>Imagen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosCreados.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center">
                No hay productos nuevos
              </td>
            </tr>
          ) : (
            productosCreados.map((producto) => (
              <tr key={producto.id} className="text-center">
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.talles}</td>
                <td>
                  {producto.imagen ? (
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      width={60}
                      height={60}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{producto.categoria}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    className="me-1"
                    onClick={() => verProducto(producto)}
                  >
                    Ver
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-1"
                    onClick={() => editarProducto(producto)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => borrarProducto(producto.id)}
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>



      {/* TURNOS */}
      <div className="container py-4">
        <TablaTurno
          turnos={turnos}
          onVer={verTurno}
          onEditar={editarTurno}
          onBorrar={borrarTurno}
        />
      </div>

      {/* Modal Editar Turno */}
      <ModalTurno
        show={showModalTurno}
        handleClose={cerrarModalTurno}
        turnoEditar={turnoEditar}
        indiceEditar={indiceEditar}
      />

      {/* Modal Ver Turno */}
      <ModalVerTurno
        show={showVerModalTurno}
        handleClose={() => setShowVerModalTurno(false)}
        turno={turnoVer}
      />

      {/* Modal Crear Producto */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editandoId ? "Editar Producto" : "Crear Producto"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nuevoProducto.nombre}
                onChange={(e) =>
                  setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="text"
                value={nuevoProducto.precio}
                onChange={(e) => {
                  let valor = e.target.value;

                  // Si el usuario borra todo, dejamos $
                  if (!valor.includes("$")) {
                    valor = "$" + valor.replace(/\$/g, "");
                  }

                  setNuevoProducto({ ...nuevoProducto, precio: valor });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={nuevoProducto.descripcion}
                onChange={(e) =>
                  setNuevoProducto({
                    ...nuevoProducto,
                    descripcion: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Talle</Form.Label>
              <Form.Select
                value={nuevoProducto.talles}
                onChange={(e) =>
                  setNuevoProducto({ ...nuevoProducto, talles: e.target.value })
                }
              >
                <option value="--">--</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control
                type="text"
                value={nuevoProducto.imagen}
                onChange={(e) =>
                  setNuevoProducto({ ...nuevoProducto, imagen: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Categoría</Form.Label>
              <Form.Select
                value={nuevoProducto.categoria}
                onChange={(e) =>
                  setNuevoProducto({
                    ...nuevoProducto,
                    categoria: e.target.value,
                  })
                }
              >
                <option value="ellas">Ellas</option>
                <option value="hombre">Hombre</option>
                <option value="niños">Niños</option>
                <option value="accesorios">Accesorios</option>
              </Form.Select>
            </Form.Group>

            <Button
              variant="primary"
              className="mt-3"
              onClick={guardarProducto}
            >
              Guardar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal Ver Producto */}
      <Modal
        show={showVerModal}
        onHide={() => setShowVerModal(false)}
        centered
        dialogClassName="modal-ver-producto"
      >
        <Modal.Header closeButton>
          <Modal.Title>Ver Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productoVer && (
            <div className="card h-100 shadow-sm text-center">
              <div className="ratio ratio-1x1">
                <img
                  src={productoVer.imagen}
                  className="card-img-top img-fluid"
                  alt={productoVer.nombre}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">
                  {productoVer.nombre}
                </h5>
                <p className="card-text text-muted text-center">
                  {productoVer.descripcion}
                </p>
                <hr />
                <p className="mb-2">
                  <strong>Precio:</strong>{" "}
                  <span className="text-success fs-5">
                    {productoVer.precio}
                  </span>
                </p>
                <p className="mb-3">
                  <strong>Talles disponibles:</strong> {productoVer.talles}
                </p>
                <p className="mb-2">
                  <strong>Categoría:</strong> {productoVer.categoria}
                </p>
                <button className="botonComprar rounded">Comprar</button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Administrador;
