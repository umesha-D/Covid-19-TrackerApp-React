import React, { Component } from "react";



class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getStyle = () => {
    return {
      border:"5px solid",
      width: "fit-content",
      borderRadius: "15px",
      padding:"20px",
      marginLeft:"20px"
    }
  }


  render() {
    return (
      <div className="container" style={this.getStyle()}>
        <h6>{this.props.title}</h6>
        <p>Cases: {this.props.cases}</p>
        <p>{this.props.total}</p>
      </div>
    );
  }
}

export default InfoBox;
