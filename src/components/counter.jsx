import React, { Component } from "react";

class Counter extends React.Component {
<<<<<<< HEAD
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.state.counter.value) {
    }
  }
=======
<<<<<<< HEAD
  test() {}
=======
  test1() {}
>>>>>>> 40e57640a86de5bc3389dd7e67b2a5a8cff00044
>>>>>>> d633cce8d049e57671c1fd25c9e34fc1ffa88c8e
  render() {
    console.log("counter-Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getBadgeClasses()}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
