import React, {Component} from 'react';
import RDropdown from '../../../src/rdropdown';
import Fuse from 'fuse.js';
import BaseSingleDropdown from './base-single-dropdown';

class SingleFilterDropdown extends BaseSingleDropdown {
    constructor(props) {
        super(props);
    }

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
                  onFilter={this.onFilter}
                  headerTitle={"Filter by country"}
                  filterEnabled={true}
                  filterPlaceholder={"Filter countries"}
                  noOptionsFoundText={ "No country found. Sorry about that."}
                  onFilter= { this.onFilter }
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

}

export default SingleFilterDropdown;
