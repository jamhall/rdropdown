import React, {Component} from 'react';
import './styles.css';
import '../../src/rdropdown.css';
import RDropdown from '../../src/rdropdown';
import Fuse from 'fuse.js';
import api from './api';

class App extends Component {
    constructor(props) {
        super(props);
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

    renderDropdown() {
        if (this.state.dropdownVisible) {
            return (
                <RDropdown options={api.getCountries()}
                  onClose={this.onClose}
                  onOptionSelected={this.onOptionSelected}
                  onFilter={this.onFilter}
                  headerTitle={"Filter by country"}
                  filterEnabled={true}
                  filterPlaceholder={"Filter countries"}
                  noOptionsFoundText={ "No country found. Sorry about that."}
                  onFilter={ (value, options) => {
                      const fuse = new Fuse(options, {
                          keys: ["name"],
                          threshold: 0
                      });
                      return fuse.search(value);
                  }}
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

    renderSelectedOption() {
      const option = this.state.optionSelected;
      if(option) {
        return (<h1>Country selected: { option.name }</h1>)
      }
      return <h1>Country selected: No country has been selected</h1>
    }

    render() {
        return (
            <div className="App">
                { this.renderSelectedOption() }
                <button onClick={this.onButtonClick}>Select a country</button>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default App;
