(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["DropdownMenu"] = factory(require("react"));
	else
		root["DropdownMenu"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropdownMenu = function (_Component) {
	    _inherits(DropdownMenu, _Component);

	    function DropdownMenu(props) {
	        _classCallCheck(this, DropdownMenu);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownMenu).call(this, props));

	        _this.state = {
	            filterValue: null,
	            filteredOptions: null,
	            options: props.options,
	            isLoading: true,
	            focusedOption: null,
	            focusedIndex: 0
	        };
	        _this.handleFilter = _this.handleFilter.bind(_this);
	        _this.handleItemSelected = _this.handleItemSelected.bind(_this);
	        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	        _this.setFilterValue = _this.setFilterValue.bind(_this);

	        if ('function' === typeof _this.props.options.then) {
	            _this.props.options.then(function (options) {
	                _this.setOptions(options);
	            });
	        } else {
	            _this.setOptions(_this.props.options);
	        }
	        return _this;
	    }

	    _createClass(DropdownMenu, [{
	        key: 'handleClose',
	        value: function handleClose() {
	            this.props.onClose();
	        }
	    }, {
	        key: 'handleItemSelected',
	        value: function handleItemSelected(option) {
	            this.props.onOptionSelected(option);
	        }
	    }, {
	        key: 'setFilteredOptions',
	        value: function setFilteredOptions(options) {
	            this.setState({ filteredOptions: options });
	        }
	    }, {
	        key: 'setOptions',
	        value: function setOptions(options) {
	            this.setState({ options: options, isLoading: false });
	            this.setFocusedOption(0, options);
	        }
	    }, {
	        key: 'setFilterValue',
	        value: function setFilterValue(value) {
	            this.setState({ filterValue: value });
	        }
	    }, {
	        key: 'handleFilter',
	        value: function handleFilter(event) {
	            var value = event.target.value;
	            this.setFilterValue(value);
	            if (value) {
	                var options = this.state.options;
	                var filteredOptions = this.props.onFilter(value, options);
	                this.setFilteredOptions(filteredOptions);
	                this.setFocusedOption(0, filteredOptions);
	                return;
	            }
	            this.setFilteredOptions(null);
	            this.setFocusedOption(0, this.state.options);
	        }
	    }, {
	        key: 'setFocusedOption',
	        value: function setFocusedOption(index, options) {
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
	                this.setFocusedOption(Math.min(options.length - 1, focusedIndex + 1), options);
	            } else {
	                // Previous option...
	                this.setFocusedOption(Math.max(0, focusedIndex - 1), options);
	            }
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            var options = this.state.filteredOptions || this.state.options;
	            if (options.length > 0 && this.state.isLoading === false) {
	                switch (e.keyCode) {
	                    case 13:
	                        // Enter key pressed
	                        this.handleItemSelected(this.state.focusedOption);
	                        return;
	                    case 27:
	                        // Escape key pressed
	                        if (this.props.enableEsc) {
	                            this.handleClose();
	                        }
	                        return;
	                    // Down key pressed
	                    case 40:
	                        this.focusOption(1, options);
	                        return;
	                    // Up key pressed
	                    case 38:
	                        this.focusOption(-1, options);
	                        return;
	                }
	            }
	        }
	    }, {
	        key: 'renderFilter',
	        value: function renderFilter() {
	            if (this.props.filterEnabled) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-filter' },
	                    _react2.default.createElement('input', { autoFocus: true, type: 'text', onChange: this.handleFilter, value: this.state.filterValue || '', placeholder: this.props.filterPlaceholder })
	                );
	            }
	        }
	    }, {
	        key: 'renderOptions',
	        value: function renderOptions() {
	            var _this2 = this;

	            var options = this.state.filteredOptions || this.state.options;
	            if (options.length === 0) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-no-results' },
	                    this.props.noOptionsFoundText
	                );
	            }
	            var renderedOptions = options.map(function (option, index) {
	                if (_this2.state.focusedOption === option) {
	                    return _react2.default.createElement(
	                        'a',
	                        { key: index,
	                            className: 'dropdown-menu-list-item dropdown-menu-list-item-focused',
	                            ref: 'option_' + index,
	                            onClick: _this2.handleItemSelected.bind(_this2, option) },
	                        _this2.props.renderOption(option)
	                    );
	                }
	                return _react2.default.createElement(
	                    'a',
	                    { key: index,
	                        className: 'dropdown-menu-list-item',
	                        ref: 'option_' + index,
	                        onClick: _this2.handleItemSelected.bind(_this2, option) },
	                    _this2.props.renderOption(option)
	                );
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: 'dropdown-menu-list', ref: 'list' },
	                renderedOptions
	            );
	        }
	    }, {
	        key: 'renderList',
	        value: function renderList() {
	            if (this.state.isLoading) {
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
	                this.renderFilter(),
	                this.renderOptions()
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'dropdown-menu', onKeyDown: this.handleKeyDown },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'dropdown-menu-header' },
	                    _react2.default.createElement(
	                        'button',
	                        { className: 'dropdown-menu-close', onClick: this.props.onClose },
	                        '×'
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        { className: 'dropdown-menu-title' },
	                        this.props.headerTitle
	                    )
	                ),
	                this.renderList()
	            );
	        }
	    }]);

	    return DropdownMenu;
	}(_react.Component);

	DropdownMenu.propTypes = {
	    renderOption: _react.PropTypes.func.isRequired,
	    onOptionSelected: _react.PropTypes.func.isRequired,
	    headerTitle: _react.PropTypes.string.isRequired,
	    filterEnabled: _react.PropTypes.bool,
	    filterLabel: _react.PropTypes.string,
	    filterPlaceholder: _react.PropTypes.string,
	    noOptionsFoundText: _react.PropTypes.string,
	    onFilter: _react.PropTypes.func,
	    onClose: _react.PropTypes.func.isRequired,
	    enableEsc: _react.PropTypes.bool
	};
	DropdownMenu.defaultProps = {
	    filterEnabled: false,
	    filterPlaceholder: 'Filter...',
	    noOptionsFoundText: 'No results',
	    enableEsc: true
	};
	exports.default = DropdownMenu;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;