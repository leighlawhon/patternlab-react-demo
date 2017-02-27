'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _patternlabReact = require('@peteyg/patternlab-react');

var _Homepage = require('./components/pages/Homepage');

var _Homepage2 = _interopRequireDefault(_Homepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/' },
  _patternlabReact.PatternLabRoutes,
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Homepage2.default })
);

exports.default = Routes;