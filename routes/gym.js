import express from "express";
import { getGym, addGym } from "../controllers/gym.js";

const router = express.Router();

router.get("/", getGym);
router.post("/add", addGym);

export default router;
