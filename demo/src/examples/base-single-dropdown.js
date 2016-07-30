import React, {Component} from 'react';
import RDropdown from '../../../src/rdropdown';
import Api from '../api';

class BaseSingleDropdown extends Component {
    constructor(props) {
        super(props);
        this.api = new Api();
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onSelectedOptions = this.onSelectedOptions.bind(this);
        this.onClose = this.onClose.bind(this);

        this.state = {
            dropdownVisible: false,
            optionSelected: null
        }

    }

    onSelectedOptions(option) {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible,
            selectedOption: option
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
      const option = this.state.selectedOption;
      if(option) {
        return (<div className="result"><b>Country: </b>{ option.name }</div>)
      }
      return <div className="result"><b>Country: </b>No country has been selected</div>
    }


    getFlagImageSource(option) {
        return "/flags/" + option.code.toLowerCase() + ".png";
    }

    render() {
        return (
            <div className="example-container">
                { this.renderSelectedOption() }
                <button className="pure-button button-success" onClick={this.onButtonClick}>Select a country</button>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default BaseSingleDropdown;
