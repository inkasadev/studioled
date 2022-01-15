function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

export var StudioLed = /*#__PURE__*/_createClass(function StudioLed(_ref) {
  var element = _ref.element,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 85 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 135 : _ref$height,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? 0 : _ref$initialValue,
      _ref$baseDigits = _ref.baseDigits,
      baseDigits = _ref$baseDigits === void 0 ? 0 : _ref$baseDigits;

  _classCallCheck(this, StudioLed);

  var self = this;
  var _config = {
    element: element,
    width: width,
    height: height,
    baseDigits: baseDigits
  };
  var _sprites = {};
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = _config.width;
  canvas.height = _config.height;

  try {
    if (_typeof(_config.element) !== "object") throw new Error("Please pass a valid element to the constructor");

    _config.element.append(canvas);
  } catch (e) {
    throw new Error("Please pass a valid element to the constructor");
  }

  _config.value = initialValue;
  _config.status = "default";

  var loadImages = function loadImages() {
    var counter = 0;

    var loaded = function loaded() {
      if (++counter === 3) {
        self.render();
      }
    };

    _sprites["default"] = new Image();

    _sprites["default"].onload = function () {
      return loaded();
    };

    _sprites["default"].src = "data:image/png;base64,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";
    _sprites.success = new Image();

    _sprites.success.onload = function () {
      return loaded();
    };

    _sprites.success.src = "data:image/png;base64,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";
    _sprites.error = new Image();

    _sprites.error.onload = function () {
      return loaded();
    };

    _sprites.error.src = "data:image/png;base64,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";
  };

  var formatValue = function formatValue(val) {
    var strVal = "" + val;
    var diff = _config.baseDigits - strVal.length;

    for (var i = 0; i < diff; i++) {
      strVal = "0" + strVal;
    }

    return strVal;
  };

  Object.defineProperties(self, {
    render: {
      value: function value() {
        var newWidth = _config.value.length * _config.width;
        canvas.width = newWidth;
        ctx.clearRect(0, 0, newWidth, _config.height);

        for (var i = 0; i < _config.value.length; i++) {
          ctx.save();
          ctx.translate(i * _config.width, 0);
          ctx.drawImage(_sprites[_config.status], _config.value[i] * 85, 0, 85, 135, 0, 0, _config.width, _config.height);
          ctx.restore();
        }
      },
      enumerable: true
    },
    setValue: {
      value: function value(val) {
        _config.value = formatValue(val);
        self.render();
        return _config.value;
      },
      enumerable: true
    },
    getValue: {
      value: function value() {
        return _config.value;
      },
      enumerable: true
    },
    setStatus: {
      value: function value(status) {
        var statusTypes = ["default", "success", "error"];

        if (!statusTypes.includes(status)) {
          return new Error("Status invalid");
        }

        _config.status = status;
        self.render();
        return status;
      },
      enumerable: true
    },
    addBreakpoint: {
      value: function value(_value, width, height) {
        var media = window.matchMedia("(min-width: ".concat(_value, "px)"));
        var oldWidth = _config.width;
        var oldHeight = _config.height;

        var updateSize = function updateSize(media) {
          if (media.matches) {
            _config.width = width;
            _config.height = height;
          } else {
            _config.width = oldWidth;
            _config.height = oldHeight;
          }

          canvas.width = _config.width;
          canvas.height = _config.height;
          self.render();
        };

        updateSize(media);
        media.addListener(updateSize);
      },
      enumerable: true
    }
  });
  loadImages();
  _config.value = formatValue(Number(_config.value));
});