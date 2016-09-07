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

	var _renderinbody = __webpack_require__(3);

	var _renderinbody2 = _interopRequireDefault(_renderinbody);

	var _utils = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RDropdown = function (_Component) {
	    _inherits(RDropdown, _Component);

	    function RDropdown(props) {
	        _classCallCheck(this, RDropdown);

	        var _this = _possibleConstructorReturn(this, (RDropdown.__proto__ || Object.getPrototypeOf(RDropdown)).call(this, props));

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
	                var index = (0, _utils.findIndexForOption)(options, option);
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
	                var index = (0, _utils.findIndexForOption)(options, option);
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
	            }, this.props.searchTimeout);
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
	                    { className: 'rdropdown-menu-filter' },
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
	                    { className: 'rdropdown-menu-apply' },
	                    _react2.default.createElement(
	                        'button',
	                        { onClick: this.handleApply, className: 'rdropdown-menu-apply-btn' },
	                        applyOptionsText
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'isSelectedOption',
	        value: function isSelectedOption(option) {
	            var preselectedOptions = this.state.preselectedOptions;

	            return (0, _utils.optionExists)(preselectedOptions, option);
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
	            var selectedClasses = "rdropdown-menu-list-option rdropdown-menu-list-option-selected";
	            var normalClass = "rdropdown-menu-list-option";
	            var focusedClasses = "rdropdown-menu-list-option rdropdown-menu-list-option-focused";
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
	                    { className: 'rdropdown-menu-no-results' },
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
	                { style: styles, className: 'rdropdown-menu-list', ref: 'list' },
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
	                    { className: 'rdropdown-menu-no-results' },
	                    errorText
	                );
	            }
	            if (isLoading) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: 'rdropdown-menu-loading' },
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
	                { className: 'rdropdown-menu-filters' },
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
	            var width = this.props.width;

	            var styles = {
	                maxWidth: width
	            };
	            return _react2.default.createElement(
	                _renderinbody2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { tabIndex: 0, style: styles, className: 'rdropdown-menu', ref: 'dropdownMenu', onKeyDown: this.handleKeyDown },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'rdropdown-menu-header' },
	                        _react2.default.createElement(
	                            'button',
	                            { className: 'rdropdown-menu-close', onClick: onClose },
	                            '×'
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: 'rdropdown-menu-title' },
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
	    searchTimeout: _react.PropTypes.number,
	    noResultsText: _react.PropTypes.string,
	    enableEsc: _react.PropTypes.bool,
	    errorText: _react.PropTypes.string,
	    applyOptions: _react.PropTypes.bool,
	    applyOptionsText: _react.PropTypes.string,
	    height: _react.PropTypes.number,
	    width: _react.PropTypes.number
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
	    height: 300,
	    width: 300,
	    searchTimeout: 200
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

	    return _possibleConstructorReturn(this, (RenderInBody.__proto__ || Object.getPrototypeOf(RenderInBody)).apply(this, arguments));
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.findIndexForOption = findIndexForOption;
	exports.optionExists = optionExists;
	function findIndexForOption(options, option) {
	  if (Array.isArray(options)) {
	    for (var index = 0; index <= options.length; index++) {
	      if (options[index] === option) {
	        return index;
	      }
	    }
	  }
	  return -1;
	}

	function optionExists(options, option) {
	  var deepEqual = function deepEqual(x, y) {
	    return x && y && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && (typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object' ? Object.keys(x).length === Object.keys(y).length && Object.keys(x).reduce(function (isEqual, key) {
	      return isEqual && deepEqual(x[key], y[key]);
	    }, true) : x === y;
	  };
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var o = _step.value;

	      if (deepEqual(o, option)) {
	        return true;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return false;
	}

/***/ }
/******/ ])
});
;