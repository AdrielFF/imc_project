"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsiveMenu = function () {
  function ResponsiveMenu() {
    _classCallCheck(this, ResponsiveMenu);

    this.trigger = document.getElementById("trigger-menu");
    this.menu = document.querySelector(".nav-menu");

    this.init();
  }

  _createClass(ResponsiveMenu, [{
    key: "init",
    value: function init() {
      this.responseMenu();
      this.hideHeader();
    }
  }, {
    key: "responseMenu",
    value: function responseMenu() {
      var _this = this;

      this.trigger.addEventListener("click", function () {
        _this.menu.classList.toggle("active");
      });
    }
  }, {
    key: "hideHeader",
    value: function hideHeader() {
      var prevScrollPos = window.pageYOffset;
      window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
          document.getElementById("header").style.top = "0";
          document.querySelector(".carousel-container").style.top = "8vh";
        } else {
          document.getElementById("header").style.top = "-8vh";
          document.querySelector(".carousel-container").style.top = "0";
        }

        prevScrollPos = currentScrollPos;
      };
    }
  }, {
    key: "toggle",
    value: function toggle(element) {
      element.classList.toggle("active");
    }
  }]);

  return ResponsiveMenu;
}();