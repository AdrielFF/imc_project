'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    this.images = document.getElementsByClassName('carousel-container__image-container');
    this.imageIndex = 0;
    this.images[this.imageIndex].style.opacity = 1;

    this.init();
  }

  _createClass(Carousel, [{
    key: 'init',
    value: function init() {
      var _this = this;

      setInterval(function () {
        _this.nextSlide(_this.imageIndex + 1);
      }, 3000);
    }
  }, {
    key: 'nextSlide',
    value: function nextSlide(n) {

      if (n != this.imageIndex) {
        if (n >= this.images.length) {
          n = 0;
        }

        var current = this.images[this.imageIndex];
        var next = this.images[n];

        for (var i = 0; i < this.images.length; i++) {
          this.images[i].className = "carousel-container__image-container";
          this.images[i].style.opacity = 0;
        }

        current.classList.add('current');
        next.classList.add('next');

        this.imageIndex = n;
      }
    }
  }]);

  return Carousel;
}();