import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const CatalogoNinios = ({ productosCreados }) => {
  const productosOriginales = [
    {
      id: 1,
      nombre: "Camiseta Messi Barcelona",
      imagen: "../img/productos niños/messi.jpg",
      precio: "$42.000",
      descripcion: "Camiseta retro #10 edición especial",
      talles: "4, 6, 8, 10, 12 años",
    },
    {
      id: 2,
      nombre: "Conjunto Nike Kids blanco y negro",
      imagen: "../img/productos niños/conjunto.jpg",
      precio: "$98.000",
      descripcion: "Conjunto buzo + pantalon para entrenar",
      talles: "6, 8, 10, 12 años",
    },
    {
      id: 3,
      nombre: "Botines Adidas Predator Junior",
      imagen: "../img/productos niños/botines.jpg",
      precio: "$95.000",
      descripcion: "Botines con tapones de goma",
      talles: "28, 30, 32, 34, 36",
    },
  ];

  //  combina productos originales con los creados de categoría "niños"
  const productos = [
    ...productosOriginales,
    ...productosCreados.filter((p) => p.categoria === "niños"),
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Indumentaria para los Peques</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div key={producto.id} className="col">
            <div className="card h-100 shadow-sm text-center">
              <div className="ratio ratio-1x1">
                <img
                  src={producto.imagen}
                  className="card-img-top img-fluid img-card1-ellas"
                  alt={producto.nombre}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-ambar fw-bold text-center">
                  {producto.nombre}
                </h5>
                <p className="card-text text-muted text-center">
                  {producto.descripcion}
                </p>
                <hr />
                <p className="mb-2">
                  <strong>Precio:</strong>{" "}
                  <span className="text-ambar fs-5">{producto.precio}</span>
                </p>
                <p className="mb-3">
                  <strong>Talles disponibles:</strong> {producto.talles}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center my-4">
        <Button as={Link} to="/" className="boton-volver-inicio">
          <i className="bi bi-arrow-bar-left"> Volver al Inicio </i>
        </Button>
      </div>
    </div>
  );
};

export default CatalogoNinios;
