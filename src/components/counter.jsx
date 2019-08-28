import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // Normal function that sets the class name of the counter
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Normal function that sets the counter to string 'Zero' if counter equals 0
  formatCount() {
    const { value: count } = this.state; // Object Destructuring
    return count === 0 ? "Zero" : count; // Ternary Operator
  }

  // Arrow function that changes the state of count
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  // The required render method
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
