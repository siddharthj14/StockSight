import React from "react";
import "./Form.css";

const Form = ({
  interval,
  handleIntervalChange,
  toDate,
  handleToDateChange,
  fromDate,
  handleFromDateChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div>
          <label>Select Interval:</label>
          <select value={interval} onChange={handleIntervalChange}>
            <option value="">Select Interval</option>
            <option value="1minute">1 Minute</option>
            <option value="30minute">30 Minutes</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div>
          <label>To Date:</label>
          <input type="date" value={toDate} onChange={handleToDateChange} />
        </div>
        <div>
          <label>From Date:</label>
          <input type="date" value={fromDate} onChange={handleFromDateChange} />
        </div>
      </div>
      <div className="btn-class">
        <button type="submit">Get Data</button>
      </div>
    </form>
  );
};

export default Form;
