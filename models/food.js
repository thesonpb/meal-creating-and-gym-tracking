import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Food = db.define(
  "Food",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    carb: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    protein: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isDrink: {
      type: DataTypes.BOOLEAN,
    },
    isVegetable: {
      type: DataTypes.BOOLEAN,
    },
    fat: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { timestamps: false },
  { freezeTableName: true }
);

export default Food;
