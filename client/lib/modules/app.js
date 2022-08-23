"use strict";

var _Recipe = _interopRequireDefault(require("/modules/Recipe.js"));

var _Boil = _interopRequireDefault(require("./modules/actions/Boil.js"));

var _Heat = _interopRequireDefault(require("./modules/actions/Heat.js"));

var _Pour = _interopRequireDefault(require("./modules/actions/Pour.js"));

var _Ingredient = _interopRequireDefault(require("./modules/ingredients/Ingredient.js"));

var _Tool = _interopRequireDefault(require("./modules/Tool.js"));

var _Action = _interopRequireDefault(require("./modules/actions/Action.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * This is an example of a simple recipe.
 * It yields boiled water.
 * Step variables are named after the action.
 */
// instantiate necessary tools
var pot = new _Tool["default"]('Pot');
var cooktop = new _Tool["default"]('Cooktop'); // Instantiate necessary ingredients

var water = new _Ingredient["default"]('water');
var salt = new _Ingredient["default"]('salt'); // Instantiate necessary steps
// const pour = new Step([pot], [water], "pour water into pot");
// const season = new Step([pot], [salt], "add salt into pot");
// const heat = new Step([pot, cooktop], [], "place pot of water on cooktop");
// const wait = new Step([], [], "wait 5 minutes");
// const r1 = new Recipe('boiled water', '5', [water, salt], [pour, season, heat, wait], [pot, cooktop]);
//  Here design the interface for Sous
// console.log(r1.phrase);
// Here I will test to make sure Recipe objects work correctly

var recipe_test = new _Recipe["default"]("Boiled Water", [new _Pour["default"](water)["in"](pot), new _Heat["default"](water)["for"](10)["in"](cooktop)]);
var root = document.getElementById("root");
root.innerHTML = "<h1>" + recipe_test.name + "</h1>" + "<h3>" + recipe_test.phrase + "</h3>";
recipe_test.actions.forEach(function (action, i) {
  root.innerHTML += "<h4> Step " + i + " <h4/>" + "<p>" + action.phrase() + "</p>";
});