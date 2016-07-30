import React, {Component, PropTypes} from 'react';

class RDropdown extends Component {
    static propTypes = {
        renderOption: PropTypes.func.isRequired,
        onSelectedOptions: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
        onFilteredOptions: PropTypes.func,
        multiple: PropTypes.bool,
        headerTitle: PropTypes.string,
        filterEnabled: PropTypes.bool,
        filterPlaceholder: PropTypes.string,
        noOptionsFoundText: PropTypes.string,
        enableEsc: PropTypes.bool,
        errorText: PropTypes.string,
        applyOptions: PropTypes.bool,
        applyText: PropTypes.string
    }

    static defaultProps = {
        filterEnabled: false,
        filterPlaceholder: 'Filter...',
        noOptionsFoundText: 'No results',
        enableEsc: true,
        errorText: 'An error occurred.',
        applyText: 'Apply',
        applyOptions: false,
        selectedOption: null,
        multiple: false,
        headerTitle: 'Filter'
    }

    constructor(props) {
        super(props);
        this.state = {
            filterValue: null,
            filteredOptions: null,
            options: props.options,
            isLoading: true,
            focusedOption: null,
            focusedIndex: 0,
            preselectedOptions: []
        }

        this.handleFilter = this.handleFilter.bind(this);
        this.handleOptionSelected = this.handleOptionSelected.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleApply = this.handleApply.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleError = this.handleError.bind(this);

        this.setFilterValue = this.setFilterValue.bind(this);
        this.setOptions = this.setOptions.bind(this);
    }

    componentDidMount() {
        if ('function' === typeof this.props.options.then) {
            this.props.options.then(this.setOptions).catch(this.handleError);
        } else {
            this.setOptions(this.props.options);
        }
    }

    /**
     * When the parent container has a tabIndex of 0, autofocusing an input element
     * does not work. We need to manually check if it has been rendered and then invoke the focus method
     */
    componentDidUpdate() {
        const filterInput = this.refs.filterInput;
        if(filterInput) {
            filterInput.focus();
        }
    }

    setFilteredOptions(options) {
        this.setState({filteredOptions: options})
    }

    getOptions() {
        const {filteredOptions, options} = this.state;
        return filteredOptions || options;
    }

    setOptions(options) {
        this.setState({options: options, isLoading: false }, () =>{
            const {selectedOption} = this.props;
            if(selectedOption) {
                this.setFocusedOption(this.getIndexForOption(selectedOption), options);
            } else {
                this.setFocusedOption(0, options);
            }
        });
    }

    getIndexForOption(option) {
        const options = this.getOptions();
        if(options) {
            const index = options.findIndex(x => x === option);
            return index;
        }
        return 0;
    }

    setFilterValue(value) {
        this.setState({filterValue: value});
    }

    setFocusedOption(index, options) {
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
            this.setFocusedOption(Math.min(options.length - 1, focusedIndex + 1), options);
        } else {
            // Previous option...
            this.setFocusedOption(Math.max(0, focusedIndex - 1), options);
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

    handleFilter(event) {
        const value = event.target.value;
        this.setFilterValue(value);
        if (value) {
            const options = this.state.options;
            const filteredOptions = this.props.onFilteredOptions(value, options);
            this.setFilteredOptions(filteredOptions);
            this.setFocusedOption(0, filteredOptions);
            return;
        }
        this.setFilteredOptions(null);
        this.setFocusedOption(0, this.state.options);
    }

    handleApply() {
        if(this.props.onApply) {
            this.close();
        }
    }

    handleOptionSelected(option) {
        const {applyOptions} = this.props;
        if(!applyOptions) {
            this.props.onSelectedOptions(option);
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

    renderFilter() {
        const {filterEnabled} = this.props;
        if (filterEnabled) {
            return (
                <div className="dropdown-menu-filter">
                    <input autoFocus={true} tabIndex={0} ref="filterInput" type="text" onChange={this.handleFilter} value={this.state.filterValue || ''} placeholder={this.props.filterPlaceholder}/>
                </div>
            );
        }
    }

    renderApply() {
        const {onApply, applyText} = this.props;
        const {isLoading } = this.state;
        if(!isLoading && onApply) {
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
        const {selectedOption} = this.props;
        if(selectedOption) {
            return selectedOption === option;
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
        const selectedClasses =  "dropdown-menu-list-item dropdown-menu-list-item-selected";
        const normalClass = "dropdown-menu-list-item";
        const focusedClasses = "dropdown-menu-list-item dropdown-menu-list-item-focused";
        let classNames = normalClass;
        if(this.isSelectedOption(option)) {
            classNames = selectedClasses;
        } else if(this.isFocusedOption(option) && !this.isSelectedOption(option)) {
            classNames = focusedClasses;
        }
        return classNames;
    }

    renderOptions() {
        const options = this.getOptions();
        if (options.length === 0) {
            return (
                <div className="dropdown-menu-no-results">{this.props.noOptionsFoundText}</div>
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
            <div className="dropdown-menu-list" ref="list">
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
                {this.renderFilter()}
                {this.renderOptions()}
            </div>
        )
    }

    render() {
        const { headerTitle, onClose} = this.props;
        return (
            <div tabIndex="0" className="dropdown-menu" ref="dropdownMenu" onKeyDown={this.handleKeyDown}>
                <div className="dropdown-menu-header">
                    <button className="dropdown-menu-close" onClick={onClose}>×</button>
                    <span className="dropdown-menu-title">{headerTitle}</span>
                </div>
                {this.renderList()}
                {this.renderApply()}
            </div>
        );
    }
}

export default RDropdown;
