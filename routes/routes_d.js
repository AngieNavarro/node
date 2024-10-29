import express from "express";
import {
  acutalizarBlog,
  crearBlog,
  eliminarBlog,
  getAllBlogs,
  getBlog,
} from "../controllers/BlogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", crearBlog);
router.put("/:id", acutalizarBlog);
router.delete("/:id", eliminarBlog);

export default router;
