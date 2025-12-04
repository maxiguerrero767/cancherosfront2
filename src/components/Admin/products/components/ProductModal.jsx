import React, { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ProductModal = ({ show, handleClose, productToEdit, handleSave }) => {
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    if (productToEdit) {
      setValue("name", productToEdit.name);
      setValue("description", productToEdit.description);
      setValue("price", productToEdit.price);
      setValue("stock", productToEdit.stock);
      setValue("imageUrl", productToEdit.imageUrl);
    } else {
      reset({ name: "", description: "", price: "", stock: "", imageUrl: "" });
    }
  }, [productToEdit, show, setValue, reset]);

  const onSubmit = (data) => {
    handleSave(data);
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
            <Form.Label>URL Imagen</Form.Label>
            <Form.Control type="text" {...register("imageUrl")} placeholder="https://..." />
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