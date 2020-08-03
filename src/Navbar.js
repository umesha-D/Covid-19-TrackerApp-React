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
          <div className="nav-wrapper teal">
            <a href="#!" className="brand-logo hide-on-small-only">
              COVID-19 Tracker
            </a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
