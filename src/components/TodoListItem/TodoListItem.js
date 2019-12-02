import React from "react";
import "./TodoListItem.css"


export default class TodoListItem extends React.Component {
  
    render() {
        return (
            <div className="d-flex justify-content-between todoListItem">
                <div className={this.props.item.done ? "text done" : "text"} onClick={()=>this.props.onLabelClick(this.props.item.id)}>
                    <span className={this.props.item.important ? "text-primary ml-3 font-weight-bold" : "ml-3"}>{this.props.item.value}</span>
                </div>
                <div>
                    <button className={this.props.item.important ? "btn btn-success btn-sm" : "btn btn-outline-success btn-sm"} onClick={() => this.props.exclamation(this.props.item.id)}>
                        <i className="fa fa-exclamation" />
                    </button>
                    <button className="btn btn-outline-danger btn-sm mr-2 ml-3" onClick={()=>this.props.deleteItms(this.props.item.id)}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </div>
        )
    }
}

