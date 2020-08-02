import React, { Component } from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      countries: [],
      country: "worldwide",
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      const elems = document.querySelectorAll("select");
      M.FormSelect.init(elems, {});
      this.setState({ isLoading: false });
    }, 3000);

    const call = await fetch("https://disease.sh/v3/covid-19/countries");
    const result = await call.json();

    const countries = result.map( (country) => {
      return {
        name:  country.country,
        id:    country.countryInfo._id,
        value: country.countryInfo.iso2,
      }
    })
    this.setState({countries:countries});
  }

   getCountry = async (e) => {
     await this.setState({country: e.target.value});
     await console.log(this.state.country)
  }

  render = () => {
    return (
      <div className="App">
        <h3>COVID-19 TRACKER</h3>

        <div className="input-field col s12">
          <select onChange={this.getCountry} >
            <option selected value="worldwide">World Wide</option>;
            {this.state.countries.map((country, index) => {
              return <option key={index}  value={country.value}>{country.name}</option>;
            })}
          </select>
        </div>
        


      </div>
    );
  };
}

export default App;
