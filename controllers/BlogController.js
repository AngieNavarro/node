import BlogModel from "../models/BlogModel.js";

// Metodos para el crud
// Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Mostrar un registro
export const getBlog = async (req, res) => {
  try {
    const blog =await BlogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Crear un registro
export const crearBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({
      message: "Resistro exitoso",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Actualizar un registro
export const acutalizarBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "Resistro actualizado exitosamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
// Eliminar un registro
export const eliminarBlog = async (req, res) => {
  try {
    await BlogModel.destroy( {
      where: { id: req.params.id },
    });
    res.json({
      message: "Resistro eliminado exitosamente",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
