import React, { Component } from 'react';
import "./SearchPanel.css"

export default class SearchPanel extends Component {
      render() {
        return (
            <div>
                <input placeholder={this.props.searchTypeText} className="col-lg-6 mb-3 py-2" onChange={(e)=>this.props.changeFindText(e)}></input>
                <div className="col-lg-6 btn-group">
                    <button type="button" className={this.props.activButton === "all" ? "btn btn-info mx-3" : "btn-outline-secondary mx-1"} onClick={()=>this.props.changeActiveButton("all")}>All</button>
                    <button type="button" className={this.props.activButton === "active" ? "btn btn-info mx-3" : "btn-outline-secondary mx-1"} onClick={()=>this.props.changeActiveButton("active")}>Active</button>
                    <button type="button" className={this.props.activButton === "done" ? "btn btn-info mx-3" : "btn-outline-secondary mx-1"} onClick={()=>this.props.changeActiveButton("done")}>Done</button>
                </div>
            </div>
        )
    }
}

//export default SearchPanel;