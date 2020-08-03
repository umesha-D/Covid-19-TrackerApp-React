import React, { Component } from "react";

import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Navbar extends Component {
  
  constructor() {
      super();
      this.state = {};
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="nav-wrapper grey darken-3">
            <a href="#!" className="brand-logo">
              COVID-19 Tracker
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">Javascript</a>
              </li>
              <li>
                <a href="mobile.html">Mobile</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
