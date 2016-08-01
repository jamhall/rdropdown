import React, {Component} from 'react';
import RDropdown from '../../../src/rdropdown';
import Api from '../api';

class BaseDropdown extends Component {
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

    getFlagImageSource(option) {
        return "flags/" + option.code.toLowerCase() + ".png";
    }

    render() {
        return (
            <div className="example-container">
                { this.renderSelectedOptions() }
                <button className="pure-button button-success" onClick={this.onButtonClick}>Select a country</button>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default BaseDropdown;
