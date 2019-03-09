import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
	state = { lat: null, errorMessage: null };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		if (this.state.errorMessage && !this.state.lat) {
			return <h5>Error: {this.state.errorMessage}</h5>;
		}

		return <Spinner message="Please accept loaction request" />;
	}
}

export default App;
