import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col s12 m4">
        <div className="card-panel">
          <i className="material-icons large teal-text">fitness_center</i>
          <h3>{this.props.title}</h3>
          <h4 style={{color:"red"}}>+{this.props.total}</h4>
          <h5>{this.props.total} Total</h5>
        </div>
      </div>
    );
  }
}

export default Card;
