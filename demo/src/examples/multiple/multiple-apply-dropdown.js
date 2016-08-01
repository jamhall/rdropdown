import React, {Component} from 'react';
import RDropdown from '../../../../src/rdropdown';
import BaseMultipleDropdown from './base-multiple-dropdown';
import Fuse from 'fuse.js';

class MultipleApplyDropdown extends BaseMultipleDropdown {

    constructor(props) {
        super(props);
    }

    /**
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
        // Get an array of countries
        const countries = this.api.getCountries();
        if (this.state.isOpen) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onSelectedOptions={this.onSelectedOptions}
                  selectedOptions={this.state.selectedOptions}
                  applyOptions={true}
                  applyOptionsText={"Apply selection"}
                  title={"Filter by countries"}
                  multiple={true}
                  searchable={true}
                  onSearch={this.onSearch}
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

export default MultipleApplyDropdown;
