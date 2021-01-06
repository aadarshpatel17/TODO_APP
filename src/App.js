import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

let index = 0;
export default class App extends Component {
  constructor(props) {
    super(props);

    //todo-list here
    this.state = {
      list: [],
      prevlist: [],
    };
  }

  // input-field submit handler
  inputSubmitHandler = (newTodo) => {
    let todo = {
      name: newTodo,
      status: false,
      index: index++,
    };
    let arr = [];
    arr.push(...this.state.list, todo);

    this.setState({
      list: arr,
      prevlist: arr,
    });
  };

  // task-completion handler
  checkTaskHandler = (index) => {
    const newTodo = this.state.list.map((task) => {
      if (task.index === index) {
        return {
          ...task,
          status: !task.status,
        };
      }
      return task;
    });

    this.setState({
      list: newTodo,
      prevlist: newTodo,
    });
  };

  //update existing task here
  updateTaskHandler = (index) => {
    const newTodo = this.state.list.map((task) => {
      if (task.index === index) {
        // const value = prompt("", task.name) === null ? task.name: '';
        const value = prompt("", task.name);
        return {
          ...task,
          name: value,
        };
      }
      return task;
    });

    this.setState({
      list: newTodo,
      prevlist: newTodo,
    });
  };

  //delete existing task here
  deleteTaskHandler = (index) => {
    const newTodo = this.state.list.filter((task) => {
      if (task.index !== index) {
        return { ...task };
      }
    });
    this.setState({
      list: newTodo,
      prevlist: newTodo,
    });
  };

  //completed filter handler
  filterHandler = (stats) => {
    const newTodo = this.state.prevlist.filter((task) => {
      if (task.status == stats) {
        return { ...task };
      }
      else if(stats == 'all') {
        return { ...task };
      }
    });
    this.setState({
      list: newTodo,
    },() => console.log(this.state.prevlist));
  };

  render() {
    return (
      <div className="App">
        <InputField
          list={this.state.list}
          prevlist={this.state.prevlist}
          inputSubmitHandler={this.inputSubmitHandler}
        />

        <Filter filterHandler={this.filterHandler} />

        <TodoList
          list={this.state.list}
          checkTaskHandler={this.checkTaskHandler}  
          updateTaskHandler={this.updateTaskHandler}
          deleteTaskHandler={this.deleteTaskHandler}
        />
      </div>
    );
  }
}
