import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const CatalogoHombre = ({ productosCreados }) => {
  const productosOriginales = [
    {
      id: 1,
      nombre: "Camiseta Argentina 2024",
      imagen: "../img/productos hombres/camiseta.jpg",
      precio: "$85.000",
      descripcion: "Camiseta titular selección argentina",
      talles: "S, M, L, XL, XXL"
    },
    {
      id: 2,
      nombre: "Short Nike Dri-FIT blanco",
      imagen: "../img/productos hombres/short nike.jpg",
      precio: "$35.000",
      descripcion: "Short deportivo con tecnología anti-sudor",
      talles: "S, M, L, XL"
    },
    {
      id: 3,
      nombre: "Conjunto Adidas Performance",
      imagen: "../img/productos hombres/conjunto.jpg",
      precio: "$65.000",
      descripcion: "Conjunto completo pantalon+buzo",
      talles: "S, M, L, XL"
    }
  ];

  const productos = [
    ...productosOriginales,
    ...productosCreados.filter((p) => p.categoria === "hombre")
  ]; 

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Indumentaria Hombres</h1>

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
                <h5 className="card-title text-ambar fw-bold text-center">{producto.nombre}</h5>
                <p className="card-text text-muted text-center">{producto.descripcion}</p>
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

export default CatalogoHombre;
