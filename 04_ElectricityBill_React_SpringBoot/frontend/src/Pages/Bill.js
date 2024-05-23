import React, { useState } from 'react';
import './Bill.css';

export default function Bill() {
  const [units, setUnits] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:8082/electricity/calculate/${units}`)
      .then((res) => res.json())
      .then((result) => setUnits(result));
    console.log('units consumed are ' + units);
  }

  return (
    <div className='body'>
      <div className='card'>
        <h1>BILL</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='units'>Enter number of units consumed</label>
          <input
            type='number'
            id='units'
            onChange={(e) => setUnits(e.target.value)}
          />
          <button type='submit'>Calculate</button>
        </form>
        <div className='result-card'>
          <p>Total Bill:</p>
          <p className='total-bill'>{units}</p>
        </div>
      </div>
    </div>
  );
}
