const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose
  .connect(
    "mongodb+srv://Magomed:2403kma@cluster0.96gehwd.mongodb.net/cofe?retryWrites=true&w=majority",
    {}
  )
  .then(() => console.log("ok"))
  .catch(() => console.log("err"));
app.use(express.json());
app.use(require("./routes/drinks.routes"));
app.listen(1500, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("ok");
  }
});
