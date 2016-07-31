
import React, {Component} from 'react';

import RDropdown from '../../../src/rdropdown';
import BaseSingleDropdown from './base-single-dropdown';

/**
 * Extend the base single dropdown as the examples share common functionality...
 */
class SingleDropdown extends BaseSingleDropdown {

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

export default SingleDropdown;
