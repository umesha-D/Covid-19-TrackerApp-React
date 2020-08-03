import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import Navbar from "./Navbar";
import Card from './Card';
import MapImage from './MapImage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      country: "worldwide",
      countryInfo: {}
    };
  }

  async componentDidMount() {
    const call = await fetch("https://disease.sh/v3/covid-19/countries");
    const result = await call.json();

    const countries = result.map((country) => {
      return {
        name: country.country,
        id: country.countryInfo._id,
        value: country.countryInfo.iso2,
      };
    });
    this.setState({ countries: countries });

    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
   
  }

  getCountry = async (e) => {
    const eventValue = e.target.value;
    await this.setState({ country: e.target.value });
    await console.log(this.state.country);

    
    if(eventValue === "worldwide"){
      const call = await fetch('https://disease.sh/v3/covid-19/all');
      const result = await call.json();

      this.setState({countryInfo: result});
       console.log(result);
    }else{
      const call = await fetch(`https://disease.sh/v3/covid-19/countries/${eventValue}`);
      const result = await call.json();

      this.setState({countryInfo: result});

       console.log(result);
    }
  };

  render = () => {
    return (
      <React.Fragment>
        <Navbar />
        <div className="row">
          <div className="col s12 m4 l3" style={{backgroundColor:"grey"}}>
            This content will be: 3-columns-wide on large screens,
            4-columns-wide on medium screens,
          </div>

          <div className="col s12 m8 l9">
            <select name="" id="" onChange={this.getCountry}>
              <option value="worldwide">World Wide</option>
              {this.state.countries.map( (country, index) => {
                return( 
                  <option key={index} value={country.value}>{country.name}</option>
                );
              } )}
            </select>
            <div className="row">
            <Card title="Coronavirus Cases" cases={12112} total={this.state.countryInfo.cases} critical={this.state.countryInfo.critical}/>
            <Card title="Recovered" cases={12112} total="2000" critical={this.state.countryInfo.critical} />
            <Card title="Deaths" cases={12112} total="2000" critical={this.state.countryInfo.critical} />
            </div>
            <MapImage />
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default App;
