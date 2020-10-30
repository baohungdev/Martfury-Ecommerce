import React, { Component } from 'react';

class PanelSearch extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ps-panel__wrapper">
                <div className="ps-panel__header">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="navigation__content"></div>
            </div>
        );
    }
}

export default PanelSearch;
