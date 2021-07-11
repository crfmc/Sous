"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//  Here retreive the information from retreiver.js and
//  modify the information rendered in view.js
var Recipe = /*#__PURE__*/function () {
  /**
   * 
   * Constructs a Recipe object.
   * A Recipe object is an abstraction for a recipe.
   * It has a name [name], an ordered list of actions 
   * [actions], and a number denoting the number of
   * times it was perpared, [iterations].
   * 
   */
  function Recipe(name, actions, iterations) {
    _classCallCheck(this, Recipe);

    // Here I should inspect the steps to get the amount of time necessary
    this.name = name;
    this.actions = actions;
    this.ingredients = this.agg_ingredients();
    this.duration = this.agg_durations();
    this.tools = this.agg_tools();
    this.iterations = iterations || 0;
  }

  _createClass(Recipe, [{
    key: "agg_ingredients",
    value: function agg_ingredients() {
      var ingredients = [];
      this.actions.forEach(function (action) {
        return ingredients.push(action.ingredient);
      });
      return new Set(ingredients);
    }
  }, {
    key: "agg_durations",
    value: function agg_durations() {
      var dur = 0;
      this.actions.forEach(function (action) {
        return dur += action.duration;
      });
      return dur;
    }
  }, {
    key: "agg_tools",
    value: function agg_tools() {
      var tools = [];
      this.actions.forEach(function (action) {
        return tools.push(action.tool);
      });
      return tools;
    }
  }, {
    key: "phrase",
    get: function get() {
      var phr = this.name + " takes " + this.duration + " minutes, and uses: ";
      this.ingredients.forEach(function (ingr) {
        return phr += ingr.name + ", ";
      }); // for (let ingr in this.ingredients) phr += this.ingredients[ingr].name + ", ";

      return phr;
    }
  }]);

  return Recipe;
}();

exports["default"] = Recipe;