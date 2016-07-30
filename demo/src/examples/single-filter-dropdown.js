import React, {Component} from 'react';
import RDropdown from '../../../src/rdropdown';
import Fuse from 'fuse.js';
import BaseSingleDropdown from './base-single-dropdown';

/**
 * Extend the base single dropdown as the examples share common functionality...
 */
class SingleFilterDropdown extends BaseSingleDropdown {
    constructor(props) {
        super(props);
    }

    /**
     * Perform a fuzzy search on the options. Return all matched options.
     * NB: The matched options must have exactly the same structure as the original options
     */
    onFilter(value, options) {
        const fuse = new Fuse(options, {
            keys: ["name"],
            threshold: 0
        });
        return fuse.search(value);
    }

    renderDropdown() {
        const countries = this.api.getCountries();
        if (this.state.dropdownVisible) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onOptionSelected={this.onOptionSelected}
                  optionSelected={this.state.optionSelected}
                  onFilter={this.onFilter}
                  headerTitle={"Filter by country"}
                  filterEnabled={true}
                  filterPlaceholder={"Filter countries"}
                  noOptionsFoundText={ "No country found. Sorry about that."}
                  onFilter= { this.onFilter }
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

export default SingleFilterDropdown;
