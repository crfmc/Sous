"use strict";

var _Boil = _interopRequireDefault(require("./Boil"));

var _Ingredient = _interopRequireDefault(require("../ingredients/Ingredient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { expect } from '@jest/globals'
// Instantiate necessary ingredients
var salt = new _Ingredient["default"]('salt');
var water = new _Ingredient["default"]('water');
test('creates an ingredient object', function () {
  expect(new _Ingredient["default"]("sugar").name).toBe("sugar");
});
test('creates action object', function () {
  expect(new _Boil["default"](water).ingredient.name).toBe("water");
});