const { exampleDb } = require("./request");

async function exampleController() {
  const test = await exampleDb();
  
  return test
    ? { status: 200, body: "Example ok" }
    : { status: 404, body: "Example when not ok" };
}

module.exports = {
  exampleController,
};
