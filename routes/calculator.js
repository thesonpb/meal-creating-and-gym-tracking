import express from "express";
import {
  getFood,
  getCalculator,
  calculateTdee,
  calculateMeal,
} from "../controllers/calculator.js";

const router = express.Router();

router.get("/", getCalculator);
router.post("/tdee", calculateTdee);
router.get("/meal/:calo", calculateMeal);

export default router;
