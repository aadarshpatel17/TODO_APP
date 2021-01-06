import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter" >
          <button
            value="completed"
            onClick={() => this.props.filterHandler('all')}
            className="filter-btn"
          >
            All
          </button>

          <button
            value="completed"
            onClick={() => this.props.filterHandler(true)}
            className="filter-btn"
          >
            Completed
          </button>

          <button
            value="pending"
            onClick={() => this.props.filterHandler(false)}
            className="filter-btn"
          >
            Pending
          </button>
      </div>
    );
  }
}
