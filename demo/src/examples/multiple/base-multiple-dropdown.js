import BaseDropdown from '../base-dropdown';
import React, {Component} from 'react';

class BaseMultipleDropdown extends BaseDropdown {
    constructor(props) {
        super(props);
    }

    renderSelectedOptions() {
      const options = this.state.selectedOptions;
      if(options != null && options.length > 0) {
         const optionsJoined = options.map(x => x.name).join(',');
         return (<div className="result"><b>Countries: </b>{ optionsJoined }</div>)
      }
      return <div className="result"><b>Countries: </b>No countries have been selected</div>
    }
}

export default BaseMultipleDropdown;
