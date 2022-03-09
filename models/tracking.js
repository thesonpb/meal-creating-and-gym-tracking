import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Tracking = db.define(
  "Tracking",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    week: {
      type: DataTypes.INTEGER,
    },
    numberOfSets: {
      type: DataTypes.INTEGER,
    },
    numberOfReps: {
      type: DataTypes.INTEGER,
    },
    set1Weight: {
      type: DataTypes.INTEGER,
    },
    set1Rep: {
      type: DataTypes.INTEGER,
    },
    set2Weight: {
      type: DataTypes.INTEGER,
    },
    set2Rep: {
      type: DataTypes.INTEGER,
    },
    set3Weight: {
      type: DataTypes.INTEGER,
    },
    set3Rep: {
      type: DataTypes.INTEGER,
    },
    set4Weight: {
      type: DataTypes.INTEGER,
    },
    set4Rep: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false },
  { freezeTableName: true }
);

export default Tracking;
