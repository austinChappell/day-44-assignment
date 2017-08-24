import React, { Component } from 'react';

class Jumbotron extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Star Wars</h1>
        <hr />
        <h6>The vehicles of Star Wars</h6>
      </div>
    );
  }
}

export default Jumbotron;
