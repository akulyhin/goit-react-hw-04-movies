import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes";

export default class Navigation extends Component {
  render() {
    return (
      <>
        <ul className="menu">
          <li className="menuItem">
            <NavLink
              to={routes.home}
              exact
              className="Navigation-link"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="menuItem">
            <NavLink
              to={routes.movies}
              className="Navigation-link"
              activeClassName="active"
            >
              Movies
            </NavLink>
          </li>
        </ul>
        <hr />
      </>
    );
  }
}
