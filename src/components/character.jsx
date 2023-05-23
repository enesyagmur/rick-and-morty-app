import React, { useEffect, useState } from "react";
import Header from "./header";
import axios from "axios";
import "./component.css";

const Character = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      setData(response.data.results);
    };
    fetchData();
  }, []);

  const git = () => {
    window.location = "/";
  };
  return (
    <div>
      <Header />
      <div className="cards">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <h4>{item.name}</h4>
            <h5>{item.species}</h5>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
