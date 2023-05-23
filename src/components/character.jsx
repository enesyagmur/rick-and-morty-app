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
      console.log(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="cards">
        {data.map((item) => (
          <div
            className="cardCharacter
          "
            key={item.id}
          >
            <img src={item.image} />
            <h3>{item.name}</h3>
            <h5>{item.species}</h5>
            <p>{item.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
