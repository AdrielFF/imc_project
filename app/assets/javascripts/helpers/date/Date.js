'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Date = function () {
  function Date(date) {
    _classCallCheck(this, Date);

    this.date = date;
  }

  _createClass(Date, [{
    key: 'convert',
    value: function convert() {

      var dateNumOnly = this.date.replace(/\D/g, '');
      var year = dateNumOnly.replace(/(\d{4})(\d{4})/, '$1');
      var month = dateNumOnly.replace(/(\d{4})(\d{2})(\d{2})/, '$2');
      var day = dateNumOnly.replace(/(\d{4})(\d{2})(\d{2})/, '$3');

      return day + "/" + month + "/" + year;
    }
  }]);

  return Date;
}();