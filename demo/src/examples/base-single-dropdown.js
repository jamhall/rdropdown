import React, {Component} from 'react';

import RDropdown from '../../../src/rdropdown';
import Fuse from 'fuse.js';
import Api from '../api';

class BaseSingleDropdown extends Component {
    constructor(props) {

        super(props);
        this.api = new Api();
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onOptionSelected = this.onOptionSelected.bind(this);
        this.onClose = this.onClose.bind(this);

        this.state = {
            dropdownVisible: false,
            optionSelected: null
        }

    }

    onOptionSelected(option) {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible,
            optionSelected: option
        });
    }

    onClose() {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        });
    }

    onButtonClick() {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
        });
    }

    renderSelectedOption() {
      const option = this.state.optionSelected;
      if(option) {
        return (<div className="example-result">Country selected: <b>{ option.name }</b></div>)
      }
      return <div className="example-result">Country selected: <b>No country has been selected</b></div>
    }


    getFlagImageSource(option) {
        return "/resources/flags/" + option.code.toLowerCase() + ".png";
    }

    render() {
        return (
            <div className="example-container">
                { this.renderSelectedOption() }
                <button className="pure-button" onClick={this.onButtonClick}>Select a country</button>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default BaseSingleDropdown;
