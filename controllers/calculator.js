import db from "../config/database.js";
import Food from "../models/food.js";

export const getFood = async (req, res) => {
  try {
    const foods = await Food.findAll();
    res.status(200).render("food", { foods });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCalculator = (req, res) => {
  res.status(200).render("tdeeform");
};

export const calculateMeal = async (req, res) => {
  try {
    const calo = req.params.calo;
    const ids = req.query.food;
    const dbFood = await Food.findAll();
    const foods = dbFood.map((food) => {
      return food.dataValues;
    });
    let mealVegetable = [];
    let mealDrink = [];
    let mealFood = [];
    if (typeof ids === "object") {
      ids.forEach((id) => {
        const item = foods.find((food) => {
          return food.id == id;
        });
        if (item.isDrink) mealDrink.push(item);
        else if (item.isVegetable) mealVegetable.push(item);
        else mealFood.push(item);
      });
    } else {
      const item = foods.find((food) => {
        return food.id == ids;
      });
      if (item.isDrink) mealDrink.push(item);
      else if (item.isVegetable) mealVegetable.push(item);
      else mealFood.push(item);
    }
    let caloVege = 0;
    let caloDrink = 0;
    let caloFood = 0;

    mealVegetable.forEach((vege) => {
      caloVege += 4 * vege.protein + 4 * vege.carb + 9 * vege.fat;
    });
    if (mealVegetable.length == 0) caloVege = 0;
    else caloVege /= mealVegetable.length;
    mealDrink.forEach((drink) => {
      caloDrink += 4 * drink.protein + 4 * drink.carb + 9 * drink.fat;
    });
    if (mealDrink.length == 0) caloDrink = 0;
    else caloDrink /= mealDrink.length;
    mealFood.forEach((food) => {
      caloFood += 4 * food.protein + 4 * food.carb + 9 * food.fat;
    });
    if (mealFood.length == 0) caloFood = 0;
    else caloFood /= mealFood.length;

    //1vegetable, 2food, 1drink
    const weight = calo / (caloDrink + 2 * caloFood + caloVege);
    let foodWeight = [];

    mealVegetable.forEach((vege) => {
      foodWeight.push({
        name: vege.name,
        weight: Math.round(weight / mealVegetable.length) * 100,
      });
    });
    mealDrink.forEach((drink) => {
      foodWeight.push({
        name: drink.name,
        weight: Math.round(weight / mealDrink.length) * 100,
      });
    });
    mealFood.forEach((food) => {
      foodWeight.push({
        name: food.name,
        weight: Math.round(weight / mealFood.length) * 200,
      });
    });

    res.status(200).render("meal", { foodWeight });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const calculateTdee = (req, res) => {
  try {
    const age = req.body.age;
    const height = req.body.height;
    const weight = req.body.weight;
    const exerciseLevel = req.body.exerciseLevel;
    const gender = req.body.gender;
    let bmr;
    let tdee;
    if (gender == "male") {
      bmr = 66 + 13.7 * weight + 5 * height - 6.8 * age;
    } else {
      bmr = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    }
    switch (exerciseLevel) {
      case "little or no exercise":
        tdee = bmr * 1.2;
        break;
      case "light exercise":
        tdee = bmr * 1.375;
        break;
      case "moderate exercise":
        tdee = bmr * 1.55;
        break;
      case "hard exercise":
        tdee = bmr * 1.725;
        break;
      case "very hard exercise":
        tdee = bmr * 1.9;
        break;
      default:
        break;
    }
    tdee = Math.round(tdee);
    res.status(200).render("tdee", { tdee });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
