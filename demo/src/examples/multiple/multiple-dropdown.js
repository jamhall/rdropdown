import React, {Component} from 'react';
import RDropdown from '../../../../src/rdropdown';
import BaseMultipleDropdown from './base-multiple-dropdown';

class MultipleDropdown extends BaseMultipleDropdown {

    constructor(props) {
        super(props);
    }

    renderDropdown() {
        // Get an array of countries
        const countries = this.api.getCountries();
        if (this.state.isOpen) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onSelectedOptions={this.onSelectedOptions}
                  selectedOptions={this.state.selectedOptions}
                  multiple={true}
                  renderOption={(option) => {
                      return (
                          <div>
                             {option.name}
                          </div>
                      );
                }}/>
            );
        }
    }
}

export default MultipleDropdown;
