/* import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { getProducts, createProduct, updateProduct, deleteProduct } from "./services/product.service";
import ProductModal from "./components/ProductModal";
const IMAGE_URL = "http://localhost:4000";
const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  const handleOpenEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSave = async (formData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct._id, formData);
        Swal.fire("¡Actualizado!", "Producto editado correctamente.", "success");
      } else {
        await createProduct(formData);
        Swal.fire("¡Creado!", "Producto agregado al catálogo.", "success");
      }
      loadProducts();
      handleClose();
    } catch (error) {
      Swal.fire("Error", "Ocurrió un error al guardar.", "error");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    });

    if (result.isConfirmed) {
      try {
        await deleteProduct(id);
        loadProducts();
        Swal.fire("Eliminado!", "Producto borrado.", "success");
      } catch (error) {
        Swal.fire("Error", "No se pudo eliminar.", "error");
      }
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Inventario de Productos</h4>
        <Button variant="success" onClick={handleOpenCreate}>
          <i className="bi bi-plus-lg me-2"></i> Nuevo Producto
        </Button>
      </div>

      <div className="table-responsive">
        <Table hover bordered className="align-middle bg-white shadow-sm rounded">
          <thead className="table-light">
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod._id}>
                <td style={{ width: "80px" }}>
                  <img  src={prod.imageUrl ? `${IMAGE_URL}${prod.imageUrl}` : "https://via.placeholder.com/50"}  alt="img" className="rounded" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                </td>
                <td>
                  <strong>{prod.name}</strong>
                  <div className="text-muted small">{prod.description?.substring(0, 40)}...</div>
                </td>
                <td>${prod.price}</td>
                <td>
                  <span className={`badge ${prod.stock > 10 ? "bg-success" : "bg-danger"}`}>{prod.stock}</span>
                </td>
                <td className="text-center">
                  <Button variant="outline-warning" size="sm" className="me-2" onClick={() => handleOpenEdit(prod)}>
                    <i className="bi bi-pencil-fill"></i>
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(prod._id)}>
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <ProductModal show={showModal} handleClose={handleClose} productToEdit={editingProduct} handleSave={handleSave} />
    </div>
  );
};

export default ProductTable; */