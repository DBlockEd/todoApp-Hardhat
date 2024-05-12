const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("todoApp", (m) => {

  const todoApp = m.contract("TodoApp");

  return { todoApp };
});
