(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["RDropdown"] = factory(require("react"), require("react-dom"));
	else
		root["RDropdown"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _renderinbody = __webpack_require__(6);

	var _renderinbody2 = _interopRequireDefault(_renderinbody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RDropdown = function (_Component) {
	    _inherits(RDropdown, _Component);

	    function RDropdown(props) {
	        _classCallCheck(this, RDropdown);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RDropdown).call(this, props));

	        _this.displayName = 'RDropdown';

	        _this.state = {
	            searchValue: null,
	            filteredOptions: null,
	            options: props.options,
	            isLoading: true,
	            focusedOption: null,
	            focusedIndex: 0,
	            preselectedOptions: []
	        };

	        _this.handleSearch = _this.handleSearch.bind(_this);
	        _this.handleOptionSelected = _this.handleOptionSelected.bind(_this);
	        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	        _this.handleClickOutside = _this.handleClickOutside.bind(_this);
	        _this.handleApply = _this.handleApply.bind(_this);
	        _this.handleError = _this.handleError.bind(_this);
	        _this.handleError = _this.handleError.bind(_this);

	        _this.setSearchValue = _this.setSearchValue.bind(_this);
	        _this.setOptions = _this.setOptions.bind(_this);
	        return _this;
	    }

	    _createClass(RDropdown, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var options = this.props.options;
	            if ('function' === typeof options.then) {
	                options.then(this.setOptions).catch(this.handleError);
	            } else {
	                this.setOptions(options);
	            }
	            document.addEventListener('click', this.handleClickOutside, true);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener('click', this.handleClickOutside, true);
	        }
	    }, {
	        key: 'handleClickOutside',
	        value: function handleClickOutside(e) {
	            var domNode = this.refs.dropdownMenu;
	            if (domNode && !domNode.contains(e.target)) {
	                this.props.onClose();
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            var _refs = this.refs;
	            var searchInput = _refs.searchInput;
	            var dropdownMenu = _refs.dropdownMenu;

	            if (searchInput) {
	                searchInput.focus();
	            } else {
	                dropdownMenu.focus();
	            }
	        }
	    }, {
	        key: 'setFilteredOptions',
	        value: function setFilteredOptions(options) {
	            this.setState({ filteredOptions: options, isLoading: false });
	        }
	    }, {
	        key: 'getOptions',
	        value: function getOptions() {
	            var _state = this.state;
	            var filteredOptions = _state.filteredOptions;
	            var options = _state.options;

	            return filteredOptions || options;
	        }
	    }, {
	        key: 'intialisePreselectedOptions',
	        value: function intialisePreselectedOptions() {
	            var selectedOptions = this.props.selectedOptions;

	            if (selectedOptions) {
	                if (Array.isArray(selectedOptions)) {
	                    this.setPreselectedOptions(selectedOptions);
	                } else {
	                    this.setPreselectedOptions([selectedOptions]);
	                }
	            } else {
	                this.setPreselectedOptions([]);
	            }
	        }
	    }, {
	        key: 'setPreselectedOptions',
	        value: function setPreselectedOptions(options) {
	            var _this2 = this;

	            var preselectedOptions = options.slice(0);
	            this.setState({
	                preselectedOptions: preselectedOptions
	            }, function () {
	                if (preselectedOptions.length > 0) {
	                    _this2.setFocusedOption(_this2.getIndexForOption(preselectedOptions[0]));
	                } else {
	                    _this2.setFocusedOption(0);
	                }
	            });
	        }
	    }, {
	        key: 'setOptions',
	        value: function setOptions(options) {
	            var _this3 = this;

	            this.setState({ options: options, isLoading: false }, function () {
	                _this3.intialisePreselectedOptions();
	            });
	        }
	    }, {
	        key: 'getIndexForOption',
	        value: function getIndexForOption(option) {
	            var options = this.getOptions();
	            if (options) {
	                var index = _lodash2.default.findIndex(options, option);
	                if (index > -1) {
	                    return index;
	                }
	            }
	            return 0;
	        }
	    }, {
	        key: 'getIndexForPreselectedOption',
	        value: function getIndexForPreselectedOption(option) {
	            var options = this.getPreselectedOptions();
	            if (options) {
	                var index = _lodash2.default.findIndex(options, option);
	                if (index > -1) {
	                    return index;
	                }
	            }
	            return -1;
	        }
	    }, {
	        key: 'setSearchValue',
	        value: function setSearchValue(value) {
	            this.setState({ searchValue: value });
	        }
	    }, {
	        key: 'setFocusedOption',
	        value: function setFocusedOption(index) {
	            var options = this.getOptions();
	            if (options.length > 0) {
	                this.setState({ focusedOption: options[index], focusedIndex: index });
	                this.scrollToFocusedOption(index);
	            }
	        }
	    }, {
	        key: 'scrollToFocusedOption',
	        value: function scrollToFocusedOption(index) {
	            var focusedOptionDom = this.refs['option_' + index];
	            var listDom = this.refs.list;
	            var focusedOptionDomRectangle = focusedOptionDom.getBoundingClientRect();
	            var listDomRectangle = listDom.getBoundingClientRect();
	            if (focusedOptionDomRectangle.bottom > listDomRectangle.bottom || focusedOptionDomRectangle.top < listDomRectangle.top) {
	                listDom.scrollTop = focusedOptionDom.offsetTop + focusedOptionDom.clientHeight - listDom.offsetHeight;
	            }
	        }
	    }, {
	        key: 'focusOption',
	        value: function focusOption(direction, options) {
	            var focusedIndex = this.state.focusedIndex;
	            if (direction > 0) {
	                // Next option...
	                this.setFocusedOption(Math.min(options.length - 1, focusedIndex + 1));
	            } else {
	                // Previous option...
	                this.setFocusedOption(Math.max(0, focusedIndex - 1));
	            }
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(err) {
	            console.error('An error occurred', err);
	            this.setState({
	                errorOccurred: true
	            });
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose() {
	            this.props.onClose();
	        }
	    }, {
	        key: 'handleError',
	        value: function handleError(err) {
	            this.setState({
	                errorOccurred: true
	            });
	        }
	    }, {
	        key: 'handleSearch',
	        value: function handleSearch(event) {
	            var _this4 = this;

	            //Only starts searching after user has stopped typing
	            if (this.searchTimer) {
	                clearTimeout(this.searchTimer);
	            }

	            var value = event.target.value;
	            this.setSearchValue(value);

	            this.searchTimer = setTimeout(function () {
	                _this4.searchTimer = null;

	                if (value) {
	                    var options = _this4.state.options;
	                    var filteredOptions = _this4.props.onSearch(value, options);

	                    if ('function' === typeof filteredOptions.then) {
	                        _this4.setState({ isLoading: true });
	                        filteredOptions.then(_this4.setFilteredOptions.bind(_this4)).catch(_this4.handleError);
	                    } else {
	                        _this4.setFilteredOptions(filteredOptions);
	                        _this4.setFocusedOption(0, filteredOptions);
	                    }

	                    return;
	                }
	                _this4.setFilteredOptions(null);
	                _this4.setFocusedOption(0, _this4.state.options);
	            }, 500);
	        }
	    }, {
	        key: 'isMultiple',
	        value: function isMultiple() {
	            return this.props.multiple;
	        }
	    }, {
	        key: 'handleApply',
	        value: function handleApply() {
	            this.props.onSelectedOptions(this.getSelectedOptions());
	        }
	    }, {
	        key: 'getSelectedOptions',
	        value: function getSelectedOptions() {
	            var preselectedOptions = this.getPreselectedOptions();
	            if (this.isMultiple()) {
	                return preselectedOptions;
	            } else {
	                return preselectedOptions.length === 0 ? null : preselectedOptions[0];
	            }
	        }
	    }, {
	        key: 'getPreselectedOptions',
	        value: function getPreselectedOptions() {
	            return this.state.preselectedOptions;
	        }
	    }, {
	        key: 'resetPreselectedOptions',
	        value: function resetPreselectedOptions() {
	            this.setState({
	                preselectedOptions: []
	            });
	        }
	    }, {
	        key: 'addPreselectedOption',
	        value: function addPreselectedOption(option) {
	            // if multiple is not set then only one option can be selected...
	            if (this.getPreselectedOptions().length > 0 && !this.isMultiple()) {
	                this.resetPreselectedOptions();
	            }
	            if (!this.isSelectedOption(option)) {
	                this.setState(function (state) {
	                    return {
	                        preselectedOptions: state.preselectedOptions.concat(option)
	                    };
	                });
	            }
	        }
	    }, {
	        key: 'removePreselectedOption',
	        value: function removePreselectedOption(option) {
	            this.setState(function (state) {
	                return {
	                    preselectedOptions: state.preselectedOptions.filter(function (x) {
	                        return x !== option;
	                    })
	                };
	            });
	        }
	    }, {
	        key: 'handleOptionSelected',
	        value: function handleOptionSelected(option) {
	            var _this5 = this;

	            var applyOptions = this.props.applyOptions;
	            // move this out into a separate function...

	            var index = this.getIndexForPreselectedOption(option);
	            if (index > -1) {
	                this.removePreselectedOption(option);
	            } else {
	                this.addPreselectedOption(option);
	            }
	            if (!applyOptions) {
	                this.setState({}, function () {
	                    _this5.props.onSelectedOptions(_this5.getSelectedOptions());
	                });
	            }
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            var options = this.getOptions();
	            var isLoading = this.state.isLoading;

	            if (options.length > 0 && !isLoading) {
	                var keys = {
	                    DOWN: 40,
	                    UP: 38,
	                    ESCAPE: 27,
	                    ENTER: 13
	                };
	                switch (e.keyCode) {
	                    case keys.ENTER:
	                        this.handleOptionSelected(this.state.focusedOption);
	                        return;
	                    case keys.ESCAPE:
	                        if (this.props.enableEsc) {
	                            this.handleClose();
	                        }
	                        return;
	                    case keys.DOWN:
	                        this.focusOption(1, options);
	                        e.preventDefault();
	                        return;
	                    case keys.UP:
	                        this.focusOption(-1, options);
	                        e.preventDefault();
	                        return;
	                }
	            }
	        }
	    }, {
	        key: 'renderSearch',
	        value: function renderSearch() {
	            var searchable = this.props.searchable;

	            if (searchable) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-filter' },
	                    _react2.default.createElement('input', { autoFocus: true, ref: 'searchInput', type: 'search', onChange: this.handleSearch, value: this.state.searchValue || '', placeholder: this.props.searchPlaceholder })
	                );
	            }
	        }
	    }, {
	        key: 'renderApply',
	        value: function renderApply() {
	            var _props = this.props;
	            var applyOptions = _props.applyOptions;
	            var applyOptionsText = _props.applyOptionsText;
	            var isLoading = this.state.isLoading;

	            if (!isLoading && applyOptions) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-apply' },
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: this.handleApply, className: 'dropdown-menu-apply-btn' },
	                        applyOptionsText
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'isSelectedOption',
	        value: function isSelectedOption(option) {
	            var preselectedOptions = this.state.preselectedOptions;

	            if (_lodash2.default.find(preselectedOptions, option)) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: 'isFocusedOption',
	        value: function isFocusedOption(option) {
	            var focusedOption = this.state.focusedOption;

	            if (focusedOption) {
	                return focusedOption === option;
	            }
	            return false;
	        }
	    }, {
	        key: 'buildClassNamesForOption',
	        value: function buildClassNamesForOption(option) {
	            var selectedClasses = "dropdown-menu-list-option dropdown-menu-list-option-selected";
	            var normalClass = "dropdown-menu-list-option";
	            var focusedClasses = "dropdown-menu-list-option dropdown-menu-list-option-focused";
	            if (this.isSelectedOption(option)) {
	                return selectedClasses;
	            } else if (this.isFocusedOption(option) && !this.isSelectedOption(option)) {
	                return focusedClasses;
	            }
	            return normalClass;
	        }
	    }, {
	        key: 'renderOptions',
	        value: function renderOptions() {
	            var _this6 = this;

	            var height = this.props.height;

	            var styles = {
	                maxHeight: this.props.height
	            };
	            var options = this.getOptions();
	            if (options.length === 0) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-no-results' },
	                    this.props.noResultsText
	                );
	            }
	            var renderedOptions = options.map(function (option, index) {
	                return _react2.default.createElement(
	                    'a',
	                    { key: index,
	                        className: _this6.buildClassNamesForOption(option),
	                        ref: 'option_' + index,
	                        onClick: _this6.handleOptionSelected.bind(_this6, option) },
	                    _this6.props.renderOption(option)
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { style: styles, className: 'dropdown-menu-list', ref: 'list' },
	                renderedOptions
	            );
	        }
	    }, {
	        key: 'renderList',
	        value: function renderList() {
	            var _state2 = this.state;
	            var errorOccurred = _state2.errorOccurred;
	            var isLoading = _state2.isLoading;
	            var errorText = this.props.errorText;

	            if (errorOccurred) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-no-results' },
	                    errorText
	                );
	            }
	            if (isLoading) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-loading' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'loading-spinner-grid' },
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner1' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner2' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner3' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner4' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner5' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner6' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner7' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner8' }),
	                        _react2.default.createElement('div', { className: 'loading-spinner loading-spinner9' })
	                    )
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'dropdown-menu-filters' },
	                this.renderSearch(),
	                this.renderOptions()
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props2 = this.props;
	            var title = _props2.title;
	            var onClose = _props2.onClose;

	            return _react2.default.createElement(
	                _renderinbody2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { tabIndex: 0, className: 'rdropdown-menu', ref: 'dropdownMenu', onKeyDown: this.handleKeyDown },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'dropdown-menu-header' },
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'dropdown-menu-close', onClick: onClose },
	                            '×'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'dropdown-menu-title' },
	                            title
	                        )
	                    ),
	                    this.renderList(),
	                    this.renderApply()
	                )
	            );
	        }
	    }]);

	    return RDropdown;
	}(_react.Component);

	RDropdown.propTypes = {
	    renderOption: _react.PropTypes.func.isRequired,
	    onSelectedOptions: _react.PropTypes.func.isRequired,
	    selectedOptions: _react.PropTypes.any,
	    onClose: _react.PropTypes.func.isRequired,
	    onSearch: _react.PropTypes.func,
	    multiple: _react.PropTypes.bool,
	    title: _react.PropTypes.string,
	    searchable: _react.PropTypes.bool,
	    searchPlaceholder: _react.PropTypes.string,
	    noResultsText: _react.PropTypes.string,
	    enableEsc: _react.PropTypes.bool,
	    errorText: _react.PropTypes.string,
	    applyOptions: _react.PropTypes.bool,
	    applyOptionsText: _react.PropTypes.string,
	    height: _react.PropTypes.number
	};
	RDropdown.defaultProps = {
	    searchable: false,
	    searchPlaceholder: 'Search...',
	    noResultsText: 'No results',
	    enableEsc: true,
	    errorText: 'An error occurred.',
	    applyOptionsText: 'Apply',
	    applyOptions: false,
	    selectedOptions: null,
	    multiple: false,
	    title: 'Filter',
	    height: 300
	};
	exports.default = RDropdown;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/**
	 * @license
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash include="find,findIndex" -d`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.14.1';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=( false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*//**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
	map.set(pair[0],pair[1]);return map;}/**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
	set.add(value);return set;}/**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */function arraySome(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */function baseUnary(func){return function(value){return func(value);};}/**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */function getValue(object,key){return object==null?undefined:object[key];}/**
	   * Checks if `value` is a host object in IE < 9.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	   */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
	// despite having improperly defined `toString` methods.
	var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
	   * Creates a function that invokes `func` with its first argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/*--------------------------------------------------------------------------*//** Used for built-in method references. */var arrayProto=Array.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
	   * Used to resolve the
	   * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	   * of values.
	   */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol=root.Symbol,Uint8Array=root.Uint8Array,objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetPrototype=Object.getPrototypeOf,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=Object.keys,nativeMax=Math.max;/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*//**
	   * Creates a `lodash` object which wraps `value` to enable implicit method
	   * chain sequences. Methods that operate on and return arrays, collections,
	   * and functions can be chained together. Methods that retrieve a single value
	   * or may return a primitive value will automatically end the chain sequence
	   * and return the unwrapped value. Otherwise, the value must be unwrapped
	   * with `_#value`.
	   *
	   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	   * enabled using `_.chain`.
	   *
	   * The execution of chained methods is lazy, that is, it's deferred until
	   * `_#value` is implicitly or explicitly called.
	   *
	   * Lazy evaluation allows several methods to support shortcut fusion.
	   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	   * the creation of intermediate arrays and can greatly reduce the number of
	   * iteratee executions. Sections of a chain sequence qualify for shortcut
	   * fusion if the section is applied to an array of at least `200` elements
	   * and any iteratees accept only one argument. The heuristic for whether a
	   * section qualifies for shortcut fusion is subject to change.
	   *
	   * Chaining is supported in custom builds as long as the `_#value` method is
	   * directly or indirectly included in the build.
	   *
	   * In addition to lodash methods, wrappers have `Array` and `String` methods.
	   *
	   * The wrapper `Array` methods are:
	   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	   *
	   * The wrapper `String` methods are:
	   * `replace` and `split`
	   *
	   * The wrapper methods that support shortcut fusion are:
	   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	   *
	   * The chainable wrapper methods are:
	   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	   * `zipObject`, `zipObjectDeep`, and `zipWith`
	   *
	   * The wrapper methods that are **not** chainable by default are:
	   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	   * `upperFirst`, `value`, and `words`
	   *
	   * @name _
	   * @constructor
	   * @category Seq
	   * @param {*} value The value to wrap in a `lodash` instance.
	   * @returns {Object} Returns the new `lodash` wrapper instance.
	   * @example
	   *
	   * function square(n) {
	   *   return n * n;
	   * }
	   *
	   * var wrapped = _([1, 2, 3]);
	   *
	   * // Returns an unwrapped value.
	   * wrapped.reduce(_.add);
	   * // => 6
	   *
	   * // Returns a wrapped value.
	   * var squares = wrapped.map(square);
	   *
	   * _.isArray(squares);
	   * // => false
	   *
	   * _.isArray(squares.value());
	   * // => true
	   */function lodash(){}// No operation performed.
	/*------------------------------------------------------------------------*//**
	   * Creates a hash object.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	   * Removes all key-value entries from the hash.
	   *
	   * @private
	   * @name clear
	   * @memberOf Hash
	   */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
	   * Removes `key` and its value from the hash.
	   *
	   * @private
	   * @name delete
	   * @memberOf Hash
	   * @param {Object} hash The hash to modify.
	   * @param {string} key The key of the value to remove.
	   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	   */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
	   * Gets the hash value for `key`.
	   *
	   * @private
	   * @name get
	   * @memberOf Hash
	   * @param {string} key The key of the value to get.
	   * @returns {*} Returns the entry value.
	   */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
	   * Checks if a hash value for `key` exists.
	   *
	   * @private
	   * @name has
	   * @memberOf Hash
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
	   * Sets the hash `key` to `value`.
	   *
	   * @private
	   * @name set
	   * @memberOf Hash
	   * @param {string} key The key of the value to set.
	   * @param {*} value The value to set.
	   * @returns {Object} Returns the hash instance.
	   */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
	Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*//**
	   * Creates an list cache object.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	   * Removes all key-value entries from the list cache.
	   *
	   * @private
	   * @name clear
	   * @memberOf ListCache
	   */function listCacheClear(){this.__data__=[];}/**
	   * Removes `key` and its value from the list cache.
	   *
	   * @private
	   * @name delete
	   * @memberOf ListCache
	   * @param {string} key The key of the value to remove.
	   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	   */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
	   * Gets the list cache value for `key`.
	   *
	   * @private
	   * @name get
	   * @memberOf ListCache
	   * @param {string} key The key of the value to get.
	   * @returns {*} Returns the entry value.
	   */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
	   * Checks if a list cache value for `key` exists.
	   *
	   * @private
	   * @name has
	   * @memberOf ListCache
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
	   * Sets the list cache `key` to `value`.
	   *
	   * @private
	   * @name set
	   * @memberOf ListCache
	   * @param {string} key The key of the value to set.
	   * @param {*} value The value to set.
	   * @returns {Object} Returns the list cache instance.
	   */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
	ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*//**
	   * Creates a map cache object to store key-value pairs.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	   * Removes all key-value entries from the map.
	   *
	   * @private
	   * @name clear
	   * @memberOf MapCache
	   */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
	   * Removes `key` and its value from the map.
	   *
	   * @private
	   * @name delete
	   * @memberOf MapCache
	   * @param {string} key The key of the value to remove.
	   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	   */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
	   * Gets the map value for `key`.
	   *
	   * @private
	   * @name get
	   * @memberOf MapCache
	   * @param {string} key The key of the value to get.
	   * @returns {*} Returns the entry value.
	   */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
	   * Checks if a map value for `key` exists.
	   *
	   * @private
	   * @name has
	   * @memberOf MapCache
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
	   * Sets the map `key` to `value`.
	   *
	   * @private
	   * @name set
	   * @memberOf MapCache
	   * @param {string} key The key of the value to set.
	   * @param {*} value The value to set.
	   * @returns {Object} Returns the map cache instance.
	   */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
	MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*//**
	   *
	   * Creates an array cache object to store unique values.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [values] The values to cache.
	   */function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
	   * Adds `value` to the array cache.
	   *
	   * @private
	   * @name add
	   * @memberOf SetCache
	   * @alias push
	   * @param {*} value The value to cache.
	   * @returns {Object} Returns the cache instance.
	   */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
	   * Checks if `value` is in the array cache.
	   *
	   * @private
	   * @name has
	   * @memberOf SetCache
	   * @param {*} value The value to search for.
	   * @returns {number} Returns `true` if `value` is found, else `false`.
	   */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
	SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*//**
	   * Creates a stack cache object to store key-value pairs.
	   *
	   * @private
	   * @constructor
	   * @param {Array} [entries] The key-value pairs to cache.
	   */function Stack(entries){this.__data__=new ListCache(entries);}/**
	   * Removes all key-value entries from the stack.
	   *
	   * @private
	   * @name clear
	   * @memberOf Stack
	   */function stackClear(){this.__data__=new ListCache();}/**
	   * Removes `key` and its value from the stack.
	   *
	   * @private
	   * @name delete
	   * @memberOf Stack
	   * @param {string} key The key of the value to remove.
	   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	   */function stackDelete(key){return this.__data__['delete'](key);}/**
	   * Gets the stack value for `key`.
	   *
	   * @private
	   * @name get
	   * @memberOf Stack
	   * @param {string} key The key of the value to get.
	   * @returns {*} Returns the entry value.
	   */function stackGet(key){return this.__data__.get(key);}/**
	   * Checks if a stack value for `key` exists.
	   *
	   * @private
	   * @name has
	   * @memberOf Stack
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function stackHas(key){return this.__data__.has(key);}/**
	   * Sets the stack `key` to `value`.
	   *
	   * @private
	   * @name set
	   * @memberOf Stack
	   * @param {string} key The key of the value to set.
	   * @param {*} value The value to set.
	   * @returns {Object} Returns the stack cache instance.
	   */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
	Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*//**
	   * Assigns `value` to `key` of `object` if the existing value is not equivalent
	   * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	   * for equality comparisons.
	   *
	   * @private
	   * @param {Object} object The object to modify.
	   * @param {string} key The key of the property to assign.
	   * @param {*} value The value to assign.
	   */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
	   * Gets the index at which the `key` is found in `array` of key-value pairs.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} key The key to search for.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
	   * The base implementation of `_.assign` without support for multiple sources
	   * or `customizer` functions.
	   *
	   * @private
	   * @param {Object} object The destination object.
	   * @param {Object} source The source object.
	   * @returns {Object} Returns `object`.
	   */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
	   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	   * traversed objects.
	   *
	   * @private
	   * @param {*} value The value to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @param {boolean} [isFull] Specify a clone including symbols.
	   * @param {Function} [customizer] The function to customize cloning.
	   * @param {string} [key] The key of `value`.
	   * @param {Object} [object] The parent object of `value`.
	   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	   * @returns {*} Returns the cloned value.
	   */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
	stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
	assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
	   * The base implementation of `_.create` without support for assigning
	   * properties to the created object.
	   *
	   * @private
	   * @param {Object} prototype The object to inherit from.
	   * @returns {Object} Returns the new object.
	   */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
	   * The base implementation of `_.get` without support for default values.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array|string} path The path of the property to get.
	   * @returns {*} Returns the resolved value.
	   */function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
	   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	   * symbols of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Function} keysFunc The function to get the keys of `object`.
	   * @param {Function} symbolsFunc The function to get the symbols of `object`.
	   * @returns {Array} Returns the array of property names and symbols.
	   */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
	   * The base implementation of `getTag`.
	   *
	   * @private
	   * @param {*} value The value to query.
	   * @returns {string} Returns the `toStringTag`.
	   */function baseGetTag(value){return objectToString.call(value);}/**
	   * The base implementation of `_.has` without support for deep paths.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {Array|string} key The key to check.
	   * @returns {boolean} Returns `true` if `key` exists, else `false`.
	   */function baseHas(object,key){// Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	// that are composed entirely of index properties, return `false` for
	// `hasOwnProperty` checks of them.
	return object!=null&&(hasOwnProperty.call(object,key)||(typeof object==='undefined'?'undefined':_typeof(object))=='object'&&key in object&&getPrototype(object)===null);}/**
	   * The base implementation of `_.hasIn` without support for deep paths.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {Array|string} key The key to check.
	   * @returns {boolean} Returns `true` if `key` exists, else `false`.
	   */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
	   * The base implementation of `_.isEqual` which supports partial comparisons
	   * and tracks traversed objects.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @param {Function} [customizer] The function to customize comparisons.
	   * @param {boolean} [bitmask] The bitmask of comparison flags.
	   *  The bitmask may be composed of the following flags:
	   *     1 - Unordered comparison
	   *     2 - Partial comparison
	   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   */function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}/**
	   * A specialized version of `baseIsEqual` for arrays and objects which performs
	   * deep comparisons and tracks traversed objects enabling objects with circular
	   * references to be compared.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} [customizer] The function to customize comparisons.
	   * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	   *  for more details.
	   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}var objIsObj=objTag==objectTag&&!isHostObject(object),othIsObj=othTag==objectTag&&!isHostObject(other),isSameTag=objTag==othTag;if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}/**
	   * The base implementation of `_.isMatch` without support for iteratee shorthands.
	   *
	   * @private
	   * @param {Object} object The object to inspect.
	   * @param {Object} source The object of property values to match.
	   * @param {Array} matchData The property names, values, and compare flags to match.
	   * @param {Function} [customizer] The function to customize comparisons.
	   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	   */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}return true;}/**
	   * The base implementation of `_.isNative` without bad shim checks.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a native function,
	   *  else `false`.
	   */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
	   * The base implementation of `_.isTypedArray` without Node.js optimizations.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	   */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}/**
	   * The base implementation of `_.iteratee`.
	   *
	   * @private
	   * @param {*} [value=_.identity] The value to convert to an iteratee.
	   * @returns {Function} Returns the iteratee.
	   */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
	   * The base implementation of `_.keys` which doesn't skip the constructor
	   * property of prototypes or treat sparse arrays as dense.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names.
	   */var baseKeys=overArg(nativeKeys,Object);/**
	   * The base implementation of `_.matches` which doesn't clone `source`.
	   *
	   * @private
	   * @param {Object} source The object of property values to match.
	   * @returns {Function} Returns the new spec function.
	   */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
	   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	   *
	   * @private
	   * @param {string} path The path of the property to get.
	   * @param {*} srcValue The value to match.
	   * @returns {Function} Returns the new spec function.
	   */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}/**
	   * A specialized version of `baseProperty` which supports deep paths.
	   *
	   * @private
	   * @param {Array|string} path The path of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
	   * The base implementation of `_.toString` which doesn't convert nullish
	   * values to empty strings.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
	if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	   * Casts `value` to a path array if it's not one.
	   *
	   * @private
	   * @param {*} value The value to inspect.
	   * @returns {Array} Returns the cast property path array.
	   */function castPath(value){return isArray(value)?value:stringToPath(value);}/**
	   * Creates a clone of  `buffer`.
	   *
	   * @private
	   * @param {Buffer} buffer The buffer to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Buffer} Returns the cloned buffer.
	   */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
	   * Creates a clone of `arrayBuffer`.
	   *
	   * @private
	   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	   * @returns {ArrayBuffer} Returns the cloned array buffer.
	   */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
	   * Creates a clone of `dataView`.
	   *
	   * @private
	   * @param {Object} dataView The data view to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Object} Returns the cloned data view.
	   */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
	   * Creates a clone of `map`.
	   *
	   * @private
	   * @param {Object} map The map to clone.
	   * @param {Function} cloneFunc The function to clone values.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Object} Returns the cloned map.
	   */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
	   * Creates a clone of `regexp`.
	   *
	   * @private
	   * @param {Object} regexp The regexp to clone.
	   * @returns {Object} Returns the cloned regexp.
	   */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
	   * Creates a clone of `set`.
	   *
	   * @private
	   * @param {Object} set The set to clone.
	   * @param {Function} cloneFunc The function to clone values.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Object} Returns the cloned set.
	   */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
	   * Creates a clone of the `symbol` object.
	   *
	   * @private
	   * @param {Object} symbol The symbol object to clone.
	   * @returns {Object} Returns the cloned symbol object.
	   */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
	   * Creates a clone of `typedArray`.
	   *
	   * @private
	   * @param {Object} typedArray The typed array to clone.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Object} Returns the cloned typed array.
	   */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
	   * Copies the values of `source` to `array`.
	   *
	   * @private
	   * @param {Array} source The array to copy values from.
	   * @param {Array} [array=[]] The array to copy values to.
	   * @returns {Array} Returns `array`.
	   */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
	   * Copies properties of `source` to `object`.
	   *
	   * @private
	   * @param {Object} source The object to copy properties from.
	   * @param {Array} props The property identifiers to copy.
	   * @param {Object} [object={}] The object to copy properties to.
	   * @param {Function} [customizer] The function to customize copied values.
	   * @returns {Object} Returns `object`.
	   */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
	   * Copies own symbol properties of `source` to `object`.
	   *
	   * @private
	   * @param {Object} source The object to copy symbols from.
	   * @param {Object} [object={}] The object to copy symbols to.
	   * @returns {Object} Returns `object`.
	   */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
	   * Creates a `_.find` or `_.findLast` function.
	   *
	   * @private
	   * @param {Function} findIndexFunc The function to find the collection index.
	   * @returns {Function} Returns the new find function.
	   */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
	   * A specialized version of `baseIsEqualDeep` for arrays with support for
	   * partial deep comparisons.
	   *
	   * @private
	   * @param {Array} array The array to compare.
	   * @param {Array} other The other array to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	   *  for more details.
	   * @param {Object} stack Tracks traversed `array` and `other` objects.
	   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	   */function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&UNORDERED_COMPARE_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
	while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
	if(seen){if(!arraySome(other,function(othValue,othIndex){if(!seen.has(othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){return seen.add(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
	   * A specialized version of `baseIsEqualDeep` for comparing objects of
	   * the same `toStringTag`.
	   *
	   * **Note:** This function only supports comparing values with tags of
	   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {string} tag The `toStringTag` of the objects to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	   *  for more details.
	   * @param {Object} stack Tracks traversed `object` and `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
	// Invalid dates are coerced to `NaN`.
	return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
	// as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	// for more details.
	return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=UNORDERED_COMPARE_FLAG;// Recursively compare objects (susceptible to call stack limits).
	stack.set(object,other);var result=equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
	   * A specialized version of `baseIsEqualDeep` for objects with support for
	   * partial deep comparisons.
	   *
	   * @private
	   * @param {Object} object The object to compare.
	   * @param {Object} other The other object to compare.
	   * @param {Function} equalFunc The function to determine equivalents of values.
	   * @param {Function} customizer The function to customize comparisons.
	   * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	   *  for more details.
	   * @param {Object} stack Tracks traversed `object` and `other` objects.
	   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	   */function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:baseHas(other,key))){return false;}}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
	if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
	if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
	   * Creates an array of own enumerable property names and symbols of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names and symbols.
	   */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
	   * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	   * this function returns the custom method, otherwise it returns `baseIteratee`.
	   * If arguments are provided, the chosen function is invoked with them and
	   * its result is returned.
	   *
	   * @private
	   * @param {*} [value] The value to convert to an iteratee.
	   * @param {number} [arity] The arity of the created iteratee.
	   * @returns {Function} Returns the chosen function or its result.
	   */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
	   * Gets the "length" property value of `object`.
	   *
	   * **Note:** This function is used to avoid a
	   * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	   * Safari on at least iOS 8.1-8.3 ARM64.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {*} Returns the "length" value.
	   */var getLength=baseProperty('length');/**
	   * Gets the data for `map`.
	   *
	   * @private
	   * @param {Object} map The map to query.
	   * @param {string} key The reference key.
	   * @returns {*} Returns the map data.
	   */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
	   * Gets the property names, values, and compare flags of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the match data of `object`.
	   */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
	   * Gets the native function at `key` of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {string} key The key of the method to get.
	   * @returns {*} Returns the function if it's native, else `undefined`.
	   */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
	   * Gets the `[[Prototype]]` of `value`.
	   *
	   * @private
	   * @param {*} value The value to query.
	   * @returns {null|Object} Returns the `[[Prototype]]`.
	   */var getPrototype=overArg(nativeGetPrototype,Object);/**
	   * Creates an array of the own enumerable symbol properties of `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of symbols.
	   */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
	   * Gets the `toStringTag` of `value`.
	   *
	   * @private
	   * @param {*} value The value to query.
	   * @returns {string} Returns the `toStringTag`.
	   */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
	   * Checks if `path` exists on `object`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array|string} path The path to check.
	   * @param {Function} hasFunc The function to check properties.
	   * @returns {boolean} Returns `true` if `path` exists, else `false`.
	   */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result){return result;}var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isString(object)||isArguments(object));}/**
	   * Initializes an array clone.
	   *
	   * @private
	   * @param {Array} array The array to clone.
	   * @returns {Array} Returns the initialized clone.
	   */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
	if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
	   * Initializes an object clone.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @returns {Object} Returns the initialized clone.
	   */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
	   * Initializes an object clone based on its `toStringTag`.
	   *
	   * **Note:** This function only supports cloning values with tags of
	   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	   *
	   * @private
	   * @param {Object} object The object to clone.
	   * @param {string} tag The `toStringTag` of the object to clone.
	   * @param {Function} cloneFunc The function to clone values.
	   * @param {boolean} [isDeep] Specify a deep clone.
	   * @returns {Object} Returns the initialized clone.
	   */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
	   * Creates an array of index keys for `object` values of arrays,
	   * `arguments` objects, and strings, otherwise `null` is returned.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Array|null} Returns index keys, else `null`.
	   */function indexKeys(object){var length=object?object.length:undefined;if(isLength(length)&&(isArray(object)||isString(object)||isArguments(object))){return baseTimes(length,String);}return null;}/**
	   * Checks if `value` is a valid array-like index.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	   */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
	   * Checks if `value` is a property name and not a property path.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @param {Object} [object] The object to query keys on.
	   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	   */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
	   * Checks if `value` is suitable for use as unique object key.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	   */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
	   * Checks if `func` has its source masked.
	   *
	   * @private
	   * @param {Function} func The function to check.
	   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	   */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
	   * Checks if `value` is likely a prototype object.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	   */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
	   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` if suitable for strict
	   *  equality comparisons, else `false`.
	   */function isStrictComparable(value){return value===value&&!isObject(value);}/**
	   * A specialized version of `matchesProperty` for source values suitable
	   * for strict equality comparisons, i.e. `===`.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @param {*} srcValue The value to match.
	   * @returns {Function} Returns the new spec function.
	   */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
	   * Converts `string` to a property path array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the property path array.
	   */var stringToPath=memoize(function(string){string=toString(string);var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
	   * Converts `value` to a string key if it's not a string or symbol.
	   *
	   * @private
	   * @param {*} value The value to inspect.
	   * @returns {string|symbol} Returns the key.
	   */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	   * Converts `func` to its source code.
	   *
	   * @private
	   * @param {Function} func The function to process.
	   * @returns {string} Returns the source code.
	   */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/*------------------------------------------------------------------------*//**
	   * This method is like `_.find` except that it returns the index of the first
	   * element `predicate` returns truthy for instead of the element itself.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Array
	   * @param {Array} array The array to search.
	   * @param {Function} [predicate=_.identity]
	   *  The function invoked per iteration.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {number} Returns the index of the found element, else `-1`.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney',  'active': false },
	   *   { 'user': 'fred',    'active': false },
	   *   { 'user': 'pebbles', 'active': true }
	   * ];
	   *
	   * _.findIndex(users, function(o) { return o.user == 'barney'; });
	   * // => 0
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.findIndex(users, { 'user': 'fred', 'active': false });
	   * // => 1
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.findIndex(users, ['active', false]);
	   * // => 0
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.findIndex(users, 'active');
	   * // => 2
	   */function findIndex(array,predicate,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/*------------------------------------------------------------------------*//**
	   * Iterates over elements of `collection`, returning the first element
	   * `predicate` returns truthy for. The predicate is invoked with three
	   * arguments: (value, index|key, collection).
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Collection
	   * @param {Array|Object} collection The collection to search.
	   * @param {Function} [predicate=_.identity]
	   *  The function invoked per iteration.
	   * @param {number} [fromIndex=0] The index to search from.
	   * @returns {*} Returns the matched element, else `undefined`.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney',  'age': 36, 'active': true },
	   *   { 'user': 'fred',    'age': 40, 'active': false },
	   *   { 'user': 'pebbles', 'age': 1,  'active': true }
	   * ];
	   *
	   * _.find(users, function(o) { return o.age < 40; });
	   * // => object for 'barney'
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.find(users, { 'age': 1, 'active': true });
	   * // => object for 'pebbles'
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.find(users, ['active', false]);
	   * // => object for 'fred'
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.find(users, 'active');
	   * // => object for 'barney'
	   */var find=createFind(findIndex);/*------------------------------------------------------------------------*//**
	   * Creates a function that memoizes the result of `func`. If `resolver` is
	   * provided, it determines the cache key for storing the result based on the
	   * arguments provided to the memoized function. By default, the first argument
	   * provided to the memoized function is used as the map cache key. The `func`
	   * is invoked with the `this` binding of the memoized function.
	   *
	   * **Note:** The cache is exposed as the `cache` property on the memoized
	   * function. Its creation may be customized by replacing the `_.memoize.Cache`
	   * constructor with one whose instances implement the
	   * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	   * method interface of `delete`, `get`, `has`, and `set`.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Function
	   * @param {Function} func The function to have its output memoized.
	   * @param {Function} [resolver] The function to resolve the cache key.
	   * @returns {Function} Returns the new memoized function.
	   * @example
	   *
	   * var object = { 'a': 1, 'b': 2 };
	   * var other = { 'c': 3, 'd': 4 };
	   *
	   * var values = _.memoize(_.values);
	   * values(object);
	   * // => [1, 2]
	   *
	   * values(other);
	   * // => [3, 4]
	   *
	   * object.a = 2;
	   * values(object);
	   * // => [1, 2]
	   *
	   * // Modify the result cache.
	   * values.cache.set(object, ['a', 'b']);
	   * values(object);
	   * // => ['a', 'b']
	   *
	   * // Replace `_.memoize.Cache`.
	   * _.memoize.Cache = WeakMap;
	   */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
	memoize.Cache=MapCache;/*------------------------------------------------------------------------*//**
	   * Performs a
	   * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	   * comparison between two values to determine if they are equivalent.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	   * @example
	   *
	   * var object = { 'a': 1 };
	   * var other = { 'a': 1 };
	   *
	   * _.eq(object, object);
	   * // => true
	   *
	   * _.eq(object, other);
	   * // => false
	   *
	   * _.eq('a', 'a');
	   * // => true
	   *
	   * _.eq('a', Object('a'));
	   * // => false
	   *
	   * _.eq(NaN, NaN);
	   * // => true
	   */function eq(value,other){return value===other||value!==value&&other!==other;}/**
	   * Checks if `value` is likely an `arguments` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	   *  else `false`.
	   * @example
	   *
	   * _.isArguments(function() { return arguments; }());
	   * // => true
	   *
	   * _.isArguments([1, 2, 3]);
	   * // => false
	   */function isArguments(value){// Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
	   * Checks if `value` is classified as an `Array` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	   * @example
	   *
	   * _.isArray([1, 2, 3]);
	   * // => true
	   *
	   * _.isArray(document.body.children);
	   * // => false
	   *
	   * _.isArray('abc');
	   * // => false
	   *
	   * _.isArray(_.noop);
	   * // => false
	   */var isArray=Array.isArray;/**
	   * Checks if `value` is array-like. A value is considered array-like if it's
	   * not a function and has a `value.length` that's an integer greater than or
	   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	   * @example
	   *
	   * _.isArrayLike([1, 2, 3]);
	   * // => true
	   *
	   * _.isArrayLike(document.body.children);
	   * // => true
	   *
	   * _.isArrayLike('abc');
	   * // => true
	   *
	   * _.isArrayLike(_.noop);
	   * // => false
	   */function isArrayLike(value){return value!=null&&isLength(getLength(value))&&!isFunction(value);}/**
	   * This method is like `_.isArrayLike` except that it also checks if `value`
	   * is an object.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an array-like object,
	   *  else `false`.
	   * @example
	   *
	   * _.isArrayLikeObject([1, 2, 3]);
	   * // => true
	   *
	   * _.isArrayLikeObject(document.body.children);
	   * // => true
	   *
	   * _.isArrayLikeObject('abc');
	   * // => false
	   *
	   * _.isArrayLikeObject(_.noop);
	   * // => false
	   */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
	   * Checks if `value` is a buffer.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.3.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	   * @example
	   *
	   * _.isBuffer(new Buffer(2));
	   * // => true
	   *
	   * _.isBuffer(new Uint8Array(2));
	   * // => false
	   */var isBuffer=nativeIsBuffer||stubFalse;/**
	   * Checks if `value` is classified as a `Function` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	   * @example
	   *
	   * _.isFunction(_);
	   * // => true
	   *
	   * _.isFunction(/abc/);
	   * // => false
	   */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
	// in Safari 8 which returns 'object' for typed array and weak map constructors,
	// and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
	   * Checks if `value` is a valid array-like length.
	   *
	   * **Note:** This function is loosely based on
	   * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a valid length,
	   *  else `false`.
	   * @example
	   *
	   * _.isLength(3);
	   * // => true
	   *
	   * _.isLength(Number.MIN_VALUE);
	   * // => false
	   *
	   * _.isLength(Infinity);
	   * // => false
	   *
	   * _.isLength('3');
	   * // => false
	   */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
	   * Checks if `value` is the
	   * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	   *
	   * @static
	   * @memberOf _
	   * @since 0.1.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	   * @example
	   *
	   * _.isObject({});
	   * // => true
	   *
	   * _.isObject([1, 2, 3]);
	   * // => true
	   *
	   * _.isObject(_.noop);
	   * // => true
	   *
	   * _.isObject(null);
	   * // => false
	   */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
	   * Checks if `value` is object-like. A value is object-like if it's not `null`
	   * and has a `typeof` result of "object".
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   * @example
	   *
	   * _.isObjectLike({});
	   * // => true
	   *
	   * _.isObjectLike([1, 2, 3]);
	   * // => true
	   *
	   * _.isObjectLike(_.noop);
	   * // => false
	   *
	   * _.isObjectLike(null);
	   * // => false
	   */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
	   * Checks if `value` is classified as a `String` primitive or object.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	   * @example
	   *
	   * _.isString('abc');
	   * // => true
	   *
	   * _.isString(1);
	   * // => false
	   */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}/**
	   * Checks if `value` is classified as a `Symbol` primitive or object.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	   * @example
	   *
	   * _.isSymbol(Symbol.iterator);
	   * // => true
	   *
	   * _.isSymbol('abc');
	   * // => false
	   */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
	   * Checks if `value` is classified as a typed array.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.0.0
	   * @category Lang
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	   * @example
	   *
	   * _.isTypedArray(new Uint8Array);
	   * // => true
	   *
	   * _.isTypedArray([]);
	   * // => false
	   */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
	   * Converts `value` to a finite number.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.12.0
	   * @category Lang
	   * @param {*} value The value to convert.
	   * @returns {number} Returns the converted number.
	   * @example
	   *
	   * _.toFinite(3.2);
	   * // => 3.2
	   *
	   * _.toFinite(Number.MIN_VALUE);
	   * // => 5e-324
	   *
	   * _.toFinite(Infinity);
	   * // => 1.7976931348623157e+308
	   *
	   * _.toFinite('3.2');
	   * // => 3.2
	   */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
	   * Converts `value` to an integer.
	   *
	   * **Note:** This method is loosely based on
	   * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to convert.
	   * @returns {number} Returns the converted integer.
	   * @example
	   *
	   * _.toInteger(3.2);
	   * // => 3
	   *
	   * _.toInteger(Number.MIN_VALUE);
	   * // => 0
	   *
	   * _.toInteger(Infinity);
	   * // => 1.7976931348623157e+308
	   *
	   * _.toInteger('3.2');
	   * // => 3
	   */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
	   * Converts `value` to a number.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to process.
	   * @returns {number} Returns the number.
	   * @example
	   *
	   * _.toNumber(3.2);
	   * // => 3.2
	   *
	   * _.toNumber(Number.MIN_VALUE);
	   * // => 5e-324
	   *
	   * _.toNumber(Infinity);
	   * // => Infinity
	   *
	   * _.toNumber('3.2');
	   * // => 3.2
	   */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=isFunction(value.valueOf)?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
	   * Converts `value` to a string. An empty string is returned for `null`
	   * and `undefined` values. The sign of `-0` is preserved.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Lang
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   * @example
	   *
	   * _.toString(null);
	   * // => ''
	   *
	   * _.toString(-0);
	   * // => '-0'
	   *
	   * _.toString([1, 2, 3]);
	   * // => '1,2,3'
	   */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*//**
	   * Gets the value at `path` of `object`. If the resolved value is
	   * `undefined`, the `defaultValue` is returned in its place.
	   *
	   * @static
	   * @memberOf _
	   * @since 3.7.0
	   * @category Object
	   * @param {Object} object The object to query.
	   * @param {Array|string} path The path of the property to get.
	   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	   * @returns {*} Returns the resolved value.
	   * @example
	   *
	   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	   *
	   * _.get(object, 'a[0].b.c');
	   * // => 3
	   *
	   * _.get(object, ['a', '0', 'b', 'c']);
	   * // => 3
	   *
	   * _.get(object, 'a.b.c', 'default');
	   * // => 'default'
	   */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
	   * Checks if `path` is a direct or inherited property of `object`.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.0.0
	   * @category Object
	   * @param {Object} object The object to query.
	   * @param {Array|string} path The path to check.
	   * @returns {boolean} Returns `true` if `path` exists, else `false`.
	   * @example
	   *
	   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	   *
	   * _.hasIn(object, 'a');
	   * // => true
	   *
	   * _.hasIn(object, 'a.b');
	   * // => true
	   *
	   * _.hasIn(object, ['a', 'b']);
	   * // => true
	   *
	   * _.hasIn(object, 'b');
	   * // => false
	   */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
	   * Creates an array of the own enumerable property names of `object`.
	   *
	   * **Note:** Non-object values are coerced to objects. See the
	   * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	   * for more details.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Object
	   * @param {Object} object The object to query.
	   * @returns {Array} Returns the array of property names.
	   * @example
	   *
	   * function Foo() {
	   *   this.a = 1;
	   *   this.b = 2;
	   * }
	   *
	   * Foo.prototype.c = 3;
	   *
	   * _.keys(new Foo);
	   * // => ['a', 'b'] (iteration order is not guaranteed)
	   *
	   * _.keys('hi');
	   * // => ['0', '1']
	   */function keys(object){var isProto=isPrototype(object);if(!(isProto||isArrayLike(object))){return baseKeys(object);}var indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;for(var key in object){if(baseHas(object,key)&&!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(isProto&&key=='constructor')){result.push(key);}}return result;}/*------------------------------------------------------------------------*//**
	   * This method returns the first argument it receives.
	   *
	   * @static
	   * @since 0.1.0
	   * @memberOf _
	   * @category Util
	   * @param {*} value Any value.
	   * @returns {*} Returns `value`.
	   * @example
	   *
	   * var object = { 'a': 1 };
	   *
	   * console.log(_.identity(object) === object);
	   * // => true
	   */function identity(value){return value;}/**
	   * Creates a function that invokes `func` with the arguments of the created
	   * function. If `func` is a property name, the created function returns the
	   * property value for a given element. If `func` is an array or object, the
	   * created function returns `true` for elements that contain the equivalent
	   * source properties, otherwise it returns `false`.
	   *
	   * @static
	   * @since 4.0.0
	   * @memberOf _
	   * @category Util
	   * @param {*} [func=_.identity] The value to convert to a callback.
	   * @returns {Function} Returns the callback.
	   * @example
	   *
	   * var users = [
	   *   { 'user': 'barney', 'age': 36, 'active': true },
	   *   { 'user': 'fred',   'age': 40, 'active': false }
	   * ];
	   *
	   * // The `_.matches` iteratee shorthand.
	   * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	   * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	   *
	   * // The `_.matchesProperty` iteratee shorthand.
	   * _.filter(users, _.iteratee(['user', 'fred']));
	   * // => [{ 'user': 'fred', 'age': 40 }]
	   *
	   * // The `_.property` iteratee shorthand.
	   * _.map(users, _.iteratee('user'));
	   * // => ['barney', 'fred']
	   *
	   * // Create custom iteratee shorthands.
	   * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	   *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	   *     return func.test(string);
	   *   };
	   * });
	   *
	   * _.filter(['abc', 'def'], /ef/);
	   * // => ['def']
	   */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,true));}/**
	   * Creates a function that returns the value at `path` of a given object.
	   *
	   * @static
	   * @memberOf _
	   * @since 2.4.0
	   * @category Util
	   * @param {Array|string} path The path of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   * @example
	   *
	   * var objects = [
	   *   { 'a': { 'b': 2 } },
	   *   { 'a': { 'b': 1 } }
	   * ];
	   *
	   * _.map(objects, _.property('a.b'));
	   * // => [2, 1]
	   *
	   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	   * // => [1, 2]
	   */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
	   * This method returns a new empty array.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.13.0
	   * @category Util
	   * @returns {Array} Returns the new empty array.
	   * @example
	   *
	   * var arrays = _.times(2, _.stubArray);
	   *
	   * console.log(arrays);
	   * // => [[], []]
	   *
	   * console.log(arrays[0] === arrays[1]);
	   * // => false
	   */function stubArray(){return[];}/**
	   * This method returns `false`.
	   *
	   * @static
	   * @memberOf _
	   * @since 4.13.0
	   * @category Util
	   * @returns {boolean} Returns `false`.
	   * @example
	   *
	   * _.times(2, _.stubFalse);
	   * // => [false, false]
	   */function stubFalse(){return false;}/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
	lodash.iteratee=iteratee;lodash.keys=keys;lodash.memoize=memoize;lodash.property=property;/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
	lodash.eq=eq;lodash.find=find;lodash.findIndex=findIndex;lodash.get=get;lodash.hasIn=hasIn;lodash.identity=identity;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBuffer=isBuffer;lodash.isFunction=isFunction;lodash.isLength=isLength;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toNumber=toNumber;lodash.toString=toString;/*------------------------------------------------------------------------*//**
	   * The semantic version number.
	   *
	   * @static
	   * @memberOf _
	   * @type {string}
	   */lodash.VERSION=VERSION;/*--------------------------------------------------------------------------*/// Some AMD build optimizers, like r.js, check for condition patterns like:
	if("function"=='function'&&_typeof(__webpack_require__(5))=='object'&&__webpack_require__(5)){// Expose Lodash on the global object to prevent errors when Lodash is
	// loaded by a script tag in the presence of an AMD loader.
	// See http://requirejs.org/docs/errors.html#mismatch for more details.
	// Use `_.noConflict` to remove Lodash from the global object.
	root._=lodash;// Define as an anonymous module so, through path mapping, it can be
	// referenced as the "underscore" module.
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return lodash;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}// Check for `exports` after `define` in case a build optimizer adds it.
	else if(freeModule){// Export for Node.js.
	(freeModule.exports=lodash)._=lodash;// Export for CommonJS support.
	freeExports._=lodash;}else{// Export to the global object.
	root._=lodash;}}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RenderInBody = function (_Component) {
	  _inherits(RenderInBody, _Component);

	  function RenderInBody() {
	    _classCallCheck(this, RenderInBody);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(RenderInBody).apply(this, arguments));
	  }

	  _createClass(RenderInBody, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var me = this.refs.me,
	          rect = me.parentNode.getBoundingClientRect(),
	          scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop,
	          scrollLeft = document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft;

	      this.popup = document.createElement('div');
	      this.popup.style.position = 'absolute';
	      this.popup.style.left = scrollLeft + rect.left + 'px';
	      this.popup.style.top = scrollTop + rect.top + rect.height + 'px';

	      document.body.appendChild(this.popup);
	      this._renderLayer();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._renderLayer();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      _reactDom2.default.unmountComponentAtNode(this.popup);
	      document.body.removeChild(this.popup);
	    }
	  }, {
	    key: '_renderLayer',
	    value: function _renderLayer() {
	      _reactDom2.default.render(this.props.children, this.popup);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        _extends({}, this.props, { ref: 'me' }),
	        _react2.default.createElement('span', null)
	      );
	    }
	  }]);

	  return RenderInBody;
	}(_react.Component);

	exports.default = RenderInBody;

/***/ }
/******/ ])
});
;