import React from "react";

const Home = () => {
  const git = () => {
    window.location = "/character";
  };
  return (
    <div>
      <button onClick={git}>Karakterler</button>
    </div>
  );
};

export default Home;
