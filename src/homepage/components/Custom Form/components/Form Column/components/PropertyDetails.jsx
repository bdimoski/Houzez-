import React from "react";

const PropertyDetails = () => {
  return (
    <div className="property_details px-0.5 mb-[10px] w-[100%] flex-wrap items-center">
      <label
        htmlFor=""
        className="font-semibold text-[15px] pb-0 mb-0 cursor-pointer"
      >
        Property Details
      </label>
      <div className="max-w-[100%] relative flex w-[100%]">
        <select
          name="inqiury_type"
          id="form-field"
          className="bg-white font-light text-[#373a3c] border-[#dce0e0] border-2 min-h-[47px] py-[6px] px-[16px] w-[100%] max-w-[100%] rounded-sm flex-1"
        >
          <option value="Select type">Select type</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="Lot">Lot</option>
          <option value="Multi Family Home">Multi Family Home</option>
          <option value="Office">Office</option>
          <option value="Shop">Shop</option>
          <option value="Single Family Home">Single Family Home</option>
          <option value="Studio">Studio</option>
          <option value="Villa">Villa</option>
        </select>
      </div>
    </div>
  );
};

export default PropertyDetails;
