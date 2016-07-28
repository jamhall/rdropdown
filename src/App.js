import React, { Component } from 'react';
import './styles.css';
import DropDownMenu from './DropDownMenu';

class App extends Component {
    constructor(props) {
        super(props);
        this.options = [
            {
                icon: "/smile.png",
                label: "Analysis",
                value:  "analyis"
            },{
                icon: "/smile.png",
                label: "Benchmark",
                value:  "benchmark"
            },{
                icon: "/smile.png",
                label: "Breaking",
                value:  "breaking"
            },
            {
                icon: "/smile.png",
                label: "Bug",
                value:  "bug"
            },
            {
                icon: "/smile.png",
                label: "Build",
                value:  "build"
            },
            {
                icon: "/smile.png",
                label: "Critical",
                value:  "critical"
            },
            {
                icon: "/smile.png",
                label: "Deprecation",
                value:  "deprecation"
            },
            {
                icon: "/smile.png",
                label: "Docs",
                value:  "docs"
            },
            {
                icon: "/smile.png",
                label: "Enchancement",
                value:  "enchancement"
            },
            {
                icon: "/smile.png",
                label: "Feature",
                value:  "feature"
            },
            {
                icon: "/smile.png",
                label: "Regression",
                value:  "regression"
            },
            {
                icon: "/smile.png",
                label: "Settings",
                value:  "settings"
            },
            {
                icon: "/smile.png",
                label: "Stats",
                value:  "stats"
            }
        ];
        this.onButtonClick = this.onButtonClick.bind(this);
        this.onOptionSelected = this.onOptionSelected.bind(this);
        this.onClose = this.onClose.bind(this);

        this.state = {
            dropdownVisible : false
        }
    }

    onOptionSelected(option) {
        this.setState({
            dropdownVisible: !this.state.dropdownVisible
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
        if(this.state.dropdownVisible) {
            return (
                <DropDownMenu
                    options={ this.options }
                    onClose={ this.onClose }
                    onOptionSelected={ this.onOptionSelected }
                    headerTitle={ "Filter by labels" }
                    renderOption={
                        (option) => {
                            return(
                                <a className="dropdown-menu-list-item">
                                    <img className="dropdown-menu-list-item-icon" src={ option.icon } />
                                    { option.value }
                                </a>
                            );
                        }
                    } />
            );
        }
    }

  render() {
    return (
      <div className="App">
        <button onClick={this.onButtonClick }>Show dropdown</button>
        { this.renderDropdown() }
      </div>
    );
  }
}

export default App;
