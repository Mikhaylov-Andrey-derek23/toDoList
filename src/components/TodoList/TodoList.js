import React from 'react';
import TodoListItem from "../TodoListItem/";
import "./TodoList.css";

export default class TodoList extends React.Component{
    render(){
       
        return(
                <ul className="list-group todo-list mt-3">
                    {this.props.items.map(e => <li key={e.id} className="list-group-item"><TodoListItem item = {e} exclamation={this.props.exclamation} onLabelClick={this.props.onLabelClick} deleteItms={this.props.deleteItms}/></li>)}
                </ul>
        )
    }
};