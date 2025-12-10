import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/catalogos.css";

const CatalogoAccesorio = ({ productosCreados }) => {
  const productosOriginales = [
    {
      id: 1,
      nombre: "Guantes Nike Pro",
      imagen: "../img/accesorios/guantes.jpg",
      precio: "$25.000",
      descripcion: "Guantes antideslizantes de alto rendimiento.",
      talles: "Único",
    },
    {
      id: 2,
      nombre: "Botella Adidas Sport",
      imagen: "../img/accesorios/botella.jpg",
      precio: "$62.500",
      descripcion: "Botella térmica (750cm3) de acero inoxidable.",
      talles: "750ml",
    },
    {
      id: 3,
      nombre: "Canillera Puma",
      imagen: "../img/accesorios/canilla.jpg",
      precio: "$20.000",
      descripcion: "Protección ligera y resistente para entrenamiento.",
      talles: "S, M, L",
    },
  ];

  //  combina productos originales con los creados de categoría "accesorios"
  const productos = [
    ...productosOriginales,
    ...productosCreados.filter((p) => p.categoria === "accesorios"),
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Accesorios Deportivos</h1>

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
                <h5 className="card-title fw-bold text-center">
                  {producto.nombre}
                </h5>
                <p className="card-text text-muted text-center">
                  {producto.descripcion}
                </p>
                <hr />
                <p className="mb-2">
                  <strong>Precio:</strong>{" "}
                  <span className="text-success fs-5">{producto.precio}</span>
                </p>
                <p className="mb-3">
                  <strong>Talles disponibles:</strong> {producto.talles}
                </p>
                <button className="botonComprar rounded">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-outline-secondary botonComprar rounded">
          ← Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default CatalogoAccesorio;
