import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";

const LiniarGraph = ({ type, country }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(`https://api.covid19api.com/dayone/country/${country}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: `${type}`,
    xAxis: {
      type: 'timeCat',
      tickCount: 10,
    },
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export default LiniarGraph;
