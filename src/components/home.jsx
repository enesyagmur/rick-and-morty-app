import React, { useEffect, useState } from "react";
import Header from "./header";
import axios from "axios";
import "./component.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/episode"
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
            <h4>{item.name}</h4>
            <h5>{item.air_date}</h5>
            <p>{item.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
