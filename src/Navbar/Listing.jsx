import React from "react";
import { useLocation } from "react-router-dom";

import "./Listing.css";

const Listing = () => {
  const curLocation = useLocation();
  return (
    <div>
      <button
        className={curLocation.pathname === "/" ? "transBtn" : "listingBtn"}
      >
        CREATE A LISTING
      </button>
    </div>
  );
};

export default Listing;