"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputMask = function () {
  function InputMask(elements) {
    _classCallCheck(this, InputMask);

    this.init(elements);
  }

  _createClass(InputMask, [{
    key: "init",
    value: function init(elements) {
      var _this = this;

      elements.map(function (element) {
        element.addEventListener("keyup", function (event) {
          element.value = _this.addMask(element);
        });
      });
    }
  }, {
    key: "addMask",
    value: function addMask(element) {

      var value = element.value.replace(/(\D)/g, "").replace(/(\d{1,})(\d{2})/g, "$1.$2");
      return value;
    }
  }]);

  return InputMask;
}();