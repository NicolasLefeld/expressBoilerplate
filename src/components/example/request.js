const { exampleSchema } = require("../../schema/example");

async function exampleDb(filter = {}, projection = "") {
  return exampleSchema.find(filter, projection);
}

module.exports = {
  exampleDb,
};
