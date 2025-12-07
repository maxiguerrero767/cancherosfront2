
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../styles/catalogos.css"; 


const CatalogoHombre = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true); 
  
  const API_URL = import.meta.env.VITE_API_URL;
  const SERVER_URL = "http://localhost:4000";

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true); 
        const res = await axios.get(`${API_URL}/products`);
        console.log("Productos sin filtrar:", res.data);
        const productosFiltrados = res.data.filter(p => p.category === 'Accesorios');
        console.log("Productos filtrados hombres:", productosFiltrados);
        setProductos(productosFiltrados);
      } catch (error) {
        console.error("Error cargando el catálogo:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center" style={{ paddingTop: '100px' }}>
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Buscando en el vestuario...</p>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div className="container my-5 text-center" style={{ paddingTop: '100px' }}>
        <h1 className="mb-4">Accesorios</h1>
        <div className="alert alert-warning p-5">
          <h3>¡Ups! No hay productos aquí todavía.</h3>
          <p>Ve al panel de administrador y asegúrate de crear productos con la categoría <strong>"Accesorios"</strong>.</p>
          <Link to="/" className="btn btn-outline-dark mt-3">Volver al Inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5" style={{ paddingTop: '100px' }}>
      <h1 className="text-center mb-5">Accesorios</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div key={producto._id} className="col">
            <div className="card h-100 shadow-sm text-center">
              <div className="ratio ratio-1x1">
                <img
                  src={producto.imageUrl ? `${SERVER_URL}${producto.imageUrl}` : "https://via.placeholder.com/300"}
                  className="card-img-top img-fluid img-card1-ellas"
                  alt={producto.name}
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-center">
                  {producto.name}
                </h5>
                <p className="card-text text-muted text-center flex-grow-1">
                  {producto.description}
                </p>
                <hr />
                <p className="mb-2">
                  <strong>Precio:</strong>{" "}
                  <span className="text-success fs-5">${producto.price}</span>
                </p>
                
                <p className="mb-3">
                   <strong>Talles disponibles:</strong> {producto.sizes || "Único"}
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

export default CatalogoHombre;







