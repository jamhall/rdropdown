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
            isOpen: false,
            selectedOptions: null
        }
    }

    onSelectedOptions(options) {
        console.log('Options', options);
        this.setState({
            isOpen: !this.state.isOpen,
            selectedOptions: options
        });
    }

    onClose() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onButtonClick() {
        this.setState({
            isOpen: !this.state.isOpen
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
