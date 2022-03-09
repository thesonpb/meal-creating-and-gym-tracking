import { Sequelize } from "sequelize";

const db = new Sequelize("gym", "root", "localadmin1234", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
