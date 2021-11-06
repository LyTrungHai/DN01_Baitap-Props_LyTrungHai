import React, { Component } from "react";
import ClassNames from "classnames";
import "./TrafficLight.css";
const RED = 0;
const GREEN = 1;
const ORANGE = 2;

export default class TrafficLight extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED,
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor),
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return GREEN;
      case GREEN:
        return ORANGE;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;

    return (
      <div className="TrafficLight container">
        <div
          className={ClassNames("light", "red", {
            active: currentColor === RED,
          })}
        ></div>
        <div
          className={ClassNames("light", "green", {
            active: currentColor === GREEN,
          })}
        ></div>
        <div
          className={ClassNames("light", "orange", {
            active: currentColor === ORANGE,
          })}
        ></div>
      </div>
    );
  }
}
