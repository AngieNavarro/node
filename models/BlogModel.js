import db_export from "../database/db.js";

import { DataTypes } from "sequelize";

const BlogModel = db_export.define("blog", {
  titulo: { type: DataTypes.STRING },
  contenido: { type: DataTypes.STRING },
});

export default BlogModel;
