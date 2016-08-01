import React, {Component, PropTypes} from 'react';
import ReactDOM  from 'react-dom';

class RDropdown extends Component {
    static propTypes = {
        renderOption: PropTypes.func.isRequired,
        onSelectedOptions: PropTypes.func.isRequired,
        selectedOptions: PropTypes.any,
        onClose: PropTypes.func.isRequired,
        onSearch: PropTypes.func,
        multiple: PropTypes.bool,
        title: PropTypes.string,
        searchable: PropTypes.bool,
        searchPlaceholder: PropTypes.string,
        noResultsText: PropTypes.string,
        enableEsc: PropTypes.bool,
        errorText: PropTypes.string,
        applyOptions: PropTypes.bool,
        applyText: PropTypes.string,
        height: PropTypes.number
    }

    static defaultProps = {
        searchable: false,
        searchPlaceholder: 'Search...',
        noResultsText: 'No results',
        enableEsc: true,
        errorText: 'An error occurred.',
        applyText: 'Apply',
        applyOptions: false,
        selectedOptions: null,
        multiple: false,
        title: 'Filter',
        height: 300
    }

    constructor(props) {
        super(props);
        this.displayName = 'RDropdown';

        this.state = {
            searchValue: null,
            filteredOptions: null,
            options: props.options,
            isLoading: true,
            focusedOption: null,
            focusedIndex: 0,
            preselectedOptions: []
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleOptionSelected = this.handleOptionSelected.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleApply = this.handleApply.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleError = this.handleError.bind(this);

        this.setSearchValue = this.setSearchValue.bind(this);
        this.setOptions = this.setOptions.bind(this);
    }

    componentDidMount() {
        const options = this.props.options;
        if ('function' === typeof options.then) {
            options.then(this.setOptions).catch(this.handleError);
        } else {
            this.setOptions(options);
        }
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
    }


    handleClickOutside(e) {
      const domNode = ReactDOM.findDOMNode(this);
      if(domNode && !domNode.contains(e.target)) {
          this.props.onClose();
      }
    }

    componentDidUpdate() {
        const {searchInput, dropdownMenu} = this.refs;
        if(searchInput) {
            searchInput.focus();
        } else {
            dropdownMenu.focus();
        }
    }

    setFilteredOptions(options) {
        this.setState({filteredOptions: options})
    }

    getOptions() {
        const {filteredOptions, options} = this.state;
        return filteredOptions || options;
    }

    intialisePreselectedOptions() {
        const {selectedOptions} = this.props;
        if(selectedOptions) {
            if(Array.isArray(selectedOptions)) {
                this.setPreselectedOptions(selectedOptions);
            } else {
                this.setPreselectedOptions([selectedOptions]);
            }
        } else {
            this.setPreselectedOptions([]);
        }
    }

    setPreselectedOptions(options) {
        const preselectedOptions = options.slice(0);
        this.setState( {
            preselectedOptions: preselectedOptions
        }, () => {
            if(preselectedOptions.length > 0 ) {
                this.setFocusedOption(this.getIndexForOption(preselectedOptions[0]));
            } else {
                this.setFocusedOption(0);
            }
        });
    }

    setOptions(options) {
        this.setState({options: options, isLoading: false }, () =>{
            this.intialisePreselectedOptions();
        });
    }

    getIndexForOption(option) {
        const options = this.getOptions();
        if(options) {
            const index = options.findIndex(x => x === option);
            if(index > -1) {
                return index;
            }
        }
        return 0;
    }

    getIndexForPreselectedOption(option) {
        const options = this.getPreselectedOptions();
        if(options) {
            const index = options.findIndex(x => x === option);
            if(index > -1) {
                return index;
            }
        }
        return -1;
    }

    setSearchValue(value) {
        this.setState({searchValue: value});
    }

    setFocusedOption(index) {
        const options = this.getOptions();
        if (options.length > 0) {
            this.setState({focusedOption: options[index], focusedIndex: index});
            this.scrollToFocusedOption(index);
        }
    }

    scrollToFocusedOption(index) {
        const focusedOptionDom = this.refs['option_' + index];
        const listDom = this.refs.list;
        const focusedOptionDomRectangle = focusedOptionDom.getBoundingClientRect();
        const listDomRectangle = listDom.getBoundingClientRect();
        if (focusedOptionDomRectangle.bottom > listDomRectangle.bottom || focusedOptionDomRectangle.top < listDomRectangle.top) {
            listDom.scrollTop = (focusedOptionDom.offsetTop + focusedOptionDom.clientHeight - listDom.offsetHeight);
        }
    }

    focusOption(direction, options) {
        const focusedIndex = this.state.focusedIndex;
        if (direction > 0) {
            // Next option...
            this.setFocusedOption(Math.min(options.length - 1, focusedIndex + 1));
        } else {
            // Previous option...
            this.setFocusedOption(Math.max(0, focusedIndex - 1));
        }
    }

    handleError(err) {
        console.error('An error occurred', err);
        this.setState({
            errorOccurred: true
        });
    }

    handleClose() {
        this.props.onClose();
    }

    handleError(err) {
      this.setState({
        errorOccurred: true
      });
    }

    handleSearch(event) {
        const value = event.target.value;
        this.setSearchValue(value);
        if (value) {
            const options = this.state.options;
            const filteredOptions = this.props.onSearch(value, options);
            this.setFilteredOptions(filteredOptions);
            this.setFocusedOption(0, filteredOptions);
            return;
        }
        this.setFilteredOptions(null);
        this.setFocusedOption(0, this.state.options);
    }

    isMultiple() {
        return this.props.multiple;
    }

    handleApply() {
        this.props.onSelectedOptions(this.getSelectedOptions());
    }

    getSelectedOptions() {
        const preselectedOptions = this.getPreselectedOptions();
        if(this.isMultiple()) {
            return preselectedOptions;
        } else {
            return preselectedOptions.length === 0 ? null : preselectedOptions[0];
        }
    }

    getPreselectedOptions() {
        return this.state.preselectedOptions;
    }

    resetPreselectedOptions() {
        this.setState({
            preselectedOptions: []
        });
    }

    addPreselectedOption(option) {
        // if multiple is not set then only one option can be selected...
        if(this.getPreselectedOptions().length > 0 && !this.isMultiple() ) {
            this.resetPreselectedOptions();
        }
        if(!this.isSelectedOption(option)) {
            this.setState((state) => ({
                preselectedOptions: state.preselectedOptions.concat(option)
            }));
        }
    }

    removePreselectedOption(option) {
        this.setState((state) => ({
            preselectedOptions: state.preselectedOptions.filter(x => ( x !== option))
        }));
    }

    handleOptionSelected(option) {
        const {applyOptions} = this.props;
        // move this out into a separate function...
        const index = this.getIndexForPreselectedOption(option);
        if(index > -1) {
            this.removePreselectedOption(option);
        } else {
            this.addPreselectedOption(option);
        }
        if(!applyOptions) {
            this.setState({}, () => {
                this.props.onSelectedOptions(this.getSelectedOptions());
            });
        }
    }

    handleKeyDown(e) {
        const options = this.getOptions();
        const {isLoading} = this.state;
        if (options.length > 0 &&  !isLoading) {
            const keys = {
                DOWN : 40,
                UP: 38,
                ESCAPE :27,
                ENTER : 13
            };
            switch (e.keyCode) {
                case keys.ENTER:
                    this.handleOptionSelected(this.state.focusedOption);
                    return;
                case keys.ESCAPE:
                    if(this.props.enableEsc) {
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

    renderSearch() {
        const {searchable} = this.props;
        if (searchable) {
            return (
                <div className="dropdown-menu-filter">
                    <input autoFocus={true} ref="searchInput" type="text" onChange={this.handleSearch} value={this.state.searchValue || ''} placeholder={this.props.searchPlaceholder}/>
                </div>
            );
        }
    }

    renderApply() {
        const {applyOptions, applyText} = this.props;
        const {isLoading } = this.state;
        if(!isLoading && applyOptions) {
            return(
                <div className="dropdown-menu-apply">
                    <button onClick={this.handleApply} className="dropdown-menu-apply-btn">
                        { applyText }
                    </button>
                </div>
            )
        }
    }

    isSelectedOption(option) {
        const {preselectedOptions} = this.state;
        if(preselectedOptions.find((x) => x === option)) {
            return true;
        }
        return false;
    }

    isFocusedOption(option) {
        const {focusedOption} = this.state;
        if(focusedOption) {
            return focusedOption === option;
        }
        return false;
    }

    buildClassNamesForOption(option) {
        const selectedClasses =  "dropdown-menu-list-item dropdown-menu-list-option-selected";
        const normalClass = "dropdown-menu-list-item";
        const focusedClasses = "dropdown-menu-list-item dropdown-menu-list-option-focused";
        let classNames = normalClass;
        if(this.isSelectedOption(option)) {
            classNames = selectedClasses;
        } else if(this.isFocusedOption(option) && !this.isSelectedOption(option)) {
            classNames = focusedClasses;
        }
        return classNames;
    }

    renderOptions() {
        const {height} = this.props;
        const styles = {
          maxHeight: this.props.height
        }
        const options = this.getOptions();
        if (options.length === 0) {
            return (
                <div className="dropdown-menu-no-results">{this.props.noResultsText}</div>
            )
        }
        const renderedOptions = options.map((option, index) => {
            return (
                <a key={index}
                   className={ this.buildClassNamesForOption(option)}
                   ref={`option_${index}`}
                   onClick={this.handleOptionSelected.bind(this, option)}>
                    {this.props.renderOption(option)}
                </a>
            )
        });
        return (
            <div style={ styles  } className="dropdown-menu-list" ref="list">
                {renderedOptions}
            </div>
        );

    }

    renderList() {
        const {errorOccurred, isLoading} = this.state;
        const {errorText} = this.props;
        if(errorOccurred) {
          return (
              <div className="dropdown-menu-no-results">{ errorText }</div>
          )
        }
        if (isLoading) {
            return (
                <div className="dropdown-menu-loading">
                    <div className="loading-spinner-grid">
                        <div className="loading-spinner loading-spinner1"></div>
                        <div className="loading-spinner loading-spinner2"></div>
                        <div className="loading-spinner loading-spinner3"></div>
                        <div className="loading-spinner loading-spinner4"></div>
                        <div className="loading-spinner loading-spinner5"></div>
                        <div className="loading-spinner loading-spinner6"></div>
                        <div className="loading-spinner loading-spinner7"></div>
                        <div className="loading-spinner loading-spinner8"></div>
                        <div className="loading-spinner loading-spinner9"></div>
                    </div>
                </div>
            );
        }
        return (
            <div className="dropdown-menu-filters">
                {this.renderSearch()}
                {this.renderOptions()}
            </div>
        )
    }

    render() {
        const { title, onClose} = this.props;
        return (
            <div tabIndex={0} className="dropdown-menu" ref="dropdownMenu" onKeyDown={this.handleKeyDown}>
                <div className="dropdown-menu-header">
                    <button className="dropdown-menu-close" onClick={onClose}>×</button>
                    <span className="dropdown-menu-title">{title}</span>
                </div>
                {this.renderList()}
                {this.renderApply()}
            </div>
        );
    }
}

export default RDropdown;
