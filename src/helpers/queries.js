/* const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/products`;

export const getProducts = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
};

export const createProduct = async (formData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
};

export const updateProduct = async (id, formData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!res.ok) throw new Error("Error al actualizar producto");
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar producto");
  return res.json();
};
 */

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/productos`;

export const obtenerProductos = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
};

export const crearProducto = async (producto) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
};

export const editarProducto = async (id, producto) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  if (!res.ok) throw new Error("Error al editar producto");
  return res.json();
};

export const borrarProducto = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al borrar producto");
  return res.json();
};
