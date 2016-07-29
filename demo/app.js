import React, {Component} from 'react';
import '../src/dropdown-menu.css';
import DropdownMenu from '../src/dropdown-menu';
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
                <DropdownMenu options={api.getLabels()}
                  onClose={this.onClose}
                  onOptionSelected={this.onOptionSelected}
                  onFilter={this.onFilter}
                  headerTitle={"Filter by label"}
                  filterEnabled={true}
                  filterPlaceholder={"Filter labels"}
                  noOptionsFoundText={ "No labels found. Sorry about that."}
                  onFilter={ (value, options) => {
                      const fuse = new Fuse(options, {
                          keys: ["label"],
                          threshold: 0
                      });
                      return fuse.search(value);
                  }}
                  renderOption={(option) => {
                    if (option === this.state.optionSelected) {
                        return (
                              <div className="dropdown-menu-list-item-selected">
                                <span className="dropdown-menu-list-item-selected-check"/>
                                <img className="dropdown-menu-list-item-icon" src={option.icon}/> {option.label}
                              </div>
                        );
                    }
                    return (
                        <div>
                            <img className="dropdown-menu-list-item-icon" src={option.icon}/> {option.label}
                        </div>
                    );
                }}/>
            );
        }
    }

    renderSelectedOption() {
      const option = this.state.optionSelected;
      if(option) {
        return (<h1>Option selected: { option.label }</h1>)
      }
      return <h1>Option selected: No label has been selected</h1>
    }

    render() {
        return (
            <div className="App">
                { this.renderSelectedOption() }
                <button onClick={this.onButtonClick}>Select a label</button>
                {this.renderDropdown()}
            </div>
        );
    }
}

export default App;
