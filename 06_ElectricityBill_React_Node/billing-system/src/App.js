import React, { useState } from 'react';
import './App.css';

function App() {
  const [units, setUnits] = useState('');
  const [bill, setBill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const kwhUsage = calculateElectricityBill(units);
    setBill(`The total electricity bill for ${units} units of electricity is: Rs. ${kwhUsage}/-`);
  };

  const calculateElectricityBill = (units) => {
    const firstUnitCost = 3.50;
    const secondUnitCost = 4.00;
    const thirdUnitCost = 5.20;
    const fourthUnitCost = 6.50;

    let bill = 0;

    if (units <= 50) {
      bill = units * firstUnitCost;
    } else if (units > 50 && units <= 150) {
      bill = 50 * firstUnitCost + (units - 50) * secondUnitCost;
    } else if (units > 150 && units <= 250) {
      bill = 50 * firstUnitCost + 100 * secondUnitCost + (units - 150) * thirdUnitCost;
    } else {
      bill = 50 * firstUnitCost + 100 * secondUnitCost + 100 * thirdUnitCost + (units - 250) * fourthUnitCost;
    }

    return bill.toFixed(2);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Electricity Bill Calculator</span>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Electricity Units</th>
              <th scope="col">Cost per Unit (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>0-50</td>
              <td>3.50</td>
            </tr>
            <tr className="table-success">
              <th scope="row">2</th>
              <td>51-150</td>
              <td>4.00</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>151-250</td>
              <td>5.20</td>
            </tr>
            <tr className="table-success">
              <th scope="row">4</th>
              <td>251 & above</td>
              <td>6.50</td>
            </tr>
          </tbody>
        </table>
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              className="form-control"
              placeholder="Please Enter The Units"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
              step="0.01"
            />
            <button type="submit" className="btn btn-warning mt-2">Submit</button>
          </form>
        </div>
        <div className="output" style={{ fontSize: '24px', textAlign: 'center' }}>{bill}</div>
      </div>
    </div>
  );
}

export default App;
