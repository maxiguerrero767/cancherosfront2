import React, { useState,useEffect  } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { Table, Button, Modal, Form } from "react-bootstrap";
import ProductTable from "../admin/products/ProductTable"; 
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

  const [showVerModal, setShowVerModal] = useState(false);
  const [productoVer, setProductoVer] = useState(null);

  const verProducto = (producto) => {
    setProductoVer(producto);
    setShowVerModal(true);
  };

  const [editandoId, setEditandoId] = useState(null);

  const editarProducto = (producto) => {
    setNuevoProducto(producto); 
    setEditandoId(producto.id); 
    setShowModal(true); 
  };

  const guardarProducto = () => {
    const productoConId = { ...nuevoProducto };

    if (editandoId) {
      const productosActualizados = productosCreados.map((p) =>
        p.id === editandoId ? productoConId : p
      );
      setProductosCreados(productosActualizados);
      setEditandoId(null);

      localStorage.setItem(
        "productosCreados",
        JSON.stringify(productosActualizados)
      );

      Swal.fire({
        icon: "success",
        title: "Producto editado",
        text: `${nuevoProducto.nombre} ha sido editado exitosamente`,
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      productoConId.id = Date.now();
      const productosActualizados = [...productosCreados, productoConId];
      setProductosCreados(productosActualizados);

      localStorage.setItem(
        "productosCreados",
        JSON.stringify(productosActualizados)
      );

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

        localStorage.setItem(
          "productosCreados",
          JSON.stringify(productosActualizados)
        );
      }
    });
  };
 const [key, setKey] = useState('backend'); 
   return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Panel Administrativo</h1>

      <Tabs
        id="admin-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-4"
        fill
        variant="pills"
      >
        <Tab eventKey="backend" title="☁️ Gestión Base de Datos (Cloudinary)">
           <div className="p-3 border rounded bg-light">
              <ProductTable />
           </div>
        </Tab>

        <Tab eventKey="local" title="💾 Gestión Local (Equipo)">
            <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="text-center flex-grow-1">Productos Locales</h4>
                    <Button variant="success" onClick={abrirCrearProducto}>
                    + Crear Local
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
            </div>
        </Tab>
      </Tabs>

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
              <Form.Control type="text" value={nuevoProducto.nombre} onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="text" value={nuevoProducto.precio} onChange={(e) => {
                  let valor = e.target.value;
                  if (!valor.includes("$")) { valor = "$" + valor.replace(/\$/g, ""); }
                  setNuevoProducto({ ...nuevoProducto, precio: valor });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" value={nuevoProducto.descripcion} onChange={(e) => setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value, })} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Talle</Form.Label>
              <Form.Select value={nuevoProducto.talles} onChange={(e) => setNuevoProducto({ ...nuevoProducto, talles: e.target.value }) }>
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
              <Form.Control type="text" value={nuevoProducto.imagen} onChange={(e) => setNuevoProducto({ ...nuevoProducto, imagen: e.target.value }) } />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Categoría</Form.Label>
              <Form.Select value={nuevoProducto.categoria} onChange={(e) => setNuevoProducto({ ...nuevoProducto, categoria: e.target.value, }) } >
                <option value="ellas">Ellas</option>
                <option value="hombre">Hombre</option>
                <option value="niños">Niños</option>
                <option value="accesorios">Accesorios</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={guardarProducto}>Guardar</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showVerModal} onHide={() => setShowVerModal(false)} centered dialogClassName="modal-ver-producto" >
        <Modal.Header closeButton><Modal.Title>Ver Producto</Modal.Title></Modal.Header>
        <Modal.Body>
          {productoVer && (
            <div className="card h-100 shadow-sm text-center">
              <div className="ratio ratio-1x1">
                <img src={productoVer.imagen} className="card-img-top img-fluid" alt={productoVer.nombre} />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">{productoVer.nombre}</h5>
                <p className="card-text text-muted text-center">{productoVer.descripcion}</p>
                <hr />
                <p className="mb-2"><strong>Precio:</strong> <span className="text-success fs-5">{productoVer.precio}</span></p>
                <p className="mb-3"><strong>Talles disponibles:</strong> {productoVer.talles}</p>
                <p className="mb-2"><strong>Categoría:</strong> {productoVer.categoria}</p>
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