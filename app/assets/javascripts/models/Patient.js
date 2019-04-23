"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Patient = function () {
  function Patient(pName, pDate, pWeight, pHeight) {
    _classCallCheck(this, Patient);

    this._name = pName;
    this._date = pDate.convert();
    this._weight = pWeight;
    this._height = pHeight;
    this._imc = new ImcConsultation(this.weight, this.height);
    this._imc = this._imc.result;

    Object.freeze(this);
  }

  _createClass(Patient, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "date",
    get: function get() {
      return this._date;
    }
  }, {
    key: "weight",
    get: function get() {
      return this._weight;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "imc",
    get: function get() {
      return this._imc;
    }
  }]);

  return Patient;
}();