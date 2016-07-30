import React, {Component} from 'react';
import RDropdown from '../../../src/rdropdown';
import Fuse from 'fuse.js';
import BaseSingleDropdown from './base-single-dropdown';

/**
 * Extend the base single dropdown as the examples share common functionality...
 */
class SingleSearchDropdown extends BaseSingleDropdown {
    constructor(props) {
        super(props);
    }

    /**
     * Perform a fuzzy search on the options. Return all matched options.
     * NB: The matched options must have exactly the same structure as the original options
     */
     onSearch(input, options) {
         const fuse = new Fuse(options, {
             keys: ["name"],
             threshold: 0
         });
         return fuse.search(input);
     }

    renderDropdown() {
        const countries = this.api.getCountries();
        if (this.state.dropdownVisible) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onSelectedOptions={this.onSelectedOptions}
                  selectedOption={this.state.selectedOption}
                  searchable={true}
                  onSearch={this.onSearch}
                  title={"Countries"}
                  searchPlaceholder={"Search countries"}
                  noResultsText={ "No country found. Sorry about that."}
                  onSearch= { this.onFilter }
                  renderOption={(option) => {
                      return (
                          <div>
                              <img className="dropdown-menu-list-option-icon" src={  this.getFlagImageSource (option) } /> {option.name}
                          </div>
                      );
                  }}/>
            );
        }
    }

}

export default SingleSearchDropdown;
