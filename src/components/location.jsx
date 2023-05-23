import React, { useEffect, useState } from "react";
import Header from "./header";
import axios from "axios";
import "./component.css";

const Location = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/location"
      );
      setData(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="cards">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <h5>{item.type}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
