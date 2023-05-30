const { Router } = require("express");
const { drinksControllers } = require("../controllers/drinks.controllers");

const router = Router();

router.get("/drinks", drinksControllers.getDrinks);
router.get("/drink/stock", drinksControllers.getDrinksInStock);
router.get("/drinks/:id", drinksControllers.getInformationDrinks);
router.post("/drinks", drinksControllers.addDrink);
router.delete("/drinks/:id", drinksControllers.deleteDrink);
router.patch("/drinks/:id", drinksControllers.changeDrink);

module.exports = router;
