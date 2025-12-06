import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
const SERVER_URL = import.meta.env.VITE_API_URL 
  ? import.meta.env.VITE_API_URL.replace('/api', '') 
  : "http://localhost:4000";
const ProductModal = ({ show, handleClose, productToEdit, handleSave }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (productToEdit) {
      setValue("name", productToEdit.name);
      setValue("description", productToEdit.description);
      setValue("price", productToEdit.price);
      setValue("stock", productToEdit.stock);
       setValue("category", productToEdit.category || "General");
      setValue("sizes", productToEdit.sizes || "Único");
    } else {
      reset({ name: "", description: "", price: "", stock: "", imageUrl: "", category: "General" });
    }
  }, [productToEdit, show, setValue, reset]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("category", data.category);
    formData.append("sizes", data.sizes);    
    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    handleSave(formData);
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>{productToEdit ? "Editar Producto" : "Nuevo Producto"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" {...register("name", { required: true })} />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={2} {...register("description")} />
          </Form.Group>

                    <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <Form.Select {...register("category", { required: true })}>
                  <option value="General">Seleccionar...</option>
                  <option value="Hombre">Hombre</option>
                  <option value="Mujer">Mujer</option>
                  <option value="Ninios">Niños</option>
                  <option value="Accesorios">Accesorios</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label>Talles (Ej: S, M, L)</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="S, M, L, XL" 
                  {...register("sizes")} 
                />
              </Form.Group>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" {...register("price", { required: true })} />
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" {...register("stock", { required: true })} />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3">
            <Form.Label>Imagen del Producto</Form.Label>
            
            {productToEdit && productToEdit.imageUrl && (
               <div 
                  className="mb-3 text-center p-2 border rounded" 
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "#444" }}
                >
                <p className="small mb-1" style={{ color: "white", fontWeight: "bold" }}>Imagen Actual:</p>
                <img 
                  src={`${SERVER_URL}${productToEdit.imageUrl}`} 
                  alt="Previsualización" 
                  style={{ maxHeight: "150px", objectFit: "contain", borderRadius: "5px" }}
                />
              </div>
            )}

            <Form.Control 
              type="file" 
              accept="image/*" 
              {...register("image")} 
            />
            <Form.Text className="text-muted">
              {productToEdit ? "Sube una imagen solo si quieres cambiar la actual." : "Sube una imagen para el producto."}
            </Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
            <Button variant="primary" type="submit">{productToEdit ? "Guardar Cambios" : "Crear Producto"}</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


export default ProductModal;