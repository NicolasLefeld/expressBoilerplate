const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema(
  {
    example: String,
  },
  { collection: "exampleCollectionName" }
);

module.exports.exampleSchema = mongoose.model("exampleModel", exampleSchema);
