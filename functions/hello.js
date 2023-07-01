const simpleReturn = require("netlify-functions-simple-return");

exports.handler = async () => {
  return { statusCode: 200, body: JSON.stringify({ name: "Nishan" }) };
};
