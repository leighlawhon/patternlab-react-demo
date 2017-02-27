'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _patternlabReactComponent = require('@peteyg/patternlab-react-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageTitle = function (_PatternLabComponent) {
    _inherits(PageTitle, _PatternLabComponent);

    function PageTitle() {
        _classCallCheck(this, PageTitle);

        return _possibleConstructorReturn(this, (PageTitle.__proto__ || Object.getPrototypeOf(PageTitle)).apply(this, arguments));
    }

    _createClass(PageTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h1',
                null,
                this.props.title
            );
        }
    }], [{
        key: 'getTitle',
        value: function getTitle() {
            return "Page title";
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return "Standard h1 header.";
        }
    }]);

    return PageTitle;
}(_patternlabReactComponent.PatternLabComponent);

PageTitle.fakeProps = {
    title: "Lorem ipsum"
};

PageTitle.propTypes = {
    title: _react2.default.PropTypes.string.isRequired
};

exports.default = PageTitle;