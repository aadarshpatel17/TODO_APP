import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return this.props.list.map((task) => (
      <div className={`todo-list ${task.status ? "task-completed" : ""} `}>
        <p>{task.name}</p>
        <div className="actions">
          <button
            onClick={() => {
              this.props.checkTaskHandler(task.index);
            }}
          >
            <i className="fa fa-check"></i>
          </button>

          <button
            onClick={() => {
              this.props.updateTaskHandler(task.index);
            }}
          >
            <i className="fa fa-edit"></i>
          </button>

          <button
            onClick={() => {
              this.props.deleteTaskHandler(task.index);
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    ));
  }
}
