import express from "express";
import { bulking, cutting, maintenance } from "../controllers/main.js";

const router = express.Router();

router.get("/bulking/:calo", bulking);
router.get("/cutting/:calo", cutting);
router.get("/maintenance/:calo", maintenance);

export default router;
