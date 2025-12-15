import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/catalogos.css";

const CatalogoElla = ({ productosCreados }) => {
  const productosOriginales = [
    {
      id: 1,
      nombre: "Conjunto Deportivo Nike",
      imagen: "../img/productos ellas/conjunto nike chica.avif",
      precio: "$85.000",
      descripcion: "Conjunto top + calza de alto rendimiento",
      talles: "S, M, L, XL",
    },
    {
      id: 2,
      nombre: "Camiseta Adidas Training",
      imagen: "../img/productos ellas/remera.avif",
      precio: "$32.000",
      descripcion: "Camiseta técnica transpirable",
      talles: "XS, S, M, L",
    },
    {
      id: 3,
      nombre: "Buzo Deportivo Puma",
      imagen: "../img/productos ellas/buzo.avif",
      precio: "$43.000",
      descripcion: "Buzo con tecnología Dry-Cell",
      talles: "S, M, L, XL",
    },
  ];
  // Filtra productos creados que sean de la categoría "ellas"
  const productos = [
    ...productosOriginales,
    ...productosCreados.filter((p) => p.categoria === "ellas"),
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Indumentaria para Ellas</h1>

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
                <h5 className="card-title texto-ambar fw-bold text-center">
                  {producto.nombre}
                </h5>
                <p className="card-text text-muted text-center">
                  {producto.descripcion}
                </p>
                <hr />
                <p className="mb-2">
                  <strong>Precio:</strong>{" "}
                  <span className="texto-ambar fs-5">{producto.precio}</span>
                </p>
                <p className="mb-3">
                  <strong>Talles disponibles:</strong> {producto.talles}
                </p>
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn boton-volver-inicio">
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default CatalogoElla;
