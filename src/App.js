import React from "react";
import "./App.css";
import corona from "./images/image.png";
import { fetchData, countries } from "./api";

import { Cards, Chart, CountryPicker } from "./components";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const dataFromAPI = await fetchData();
    this.setState({ data: dataFromAPI });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log("fetchedData", fetchedData);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    return (
      <div className="container">
        <img className="image" src={corona} />
        <Cards props={this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
