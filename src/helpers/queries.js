const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/productos`;

export const obtenerProducto = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
};

export const crearProducto = async (formData) => {
  const res = await fetch(API_URL, {
    method: "POST",
    body: formData, 
  });

  if (!res.ok) throw new Error("Error al crear producto");
  return res.json();
};

export const editarProducto = async (id, formData) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) throw new Error("Error al editar producto");
  return res.json();
};

export const borrarProductoService = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error al borrar producto");
  return res.json();
};


const URL_USUARIO = import.meta.env.VITE_API_URL 
  ? `${import.meta.env.VITE_API_URL}/usuarios` 
  : "http://localhost:3001/api/usuarios";

export const loginAPI = async (usuario) => {
  try {
    const respuesta = await fetch(`${URL_USUARIO}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const registroAPI = async (usuario) => {
  try {
    const respuesta = await fetch(`${URL_USUARIO}/registro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch(URL_USUARIO);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_USUARIO}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuarioAPI = async (id, datos) => {
  try {
    const respuesta = await fetch(`${URL_USUARIO}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAdmin = async (datos) => {
  try {
    const respuesta = await fetch(`${URL_USUARIO}/registro`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};