import React, {Component, PropTypes} from 'react';
class DropDownMenu extends Component {
    static propTypes = {
        renderOption: PropTypes.func.isRequired,
        onOptionSelected: PropTypes.func.isRequired,
        headerTitle: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    onOptionSelected(option) {
        this.props.onOptionSelected(option);
    }


    renderOptions() {
        const options = this.props.options;
        const renderedOptions = [];
        for (let option in options) {
            renderedOptions.push(
                <div key={option} onClick={this.onOptionSelected.bind(this, options[option]) } >
                    { this.props.renderOption(options[option]) }
                </div>
            );
        }
        return renderedOptions;
    }


  render() {
      return (
        <div>
          <div className="dropdown-menu">
              <div className="dropdown-menu-header">
                  <button className="dropdown-menu-close" onClick={this.props.onClose }>×</button>
                  <span className="dropdown-menu-title">{ this.props.headerTitle }</span>
              </div>
              <div className="dropdown-menu-filters">
                  <div className="dropdown-menu-filter">
                      <input autoFocus={true} type="text" placeholder="Filter labels" />
                  </div>
                  <div className="dropdown-menu-list">
                      { this.renderOptions()}
                  </div>
              </div>
          </div>
        </div>
      );
  }
}

export default DropDownMenu;
