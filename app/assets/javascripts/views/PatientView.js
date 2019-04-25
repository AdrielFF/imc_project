"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PatientView = function () {
  function PatientView(element) {
    _classCallCheck(this, PatientView);

    this.element = element;
  }

  _createClass(PatientView, [{
    key: "template",
    value: function template(model) {

      return "<table class=\"table table-bordered\">\n              <thead>\n\n                <tr>\n                  <th>Nome</th>\n                  <th>Altura</th>\n                  <th>Peso</th>\n                  <th>Resultado</th>\n                  <th>Dia</th>\n                </tr>\n\n              </thead>\n\n              <tbody>\n              " + model.map(function (data) {
        return "<tr>\n                  <td>" + data._name + "</td>\n                  <td>" + data._height + " m</td>\n                  <td>" + data._weight + " kg</td>\n                  <td>" + ("(" + data._imc.result + ") " + data._imc.description) + "</td>\n                  <td>" + data._date + "</td>\n                </tr>";
      }).join('') + "\n              </tbody>\n            </table>";
    }
  }, {
    key: "update",
    value: function update(model) {
      this.element.innerHTML = this.template(model);
    }
  }]);

  return PatientView;
}();