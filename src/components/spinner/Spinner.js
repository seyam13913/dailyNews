import React, { Component } from "react";
import loading from "./Dual Ring-1.1s-209px.svg";

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="spnner" />
      </div>
    );
  }
}
