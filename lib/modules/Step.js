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
 * A Step object is the abstraction for the smallest pice of a
 * preparation. It describes a sub-process in the preparation
 * which consists of a list of necessary tools [tools], an 
 * [ingredient], and an [instruction].
 * 
 * An example of this object would corrspond to boiling water:
 * s1 = new Step(pot, water, "boil the water")
 * 
 */
var Step = /*#__PURE__*/function () {
  function Step(step_num, action) {
    _classCallCheck(this, Step);

    this.number = step_num || 0;
    this.actions = actions;
    this.duration = this.agg_durations;
    this.tools = this.agg_tools;
    this.ingredients;
  }

  _createClass(Step, [{
    key: "phrase",
    value: function phrase() {
      var phr = "Step " + this.number + ":"; // for (let t in this.tools) phr += t + ", ";

      return phr;
    }
  }]);

  return Step;
}();

exports["default"] = Step;