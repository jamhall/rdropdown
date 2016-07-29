import React, {Component, PropTypes} from 'react';

class DropdownMenu extends Component {
    static propTypes = {
        renderOption: PropTypes.func.isRequired,
        onOptionSelected: PropTypes.func.isRequired,
        headerTitle: PropTypes.string.isRequired,
        filterEnabled: PropTypes.bool,
        filterLabel: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        noOptionsFoundText: PropTypes.string,
        onFilter: PropTypes.func,
        onClose: PropTypes.func.isRequired,
        enableEsc: PropTypes.bool
    }
    static defaultProps = {
        filterEnabled: false,
        filterPlaceholder: 'Filter...',
        noOptionsFoundText: 'No results',
        enableEsc: true
    }

    constructor(props) {
        super(props);
        this.state = {
            filterValue: null,
            filteredOptions: null,
            options: props.options,
            isLoading: true,
            focusedOption: null,
            focusedIndex: 0
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handleItemSelected = this.handleItemSelected.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setFilterValue = this.setFilterValue.bind(this);

        if ('function' === typeof this.props.options.then) {
            this.props.options.then((options) => {
                this.setOptions(options);
            });
        } else {
            this.setOptions(this.props.options);
        }
    }

    handleClose() {
        this.props.onClose();
    }

    handleItemSelected(option) {
        this.props.onOptionSelected(option);
    }

    setFilteredOptions(options) {
        this.setState({filteredOptions: options})
    }

    setOptions(options) {
        this.setState({options: options, isLoading: false});
        this.setFocusedOption(0, options);
    }

    setFilterValue(value) {
        this.setState({filterValue: value});
    }

    handleFilter(event) {
        const value = event.target.value;
        this.setFilterValue(value);
        if (value) {
            const options = this.state.options;
            const filteredOptions = this.props.onFilter(value, options);
            this.setFilteredOptions(filteredOptions);
            this.setFocusedOption(0, filteredOptions);
            return;
        }
        this.setFilteredOptions(null);
        this.setFocusedOption(0, this.state.options);
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

    handleKeyDown(e) {
        const options = this.state.filteredOptions || this.state.options;
        if (options.length > 0 && this.state.isLoading === false) {
            switch (e.keyCode) {
                case 13:
                    // Enter key pressed
                    this.handleItemSelected(this.state.focusedOption);
                    return;
                case 27:
                    // Escape key pressed
                    if(this.props.enableEsc) {
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

    renderFilter() {
        if (this.props.filterEnabled) {
            return (
                <div className="dropdown-menu-filter">
                    <input autoFocus={true} type="text" onChange={this.handleFilter} value={this.state.filterValue || ''} placeholder={this.props.filterPlaceholder}/>
                </div>
            );
        }
    }

    renderOptions() {
        const options = this.state.filteredOptions || this.state.options;
        if (options.length === 0) {
            return (
                <div className="dropdown-menu-no-results">{this.props.noOptionsFoundText}</div>
            )
        }
        const renderedOptions = options.map((option, index) => {
            if (this.state.focusedOption === option) {
                return (
                    <a key={index}
                       className="dropdown-menu-list-item dropdown-menu-list-item-focused"
                       ref={`option_${index}`}
                       onClick={this.handleItemSelected.bind(this, option)}>
                        {this.props.renderOption(option)}
                    </a>
                );
            }
            return (
                <a key={index}
                   className="dropdown-menu-list-item"
                   ref={`option_${index}`}
                   onClick={this.handleItemSelected.bind(this, option)}>
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
        if (this.state.isLoading) {
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
        return (
            <div className="dropdown-menu" onKeyDown={this.handleKeyDown}>
                <div className="dropdown-menu-header">
                    <button className="dropdown-menu-close" onClick={this.props.onClose}>×</button>
                    <span className="dropdown-menu-title">{this.props.headerTitle}</span>
                </div>
                {this.renderList()}
            </div>
        );
    }
}

export default DropdownMenu;
