const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number },
  inStock: { type: Number },
  isCaffeine: { type: Boolean, default: false },
  volume: { type: Number },
  descriptionOfTheDrink: { type: String, default: null },
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
