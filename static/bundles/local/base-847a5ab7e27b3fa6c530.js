webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(75);
	module.exports = __webpack_require__(77);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(244);\n\nvar _redux = __webpack_require__(245);\n\nvar _reactRedux = __webpack_require__(264);\n\nvar _reduxThunk = __webpack_require__(279);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(280);\n\nvar reducers = _interopRequireWildcard(_reducers);\n\nvar _PageHeader = __webpack_require__(286);\n\nvar _PageHeader2 = _interopRequireDefault(_PageHeader);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {\n  return f;\n})(_redux.createStore);\nvar reducer = (0, _redux.combineReducers)(reducers);\nvar store = finalCreateStore(reducer);\n\nvar pageHeader = function (_React$Component) {\n  _inherits(pageHeader, _React$Component);\n\n  function pageHeader() {\n    _classCallCheck(this, pageHeader);\n\n    return _possibleConstructorReturn(this, (pageHeader.__proto__ || Object.getPrototypeOf(pageHeader)).apply(this, arguments));\n  }\n\n  _createClass(pageHeader, [{\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(_PageHeader2.default, null)\n      );\n    }\n  }]);\n\n  return pageHeader;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(\"pageHeader\", null), document.getElementById('pageHeader'));\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(283); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"base.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvY29udHJvbGxlci9ob21lL2Jhc2UuanN4P2FiMDYiXSwibmFtZXMiOlsicmVkdWNlcnMiLCJmaW5hbENyZWF0ZVN0b3JlIiwidGh1bmsiLCJ3aW5kb3ciLCJkZXZUb29sc0V4dGVuc2lvbiIsImYiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJzdG9yZSIsInBhZ2VIZWFkZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBTUE7O0FBQ0E7Ozs7QUFFQTs7SUFBWUEsUTs7QUFDWjs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQyxtQkFBbUIsb0JBQ3JCLDRCQUFnQkMsb0JBQWhCLENBRHFCLEVBRXJCQyxPQUFPQyxpQkFBUCxHQUEyQkQsT0FBT0MsaUJBQVAsRUFBM0IsR0FBd0Q7QUFBQSxTQUFLQyxDQUFMO0FBQUEsQ0FGbkMsRUFHckJDLGtCQUhxQixDQUF2QjtBQUlBLElBQUlDLFVBQVUsNEJBQWdCUCxRQUFoQixDQUFkO0FBQ0EsSUFBSVEsUUFBUVAsaUJBQWlCTSxPQUFqQixDQUFaOztJQUVNRSxVOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBQyw0QkFBRDtBQUFBLFVBQVUsT0FBT0QsS0FBakI7QUFDRSxzQ0FBQyxvQkFBRDtBQURGLE9BREY7QUFLRDs7OztFQVBzQkUsZ0JBQU1DLFM7O0FBVS9CLHNCQUFPLGlEQUFQLEVBQXNCQyxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENBQXRCLEUiLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIlxuaW1wb3J0IHtcbiAgY3JlYXRlU3RvcmUsXG4gIGNvbXBvc2UsXG4gIGFwcGx5TWlkZGxld2FyZSxcbiAgY29tYmluZVJlZHVjZXJzLFxufSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiXG5cbmltcG9ydCAqIGFzIHJlZHVjZXJzIGZyb20gXCIuL3JlZHVjZXJzXCJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuL2NvbnRhaW5lcnMvUGFnZUhlYWRlclwiXG5cbmxldCBmaW5hbENyZWF0ZVN0b3JlID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCkgOiBmID0+IGZcbikoY3JlYXRlU3RvcmUpXG5sZXQgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VycylcbmxldCBzdG9yZSA9IGZpbmFsQ3JlYXRlU3RvcmUocmVkdWNlcilcblxuY2xhc3MgcGFnZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxQYWdlSGVhZGVyIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5yZW5kZXIoPHBhZ2VIZWFkZXIvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VIZWFkZXInKSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZW1wbGF0ZXMvY29udHJvbGxlci9ob21lL2Jhc2UuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module, process) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n\nvar _react = __webpack_require__(140);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _radium = __webpack_require__(287);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nvar _reactRedux = __webpack_require__(264);\n\nvar _counterActions = __webpack_require__(282);\n\nvar counterActions = _interopRequireWildcard(_counterActions);\n\nvar _CurrentDate = __webpack_require__(334);\n\nvar _CurrentDate2 = _interopRequireDefault(_CurrentDate);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = {\n  button: {\n    cursor: \"pointer\"\n  },\n  counter: {\n    color: \"blue\",\n    fontSize: \"20px\"\n  }\n};\n\nvar HomeContainer = (_dec = (0, _reactRedux.connect)(function (state) {\n  return {\n    counters: state.counters\n  };\n}), _dec(_class = (0, _radium2.default)(_class = function (_React$Component) {\n  _inherits(HomeContainer, _React$Component);\n\n  function HomeContainer() {\n    _classCallCheck(this, HomeContainer);\n\n    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));\n  }\n\n  _createClass(HomeContainer, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      var dispatch = this.props.dispatch;\n\n      dispatch(counterActions.increaseCounter());\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var counters = this.props.counters;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"container\" },\n        _react2.default.createElement(\n          \"div\",\n          { className: \"row\" },\n          _react2.default.createElement(\n            \"div\",\n            { className: \"col-sm-12\" },\n            _react2.default.createElement(\n              _CurrentDate2.default,\n              null,\n              \"Sample App!\"\n            ),\n            _react2.default.createElement(\n              \"div\",\n              { style: [styles.button], onClick: function onClick() {\n                  return _this2.handleClick();\n                } },\n              \"INCREASE\"\n            ),\n            _react2.default.createElement(\n              \"p\",\n              { style: [styles.counter] },\n              counters.clicks\n            ),\n            _react2.default.createElement(\n              \"p\",\n              null,\n              process.env.BASE_API_URL\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return HomeContainer;\n}(_react2.default.Component)) || _class) || _class);\nexports.default = HomeContainer;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(283); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot apply hot update to \" + \"BaseComponentent.jsx\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), __webpack_require__(15)))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvY29udHJvbGxlci9ob21lL2NvbnRhaW5lcnMvUGFnZUhlYWRlci5qc3g/OTMzNSJdLCJuYW1lcyI6WyJjb3VudGVyQWN0aW9ucyIsInN0eWxlcyIsImJ1dHRvbiIsImN1cnNvciIsImNvdW50ZXIiLCJjb2xvciIsImZvbnRTaXplIiwiSG9tZUNvbnRhaW5lciIsImNvdW50ZXJzIiwic3RhdGUiLCJSYWRpdW0iLCJkaXNwYXRjaCIsInByb3BzIiwiaW5jcmVhc2VDb3VudGVyIiwiaGFuZGxlQ2xpY2siLCJjbGlja3MiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9BUElfVVJMIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7O0lBQVlBLGM7O0FBQ1o7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUMsU0FBUztBQUNiQyxVQUFRO0FBQ05DLFlBQVE7QUFERixHQURLO0FBSWJDLFdBQVM7QUFDUEMsV0FBTyxNQURBO0FBRVBDLGNBQVU7QUFGSDtBQUpJLENBQWY7O0lBY3FCQyxhLFdBSnBCLHlCQUFRO0FBQUEsU0FBVTtBQUNqQkMsY0FBVUMsTUFBTUQ7QUFEQyxHQUFWO0FBQUEsQ0FBUixDLG9CQUdBRSxnQjs7Ozs7Ozs7Ozs7a0NBRWU7QUFBQSxVQUNQQyxRQURPLEdBQ0ssS0FBS0MsS0FEVixDQUNQRCxRQURPOztBQUVaQSxlQUFTWCxlQUFlYSxlQUFmLEVBQVQ7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDRkwsUUFERSxHQUNVLEtBQUtJLEtBRGYsQ0FDRkosUUFERTs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUMsbUNBQUQ7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxPQUFPLENBQUNQLE9BQU9DLE1BQVIsQ0FBWixFQUE2QixTQUFTO0FBQUEseUJBQU0sT0FBS1ksV0FBTCxFQUFOO0FBQUEsaUJBQXRDO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFHLE9BQU8sQ0FBQ2IsT0FBT0csT0FBUixDQUFWO0FBQTZCSSx1QkFBU087QUFBdEMsYUFIRjtBQUlFO0FBQUE7QUFBQTtBQUFJQyxzQkFBUUMsR0FBUixDQUFZQztBQUFoQjtBQUpGO0FBREY7QUFERixPQURGO0FBWUQ7Ozs7RUFwQndDQyxnQkFBTUMsUztrQkFBNUJiLGEiLCJmaWxlIjoiMjg2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUmFkaXVtIGZyb20gXCJyYWRpdW1cIlxuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0ICogYXMgY291bnRlckFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvY291bnRlckFjdGlvbnNcIlxuaW1wb3J0IEhlYWRsaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL0N1cnJlbnREYXRlXCJcblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b246IHtcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxuICBjb3VudGVyOiB7XG4gICAgY29sb3I6IFwiYmx1ZVwiLFxuICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgfVxufVxuXG5AY29ubmVjdChzdGF0ZSA9PiAoe1xuICBjb3VudGVyczogc3RhdGUuY291bnRlcnMsXG59KSlcbkBSYWRpdW1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICBsZXQge2Rpc3BhdGNofSA9IHRoaXMucHJvcHM7XG4gICAgZGlzcGF0Y2goY291bnRlckFjdGlvbnMuaW5jcmVhc2VDb3VudGVyKCkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtjb3VudGVyc30gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgIDxIZWFkbGluZT5TYW1wbGUgQXBwITwvSGVhZGxpbmU+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtbc3R5bGVzLmJ1dHRvbl19IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+SU5DUkVBU0U8L2Rpdj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtbc3R5bGVzLmNvdW50ZXJdfT57Y291bnRlcnMuY2xpY2tzfTwvcD5cbiAgICAgICAgICAgIDxwPntwcm9jZXNzLmVudi5CQVNFX0FQSV9VUkx9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3RlbXBsYXRlcy9jb250cm9sbGVyL2hvbWUvY29udGFpbmVycy9QYWdlSGVhZGVyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

});