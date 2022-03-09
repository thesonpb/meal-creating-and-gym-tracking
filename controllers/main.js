import db from "../config/database.js";
import Food from "../models/food.js";

export const bulking = async (req, res) => {
  try {
    const foods = await Food.findAll();
    const tdee = req.params.calo;
    res.status(200).render("food", { foods, tdee });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const cutting = async (req, res) => {
  try {
    const foods = await Food.findAll();
    const tdee = req.params.calo;

    res.status(200).render("food", { foods, tdee });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const maintenance = async (req, res) => {
  try {
    const foods = await Food.findAll();
    const tdee = req.params.calo;

    res.status(200).render("food", { foods, tdee });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
