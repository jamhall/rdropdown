import React, { Component } from 'react';

class DropDownMenu extends Component {
  render() {
    return (
      <div>
        <div className="dropdown-menu">
            <div className="dropdown-menu-header">
                <button className="dropdown-menu-close">×</button>
                <span className="dropdown-menu-title">Filter by labels</span>
            </div>
            <div className="dropdown-menu-filters">
                <div className="dropdown-menu-filter">
                    <input autoFocus={true} type="text" placeholder="Filter labels" />
                </div>
                <div className="dropdown-menu-list">
                    <a className="dropdown-menu-list-item">
                        <img className="dropdown-menu-list-item-icon" src="https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-09-128.png" />
                        analysis
                    </a>
                    <a className="dropdown-menu-list-item">
                        benchmark
                    </a>
                    <a className="dropdown-menu-list-item">
                        breaking
                    </a>
                    <a className="dropdown-menu-list-item">
                        bug
                    </a>
                    <a className="dropdown-menu-list-item">
                        build
                    </a>
                    <a className="dropdown-menu-list-item">
                        critical
                    </a>
                    <a className="dropdown-menu-list-item">
                        deprecation
                    </a>
                    <a className="dropdown-menu-list-item">
                        docs
                    </a>
                    <a className="dropdown-menu-list-item">
                        enhancement
                    </a>
                    <a className="dropdown-menu-list-item">
                        feature
                    </a>
                    <a className="dropdown-menu-list-item">
                        regression
                    </a>
                    <a className="dropdown-menu-list-item">
                        settings
                    </a>
                    <a className="dropdown-menu-list-item">
                        stats
                    </a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default DropDownMenu;
