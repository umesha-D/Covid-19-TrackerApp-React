import React , { Component } from 'react';

import "materialize-css/dist/css/materialize.min.css";

class MapImage extends Component{
    constructor(){
        super();
        this.state = {};
    }

    getStyle = () => {
        return{
            backgroundColor: "red",
            borderRadius: "1px",
        }
    }

    render(){
        return(
            <div className="cntainer" style={this.getStyle()}>
                <div className="row">
                    <div className="col s12">dsdsd</div>
                </div>
            </div>
        );
    }
}

export default MapImage;