"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PatientList = function () {
  function PatientList() {
    _classCallCheck(this, PatientList);

    this.patients = JSON.parse(localStorage.patients);
  }

  _createClass(PatientList, [{
    key: "add",
    value: function add(patient) {

      if (this.patients == null) {
        this.patients = [];
      }

      this.patients.push(patient);
      localStorage.setItem("patients", JSON.stringify(this.patients));
    }
  }, {
    key: "clear",
    value: function clear() {
      localStorage.removeItem("patients");
      this.patients = [];
    }
  }, {
    key: "list",
    get: function get() {
      if (localStorage.getItem("patients") === null) {
        return [];
      }

      return JSON.parse(localStorage.getItem("patients"));
    }
  }]);

  return PatientList;
}();