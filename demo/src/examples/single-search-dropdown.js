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
     * Perform a search on the options. Return all matched options.
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
        if (this.state.isOpen) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onSelectedOptions={this.onSelectedOptions}
                  selectedOptions={this.state.selectedOptions}
                  searchable={true}
                  onSearch={this.onSearch}
                  title={"Countries"}
                  searchPlaceholder={"Search countries"}
                  noResultsText={ "No country found. Sorry about that."}
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

export default SingleSearchDropdown;
