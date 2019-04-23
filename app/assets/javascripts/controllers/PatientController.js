"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PatientController = function () {
  function PatientController() {
    _classCallCheck(this, PatientController);

    this.inputName = document.querySelector("#nameInput");
    this.inputDate = document.querySelector("#dateInput");
    this.inputWeight = document.querySelector("#weightInput");
    this.inputHeight = document.querySelector("#heightInput");
    this.target = document.querySelector('#target');

    new InputMask([this.inputHeight, this.inputWeight]);
    this.patientList = new PatientList();
    this.view = new PatientView(this.target);
    this.view.update(this.patientList.list);
  }

  _createClass(PatientController, [{
    key: "add",
    value: function add(event) {
      event.preventDefault();

      this.patientList.add(new Patient(this.inputName.value, new Date(this.inputDate.value), this.inputWeight.value, this.inputHeight.value));

      this.view.update(this.patientList.list);
      this.clearForm();
    }
  }, {
    key: "clearTable",
    value: function clearTable() {
      this.patientList.clear();
      this.view.update(this.patientList.list);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      this.inputName.value = '';
      this.inputDate.value = '';
      this.inputWeight.value = '';
      this.inputHeight.value = '';
      this.inputName.focus();
    }
  }]);

  return PatientController;
}();