import React from "react";

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
      <label>
        Select Interval:
        <select value={interval} onChange={handleIntervalChange}>
          <option value="">Select Interval</option>
          <option value="1minute">1 Minute</option>
          <option value="30minute">30 Minutes</option>
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </label>
      <label>
        To Date:
        <input type="date" value={toDate} onChange={handleToDateChange} />
      </label>
      <label>
        From Date:
        <input type="date" value={fromDate} onChange={handleFromDateChange} />
      </label>
      <button type="submit">Fetch Data</button>
    </form>
  );
};

export default Form;
