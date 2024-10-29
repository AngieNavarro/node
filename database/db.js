import { Sequelize } from "sequelize";

const db_export = new Sequelize("databaseblog", "root", "Angie2024Mysql", {
  host: "localhost",
  dialect: "mysql",
});

export default db_export;
