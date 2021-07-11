"use strict";

var _Ingredient = _interopRequireDefault(require("./Ingredient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

'use strict'; // Constructor testing


test('creates an ingredient object', function () {
  expect(new _Ingredient["default"]("sugar").name).toBe("sugar");
});
test('test inequality of objects', function () {
  expect(new _Ingredient["default"]("sugar") === new _Ingredient["default"]("sugar")).toBe(false);
});