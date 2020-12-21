import React, { Component } from "react";

export default class SearchBox extends Component {
  state = {
    value: "",
  };

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={this.handleInput}
        />
        <button type="submit">Поиск</button>
      </form>
    );
  }
}
