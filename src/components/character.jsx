import React from "react";

const Character = () => {
  const git = () => {
    window.location = "/";
  };
  return (
    <div>
      <h1>karakterler</h1>
      <button onClick={git}>Home sayfasına git</button>
    </div>
  );
};

export default Character;
