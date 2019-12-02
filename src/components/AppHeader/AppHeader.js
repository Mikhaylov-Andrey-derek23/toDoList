import React, { Component } from 'react';
import "./AppHeader.css";

export default class AppHeader extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between align-items-end mb-3">
                <div>
                    <h1>My Todo List</h1>
                </div>
                <div>
                    <p><span>{this.props.more}</span> more to do, <span>{this.props.done}</span> done</p>
                </div>

            </div>
        )
    }
}
