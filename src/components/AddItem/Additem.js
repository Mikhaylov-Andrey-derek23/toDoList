import React from "react";
import "./Additem.css";

export default class Additem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    addItem(e) {
        this.setState({
            value: e.target.value
        })
    }
    onsubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state.value)
        this.setState({
            value: ""
        })
    }


    render() {
        return (
            <form className="form-inline py-3 justify-content-between" onSubmit={(e) => this.onsubmit(e)}>
                <input className="form-control mr-sm-2 w-75" type="search" placeholder="Add new task" value={this.state.value} onChange={(e) => this.addItem(e)} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add new task</button>
            </form>
        )
    }
}