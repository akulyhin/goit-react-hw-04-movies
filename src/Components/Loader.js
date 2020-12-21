import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class Loaders extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Loading...</h3>
        <Loader type="Audio" color="palevioletred" height={80} width={80} />
      </div>
    );
  }
}
