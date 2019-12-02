import React, { Component } from 'react';
import "./SearchPanel.css"

export default class SearchPanel extends Component {
   
    render() {
        return (
            <div>
                <input placeholder={this.props.searchTypeText} className="col-lg-6 mb-3"></input>
                <div className="col-lg-6 btn-group">
                    <button type="button" className="btn btn-info mr-3">All</button>
                    <button type="button" className="btn-outline-secondary mr-3">Active</button>
                    <button type="button" className="btn-outline-secondary">Done</button>
                </div>
            </div>
        )
    }
}

//export default SearchPanel;