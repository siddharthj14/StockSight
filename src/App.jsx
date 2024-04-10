import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Form from "./Components/Form/Form";
import Table from "./Components/Table/Table";
import BarChart from "./Charts/BarChart";
import LineGraph from "./Charts/LineGraph";
import PieChart from "./Charts/PieChart";

const App = () => {
  const [interval, setInterval] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [candlesData, setCandlesData] = useState([]);

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const fetchData = async () => {
    const url =
      "https://api.upstox.com/v2/historical-candle/NSE_EQ%7CINE848E01016/";
    const headers = {
      Accept: "application/json",
    };

    try {
      const response = await axios.get(
        `${url}${interval}/${toDate}/${fromDate}`,
        { headers }
      );
      setCandlesData(response.data.data.candles);
    } catch (error) {
      console.error(`Error: ${error.response.status} - ${error.response.data}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="container">
      <h1>Historical Candle Data</h1>
      <Form
        interval={interval}
        handleIntervalChange={handleIntervalChange}
        toDate={toDate}
        handleToDateChange={handleToDateChange}
        fromDate={fromDate}
        handleFromDateChange={handleFromDateChange}
        handleSubmit={handleSubmit}
      />

      {candlesData.length > 0 && (
        <>
          <Table candlesData={candlesData} />
          <BarChart
            data={candlesData.map((candle) => [candle[1], candle[0]])}
            title="Open vs Time"
          />
          <BarChart
            data={candlesData.map((candle) => [candle[2], candle[0]])}
            title="High vs Time"
          />
          <BarChart
            data={candlesData.map((candle) => [candle[3], candle[0]])}
            title="Low vs Time"
          />
          <BarChart
            data={candlesData.map((candle) => [candle[4], candle[0]])}
            title="Close vs Time"
          />
          <LineGraph
            data={candlesData.map((candle) => [candle[5], candle[0]])}
            title="Volume vs Time"
          />
          <PieChart
            data={[
              candlesData[0][1],
              candlesData[0][2],
              candlesData[0][3],
              candlesData[0][4],
            ]}
            title="OHLC"
          />
        </>
      )}
    </div>
  );
};

export default App;
