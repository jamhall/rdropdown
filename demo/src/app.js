import React, {Component} from 'react';
import SingleDropdown from './examples/single-dropdown';
import SingleAsyncDropdown from './examples/single-async-dropdown';
import SingleSearchDropdown from './examples/single-search-dropdown';
import SingleApplyDropdown from './examples/single-apply-dropdown';
import '../resources/css/styles.css';
import '../resources/css/buttons.css';
import '../../src/rdropdown.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <h1>Single option dropdowns</h1>

                <h2>Simple</h2>
                <p>This is the simplest example using all of the default options.</p>
                <SingleDropdown />
                <p><a href="https://github.com/jamhall/rdropdown/blob/master/demo/src/examples/single-dropdown.js">Source</a></p>

                <h2>Asynchronous options using a promise</h2>
                <p>You can pass a promise to Rdropdown for it to asynchronously load options</p>
                <SingleAsyncDropdown />

                <h2>Simple with search</h2>
                <SingleSearchDropdown />

                <h2>Simple with onApply example</h2>
                <SingleApplyDropdown />
            </div>
        );
    }
}

export default App;
