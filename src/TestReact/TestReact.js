import React, { Component } from "react";

export default class TestReact extends Component {
  state = {
    fontsize: 16,
  };
  changeFontSize = (sign) => {
    if (sign === "+") {
      this.setState({
        fontsize: this.state.fontsize + 2,
      });
    } else {
      this.setState({
        fontsize: this.state.fontsize - 2,
      });
    }
  };

  render() {
    return (
      <div>
        <p style={{ fontSize: `${this.state.fontsize}px` }}>test react</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.changeFontSize("+")}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-danger ml-3"
          onClick={() => this.changeFontSize("-")}
        >
          -
        </button>
      </div>
    );
  }
}
