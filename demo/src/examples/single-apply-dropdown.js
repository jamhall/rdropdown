import React, {Component} from 'react';

import RDropdown from '../../../src/rdropdown';
import Fuse from 'fuse.js';
import Api from '../api';

class SingleApplyDropdown extends Component {
    constructor(props) {
        super(props);
        this.api = new Api();
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onOptionSelected = this.onOptionSelected.bind(this);
        this.onClose = this.onClose.bind(this);

        this.state = {
            dropdownVisible: false,
            optionSelected: null
        }

    }

    onOptionSelected(option) {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible,
            optionSelected: option
        });
    }

    onClose() {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        });
    }

    onButtonClick() {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        });
    }

    renderDropdown() {
        const countries = this.api.getCountries();
        if (this.state.dropdownVisible) {
            return (
                <RDropdown options={ countries }
                  onClose={this.onClose}
                  onOptionSelected={this.onOptionSelected}
                  onFilter={this.onFilter}
                  headerTitle={"Filter by country"}
                  filterEnabled={true}
                  filterPlaceholder={"Filter countries"}
                  onApply= { (value, options) => {

                  }}
                  noOptionsFoundText={ "No country found. Sorry about that."}
                  onFilter={ (value, options) => {
                      const fuse = new Fuse(options, {
                          keys: ["name"],
                          threshold: 0
                      });
                      return fuse.search(value);
                  }}
                  renderOption={(option) => {
                    if (option === this.state.optionSelected) {
                        return (
                              <div className="dropdown-menu-list-item-selected">
                                <span className="dropdown-menu-list-item-selected-check"/>
                                <img className="dropdown-menu-list-item-icon" src={ "/resources/flags/" + option.code.toLowerCase() + ".png"}  /> {option.name}
                              </div>
                        );
                    }
                    return (
                        <div>
                            <img className="dropdown-menu-list-item-icon" src={ "/resources/flags/" + option.code.toLowerCase() + ".png"} /> {option.name}
                        </div>
                    );
                }}/>
            );
        }
    }

    renderSelectedOption() {
      const option = this.state.optionSelected;
      if(option) {
        return (<div className="example-result">Country selected: <b>{ option.name }</b></div>)
      }
      return <div className="example-result">Country selected: <b>No country has been selected</b></div>
    }

    render() {
        return (
            <div className="example-container">
                { this.renderSelectedOption() }
                <button className="pure-button" onClick={this.onButtonClick}>Select a country</button>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default SingleApplyDropdown;
