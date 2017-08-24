import React, { Component } from 'react';

class VehicleCards extends Component {
  constructor() {
    super();
  }

  render() {
    console.log('PASSED DATA IN PROPS', this.props.vehicleData);
    return (
      <div className="row">
        {this.props.vehicleData.map((vehicle, i) => {
          return (
            <div key={i} className="card-column col-md-4">
              <div className="card">                
                <h2 className="card-title">Vehicle: {vehicle.name}</h2>
                <h4 className="card-subtitle text-muted">Model: {vehicle.model}</h4>
                <div className="card-block">
                  <h4 className="text-muted">Specs</h4>
                  <hr />
                  <p>Manufacturer: {vehicle.manufacturer}</p><hr />
                  <p>Class: {vehicle.vehicle_class}</p><hr />
                  <p>Passengers: {vehicle.passengers}</p><hr />
                  <p>Crew: {vehicle.crew}</p><hr />
                  <p>Length: {vehicle.length}</p><hr />
                  <p>Max Speed: {vehicle.max_atmosphering_speed}</p><hr />
                  <p>Cargo Capacity: {vehicle.cargo_capacity}</p><hr />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default VehicleCards;
