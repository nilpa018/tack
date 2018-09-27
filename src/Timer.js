import React, { Component } from 'react';

class Clock extends Component {
	constructor(){
		super();
		this.state = {
			count: 0
		}
}
componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }
    tick() {
    this.setState({
    	count: this.state.count + 1
    });
	console.log("un update a eu lieu");
  }

	render() {
		return (
			<div>
			<h1>Vous avez ouvert cette page depuis {this.state.count} secondes</h1>
			</div>
		);
	}
}

export default Clock;
