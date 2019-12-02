import React, { Component } from 'react';
import TodoList from '../TodoList/';
import AppHeader from '../AppHeader/';
import SearchPanel from '../SearchPanel/';
import Loading from "../Loading/";
import AddItem from '../AddItem/';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTypeText: "Type here to seach"
        }
    }
    Exclamation(element) {
        const items = [...this.state.items]
        items.forEach(el => {
            if (el.id === element && el.done === false) {
                el.important = !el.important;
            }
        });
        this.setState({
            items: items
        }
        )
    }
    onLabelClick(element) {
        const items = [...this.state.items]
        items.forEach(el => {
            if (el.id === element) {
                el.done = !el.done;
                el.important = false;
            }
        });
        this.setState({
            items: items
        }
        )
    }
    onloadData() {
        fetch("app/data.json").then(result => {
            return result.json();
        }).then(answer => {
            this.setState({
                items: answer.items
            })
        })
    }
    onload() {
        setTimeout(() => {
            this.onloadData()
        }, 500)
    }
    deleteItms(id) {
        const items = [...this.state.items]
        const index = items.findIndex((el) => el.id === id);
        this.setState(() => {
            const newArray = [...items.slice(0, index), ...items.slice(index + 1)]
            return {
                items: newArray
            }
        })
    }
    AddItem(e) {
        const items = [...this.state.items]
        const id = items[items.length - 1].id + 1
        console.log(id);
        if (e !== "" && e !== items[items.length - 1].value) {
            this.setState(() => {
                const newItem = {
                    id: id,
                    value: e,
                    important: false,
                    done: false
                }
                return {
                    items: [...items, newItem]
                }
            })
        }
    }
    componentDidMount() {
        this.onload();
    }
    render() {
        return (
            <div className="col-lg-4 mx-auto my-4">
                <AppHeader more={this.state.items !== undefined ? this.state.items.filter(e => e.done === false).length :""} done={this.state.items !== undefined ? this.state.items.filter(e => e.done === true).length :""}/>
                <SearchPanel searchTypeText={this.state.searchTypeText} />
                {this.state.items !== undefined ? <TodoList items={this.state.items} exclamation={(e) => this.Exclamation(e)} onLabelClick={(e) => this.onLabelClick(e)} deleteItms={(e) => this.deleteItms(e)} /> : <Loading />}
                <AddItem addItem={(e) => this.AddItem(e)} />
            </div>
        )
    }
};