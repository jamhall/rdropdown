import React, {Component} from 'react';
import RDropdown from '../../../src/rdropdown';
import BaseSingleDropdown from './base-single-dropdown';

/**
 * Extend the base single dropdown as the examples share common functionality...
 */
class SingleAsyncDropdown extends BaseSingleDropdown {
    constructor(props) {
        super(props);
    }

    renderDropdown() {
        // Get an array of countries via a promise...
        const countries = this.api.getCountriesPromise();
        if (this.state.dropdownVisible) {
            return (
                <RDropdown options={ countries }
                  onClose={this.onClose}
                  onSelectedOptions={this.onSelectedOptions}
                  selectedOption={this.state.selectedOption}
                  title={"Countries"}
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

export default SingleAsyncDropdown;
