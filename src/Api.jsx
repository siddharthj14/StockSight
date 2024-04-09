import React, { useEffect } from "react";
import axios from "axios";

const Api = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.upstox.com/v2/historical-candle/NSE_EQ%7CINE848E01016/month/2023-11-19/2022-11-12";
      const headers = {
        Accept: "application/json",
      };

      try {
        const response = await axios.get(url, { headers });
        console.log(response.data);
      } catch (error) {
        console.error(
          `Error: ${error.response.status} - ${error.response.data}`
        );
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API Response:</h1>
      <p>Please check the console for API response.</p>
    </div>
  );
};

export default Api;
