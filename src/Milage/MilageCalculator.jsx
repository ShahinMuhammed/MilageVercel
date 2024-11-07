import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MilageCalculator() {
  const [milage, setMilage] = useState(null);
  const mile = 70;
  const petrolPrice = 105.46;
  const [petrolLiter, setPetrolLiter] = useState(null);
  const [totalCost, setTotalCost] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setMilage(value);
  };

  const calculate = () => {
    let cost = milage / mile;
    setTotalCost(cost * petrolPrice);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPetrolLiter(totalCost / petrolPrice);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center mb-4 text-primary">Mileage Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Enter the Distance Travelled</label>
            <input 
              type="number" 
              name="Travelled" 
              onChange={handleChange} 
              className="form-control" 
              placeholder="Enter distance in km"
            />
          </div>
          <div className="d-grid gap-2 d-md-block text-center">
            <button 
              className="btn btn-primary me-2" 
              onClick={calculate}
            >
              Calculate
            </button>
          </div>
        </form>
        <div className="mt-4">
          <h5 className="text-center">
            <strong>Total Petrol Cost:</strong> <span className="text-success">{totalCost ? totalCost.toFixed(2) : '0.00'}</span>
          </h5>
          <h5 className="text-center">
            <strong>Total Petrol in Liters:</strong> <span className="text-info">{petrolLiter ? petrolLiter.toFixed(2) : '0.00'}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default MilageCalculator;
