import React, { Component } from "react";

class Counter extends Component {
  // Normal function that sets the class name of the counter
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // Normal function that sets the counter to string 'Zero' if counter equals 0
  formatCount() {
    const { value: count } = this.props.counter; // Object Destructuring
    return count === 0 ? "Zero" : count; // Ternary Operator
  }

  // The required render method
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        {/* Increment button */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        {/* Delete button */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }
}

export default Counter;
