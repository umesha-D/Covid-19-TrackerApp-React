import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col s12 m4 center">
        <div className="card-panel">
        <i className="material-icons large teal-text">{this.props.icon}</i>
          <h5>{this.props.title}</h5>
          <h5 style={{color:"red"}}>+{this.props.today}</h5>
          <h6>{this.props.total} Total</h6>
        </div>
      </div>
    );
  }
}

export default Card;
