const Drink = require("../models/Drink.model");

module.exports.drinksControllers = {
  getDrinks: async (req, res) => {
    const drinks = await Drink.find({}, { name: 1, price: 1 });
    res.json(drinks);
  },

  getDrinksInStock: async (req, res) => {
    const inStock = await Drink.find({ inStock: { $gte: 1 } });
    res.json(inStock);
  },
  getInformationDrinks: (req, res) => {
    Drink.findById(req.params.id).then((drink) => {
      res.json(drink);
    });
  },
  addDrink: async (req, res) => {
    const drink = await Drink.create({
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
      isCaffeine: req.body.isCaffeine,
      volume: req.body.volume,
      descriptionOfTheDrink: req.body.descriptionOfTheDrink,
    });
    res.json(drink);
  },
  deleteDrink: async (req, res) => {
    const deleteDrinkById = await Drink.findByIdAndDelete(req.params.id);
    res.send(deleteDrinkById);
  },
  changeDrink: async (req, res) => {
    const changeDrinkById = await Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
    });
    res.send(changeDrinkById);
  },
};
