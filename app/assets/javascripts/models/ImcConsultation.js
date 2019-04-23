"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImcConsultation = function () {
  function ImcConsultation(weight, height) {
    _classCallCheck(this, ImcConsultation);

    this.weight = weight;
    this.height = height;
    this._results = {};
  }

  _createClass(ImcConsultation, [{
    key: "calculateImc",
    value: function calculateImc() {
      return (this.weight / (this.height * this.height)).toFixed(0);
    }
  }, {
    key: "imcDescription",
    value: function imcDescription() {

      var msg = void 0;
      var imc = this.imcCalc;
      switch (true) {
        case imc < 18.5:
          msg = "Abaixo do peso";
          break;

        case imc >= 18.5 && imc <= 24.9:
          msg = "Peso normal";
          break;

        case imc >= 25 && imc <= 29.9:
          msg = "Sobrepeso";
          break;

        case imc >= 30 && imc <= 34.9:
          msg = "obesidade grau 1";
          break;

        case imc >= 35 && imc <= 39.9:
          msg = "obesidade grau 2";
          break;

        default:
          msg = "obesidade grau 3";
          break;
      }

      return msg;
    }
  }, {
    key: "result",
    get: function get() {
      this.imcCalc = this.calculateImc();
      this.imcDescription = this.imcDescription();

      this._results.result = this.imcCalc;
      this._results.description = this.imcDescription;
      return this._results;
    }
  }]);

  return ImcConsultation;
}();