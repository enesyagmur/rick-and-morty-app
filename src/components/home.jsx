import React from "react";

const Home = () => {
  const git = () => {
    window.location = "/character";
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={git}>Karakterler sayfasına git</button>
    </div>
  );
};

export default Home;
