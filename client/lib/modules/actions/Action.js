"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 
 * The Action class is an abstraction for any action taken as part
 * of a Step. It can represent any of its subclasses (e.g. Boil or Heat),
 * and is instantiated by binding an instance of Ingredient to it. 
 * It consists of a duration set by the setter method [For] and
 * a tool, which is set by the setter method [In].
 * 
 */
var Action = /*#__PURE__*/function () {
  function Action(ingredient) {
    _classCallCheck(this, Action);

    this.duration = 0;
    this.tool = null;
    this.ingredient = ingredient || "no indgredient";
  }

  _createClass(Action, [{
    key: "for",
    value: function _for(duration) {
      this.duration = duration;
      return this;
    }
  }, {
    key: "in",
    value: function _in(tool) {
      this.tool = tool;
      return this;
    }
  }, {
    key: "phrase",
    value: function phrase() {
      var duration_phrase = this.duration === 0 ? "." : " for " + this.duration + " minutes.";
      return "Grab " + this.tool.name + ", " + "<b>" + this.constructor.name + "</b> " + this.ingredient.name + duration_phrase;
    }
  }]);

  return Action;
}();

exports["default"] = Action;