import React from "react";

import { BiUserCircle } from "react-icons/bi";

import "./Favorites.css";

const Favorites = () => {
  const handleFav = function () {
    console.log("test");
  };
  return (
    <div className="favorites-btn" onClick={handleFav}>
      <BiUserCircle size={25} />
    </div>
  );
};

export default Favorites;
