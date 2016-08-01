import BaseDropdown from '../base-dropdown';
import React, {Component} from 'react';

class BaseSingleDropdown extends BaseDropdown {
    constructor(props) {
        super(props);
    }

    renderSelectedOptions() {
      const options = this.state.selectedOptions;
      if(options) {
        return (<div className="result"><b>Country: </b>{  options.name }</div>)
      }
      return <div className="result"><b>Country: </b>No country has been selected</div>
    }
}

export default BaseSingleDropdown;
