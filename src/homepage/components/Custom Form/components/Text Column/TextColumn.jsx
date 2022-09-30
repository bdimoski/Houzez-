import React from "react";

const TextColumn = () => {
  return (
    <div className="col-1 p-5 m-auto relative flex flex-col justify-center max-w-[450px] text-white">
      <h1 className="text-[35px] text-left mb-2.5 leading-tight">
        Create Custom Capture Forms And Manage Leads With the Integrated Houzez
        CRM
      </h1>
      <p className="text-lg font-light text-left mb-4 text-[#D5DFE7]">
        The Inquiry Form widget allows you to design unique forms to capture
        your leads. It connects with Houzez CRM and your email inbox to keep
        your work everything on track.
      </p>

      <div className="div_line py-4 flex flex-col">
        <span className="w-[20%] border-red-600"></span>
      </div>
    </div>
  );
};

export default TextColumn;
