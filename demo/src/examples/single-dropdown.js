
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
        if (this.state.dropdownVisible) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onSelectedOptions={this.onSelectedOptions}
                  selectedOption={this.state.selectedOption}
                  headerTitle={"Filter by country"}
                  renderOption={(option) => {
                      return (
                          <div>
                              <img className="dropdown-menu-list-item-icon" src={  this.getFlagImageSource (option) } /> {option.name}
                          </div>
                      );
                }}/>
            );
        }
    }
}

export default SingleDropdown;
