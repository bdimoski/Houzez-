import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter col-span-2 pt-8 md:pt-2">
      <p className="font-medium text-[18px]"> Newsletter</p>
      <form className="md:flex md:flex-row items-center flex">
        <input
          className="w-full p-2 mr-4 rounded-md mb-4"
          type="email"
          placeholder="Enter your email"
        />
        <button className="md:px-14 px-5 py-2 my-auto cursor-pointer bg-[#00aeef] rounded font-medium">
          Submit
        </button>
      </form>
      <p className="py-4 text-[14px] font-light leading-relaxed">
        Houzez is a premium WordPress theme for real estate where modern
        aesthetics are combined with tasteful simplicity.
      </p>
    </div>
  );
};

export default Newsletter;
