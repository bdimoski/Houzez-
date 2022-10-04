import React from "react";

import { BiUserCircle } from "react-icons/bi";


const Favorites = () => {
  const handleFav = function () {
  };
  return (
    <div className="favorites-btn h-[100%] align-middle" onClick={handleFav}>
      <BiUserCircle size={30} />
    </div>
  );
};

export default Favorites;