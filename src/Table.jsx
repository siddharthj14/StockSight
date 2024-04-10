import React from "react";

const Table = ({ candlesData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h2>Candle Data:</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
            <th>Open Interest</th>
          </tr>
        </thead>
        <tbody>
          {candlesData.map((candle, index) => (
            <tr key={index}>
              <td>{formatDate(candle[0])}</td>
              <td>{candle[1]}</td>
              <td>{candle[2]}</td>
              <td>{candle[3]}</td>
              <td>{candle[4]}</td>
              <td>{candle[5]}</td>
              <td>{candle[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
