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
            selectedOptions: null
        }

    }

    onSelectedOptions(options) {
        console.log('Options', options);
        this.setState({
            dropdownVisible: !this.state.dropdownVisible,
            selectedOptions: options
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
      const options = this.state.selectedOptions;
      if(options) {
         const optionsJoined = Array.isArray(options) ?  options.map(x => x.name).join(',') : options.name;
        return (<div className="result"><b>Country: </b>{ optionsJoined }</div>)
      }
      return <div className="result"><b>Country: </b>No country has been selected</div>
    }


    getFlagImageSource(option) {
        return "flags/" + option.code.toLowerCase() + ".png";
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
