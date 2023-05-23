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

  const search = (value) => {
    const result = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(result);
  };

  return (
    <div>
      <Header />
      <div className="searchBar">
        {" "}
        <input
          type="text"
          className="input"
          placeholder="search a character"
          onChange={(e) => search(e.target.value)}
        />
      </div>

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
