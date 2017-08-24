import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card form">
        <div className="container-fluid">
          <h3>What is your name, pilot?</h3>
          <input placeholder="Enter your name" onChange={this.props.changeFunction} value={this.props.name} /><br />
          <button className="btn btn-primary" onClick={this.props.submitFunction}>Submit</button>
          <h2>{this.props.submittedName}</h2>
        </div>
      </div>
    );
  }
}

export default Form;
