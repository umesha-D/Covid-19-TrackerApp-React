import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

import Navbar from "./Navbar";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      country: "worldwide",
      countryInfo: {},
      tableData: []
    };
  }

  async componentDidMount() {
    const call = await fetch("https://disease.sh/v3/covid-19/countries");
    const result = await call.json();
    console.log(result);
    const callWorld = await fetch("https://disease.sh/v3/covid-19/all");
    const resultWorld = await callWorld.json();

    this.setState({ countryInfo: resultWorld });
    const countries = result.map((country) => {
      return {
        name: country.country,
        id: country.countryInfo._id,
        value: country.countryInfo.iso2,
        cases: country.cases,
      };
    });
    const table = result.map((country) => {
      return {
        name: country.country,
        cases: country.cases,
      };
    });
    this.setState({ tableData: table });
    this.setState({ countries: countries });
    

    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems);
  }

  getCountry = async (e) => {
    const eventValue = e.target.value;
    await this.setState({ country: e.target.value });
    await console.log(this.state.country);

    if (eventValue === "worldwide") {
      const call = await fetch("https://disease.sh/v3/covid-19/all");
      const result = await call.json();

      this.setState({ countryInfo: result });
      console.log(result);
    } else {
      const call = await fetch(
        `https://disease.sh/v3/covid-19/countries/${eventValue}`
      );
      const result = await call.json();

      this.setState({ countryInfo: result });

      console.log(result);
    }
  };

  render = () => {
    return (
      <React.Fragment>
        <Navbar />
	<br />
        <div className="row">
          

          <div className="col s12 m8 l9">
            <select name="" id="" onChange={this.getCountry}>
              <option value="worldwide">World Wide</option>
              {this.state.countries.map((country, index) => {
                return (
                  <option key={index} value={country.value}>
                    {country.name}
                  </option>
                );
              })}
            </select>
            <div className="row">
              <Card
                title="Coronavirus Cases"
                icon="all_inclusive"
                today={this.state.countryInfo.todayCases}
                total={this.state.countryInfo.cases}
              />
              <Card
                title="Recovered"
                icon="insert_emoticon"
                today={this.state.countryInfo.todayRecovered}
                total={this.state.countryInfo.recovered}
              />
              <Card
                title="Deaths"
                icon="fitness_center"
                today={this.state.countryInfo.todayDeaths}
                total={this.state.countryInfo.deaths}
              />
            </div>
            
          </div>

          <div className="col s12 m4 l3">
            <h5 className="center">Live cases</h5>
            <table className="striped">
              <tbody>
                {[
                  ...this.state.tableData
                    .sort((a, b) => {
                      if (a.cases > b.cases) {
                        return -1;
                      } else {
                        return 1;
                      }
                    })
                    .slice(0, 15),
                ].map((country, index) => {
                  return (
                    <tr key={index}>
                      <td className="center center-align">{country.name}</td>
                      <td className="center center-align">{country.cases}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default App;
