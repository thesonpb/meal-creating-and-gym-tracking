import db from "../config/database.js";
import Tracking from "../models/tracking.js";

export const getGym = async (req, res) => {
  try {
    const trackings = await Tracking.findAll();
    res.status(200).render("gymtracking", { trackings });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addGym = async (req, res) => {
  try {
    const reqTrack = {
      name: req.body.name,
      week: req.body.week,
      numberOfSets: req.body.numberOfSets,
      numberOfReps: req.body.numberOfReps,
      set1Weight: req.body.set1Weight,
      set1Rep: req.body.set1Rep,
      set2Weight: req.body.set2Weight,
      set2Rep: req.body.set2Rep,
      set3Weight: req.body.set3Weight,
      set3Rep: req.body.set3Rep,
      set4Weight: req.body.set4Weight,
      set4Rep: req.body.set4Rep,
    };
    const tracking = await Tracking.create(reqTrack);
    res.status(200).redirect("/gym");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
