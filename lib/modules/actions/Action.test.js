"use strict";

var _Action = _interopRequireDefault(require("./Action"));

var _Boil = _interopRequireDefault(require("./Boil"));

var _Heat = _interopRequireDefault(require("./Heat"));

var _Pour = _interopRequireDefault(require("./Pour"));

var _Ingredient = _interopRequireDefault(require("../ingredients/Ingredient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Instantiate necessary ingredients
var salt = new _Ingredient["default"]('salt');
var water = new _Ingredient["default"]('water'); // Constructor testing

test('creates action object given ingredient', function () {
  expect(new _Action["default"](water).ingredient.name).toBe("water");
});
test('creates Boil object given ingredient', function () {
  expect(new _Boil["default"](water).ingredient.name).toBe("water");
});
test('creates Pour object given ingredient', function () {
  expect(new _Pour["default"](water).ingredient.name).toBe("water");
});
test('creates Heat object given ingredient', function () {
  expect(new _Heat["default"](water).ingredient.name).toBe("water");
});