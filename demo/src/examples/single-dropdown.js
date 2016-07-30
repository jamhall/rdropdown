
import React, {Component} from 'react';

import RDropdown from '../../../src/rdropdown';
import Fuse from 'fuse.js';
import Api from '../api';
import BaseSingleDropdown from './base-single-dropdown';

class SingleDropdown extends BaseSingleDropdown {
    constructor(props) {
        super(props);
    }

    renderDropdown() {
        const countries = this.api.getCountries();
        if (this.state.dropdownVisible) {
            return (
                <RDropdown
                  options={ countries }
                  onClose={this.onClose}
                  onOptionSelected={this.onOptionSelected}
                  headerTitle={"Filter by country"}
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

export default SingleDropdown;
