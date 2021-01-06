import React, { Component } from "react";

export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  changeTodoHandler = (events) => {
    this.setState({
      task: events.target.value,
    });
  };

  render() {
    return (
      <div className="input-section">
        <h2>TODO DASHBOARD</h2>
        <div>
          <input
            type="text"
            id="todo-name"
            onChange={this.changeTodoHandler}
            value={this.state.task}
          />
          <button
            type="submit"
            onClick={() => this.props.inputSubmitHandler(this.state.task)}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
