var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyConverter = function (_React$Component) {
  _inherits(CurrencyConverter, _React$Component);

  function CurrencyConverter(props) {
    _classCallCheck(this, CurrencyConverter);

    var _this = _possibleConstructorReturn(this, (CurrencyConverter.__proto__ || Object.getPrototypeOf(CurrencyConverter)).call(this, props));

    _this.state = {
      rate: 0.89,
      usd: 1,
      euro: 1 * 0.89
    };

    _this.handleUsdChange = _this.handleUsdChange.bind(_this);
    _this.handleEuroChange = _this.handleEuroChange.bind(_this);
    return _this;
  }

  _createClass(CurrencyConverter, [{
    key: "toUsd",
    value: function toUsd(amount, rate) {
      return amount * (1 / rate);
    }
  }, {
    key: "toEuro",
    value: function toEuro(amount, rate) {
      return amount * rate;
    }
  }, {
    key: "convert",
    value: function convert(amount, rate, equation) {
      console.log(typeof amount === "undefined" ? "undefined" : _typeof(amount));
      var input = parseFloat(amount);
      if (Number.isNaN(input)) {
        return '';
      }
      return equation(input, rate).toFixed(3);
    }
  }, {
    key: "handleUsdChange",
    value: function handleUsdChange(event) {
      var euro = this.convert(event.target.value, this.state.rate, this.toEuro);
      this.setState({
        usd: event.target.value,
        euro: euro
      });
    }
  }, {
    key: "handleEuroChange",
    value: function handleEuroChange(event) {
      var usd = this.convert(event.target.value, this.state.rate, this.toUsd);
      this.setState({
        euro: event.target.value,
        usd: usd
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          rate = _state.rate,
          usd = _state.usd,
          euro = _state.euro;


      return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "text-center p-3 mb-2" },
          React.createElement(
            "h2",
            { className: "mb-2" },
            "Currency Converter"
          ),
          React.createElement(
            "h4",
            null,
            "USD 1 : ",
            rate,
            " EURO"
          )
        ),
        React.createElement(
          "div",
          { className: "row text-center" },
          React.createElement(
            "div",
            { className: "col-12" },
            React.createElement(
              "span",
              { className: "mr-1" },
              "USD"
            ),
            React.createElement("input", { value: usd, onChange: this.handleUsdChange, type: "number" }),
            React.createElement(
              "span",
              { className: "mx-3" },
              "="
            ),
            React.createElement("input", { value: euro, onChange: this.handleEuroChange, type: "number" }),
            React.createElement(
              "span",
              { className: "ml-1" },
              "EURO"
            )
          )
        )
      );
    }
  }]);

  return CurrencyConverter;
}(React.Component);

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(CurrencyConverter, null));