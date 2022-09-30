import React from "react";
import Baths from "./components/Baths";
import Beds from "./components/Beds";
import Email from "./components/Email";
import FirstName from "./components/FirstName";
import InquiryType from "./components/InquiryType";
import LastName from "./components/LastName";
import MaxPrice from "./components/MaxPrice";
import MinSize from "./components/MinSize";
import PropertyDetails from "./components/PropertyDetails";
import SubmitButton from "./components/SubmitButton";
import YourInformation from "./components/YourInformation";

const FormColumn = () => {
  return (
    <div className="col-2 max-w-[550px] flex relative">
      <div className="form-layout bg-white w-[100%] flex relative">
        <div className="form-containerjustify-center items-center px-12 pt-12 pb-7">
          <form action="" className="w-[100%] relative ">
            <div className="flex flex-wrap px-auto mb-[10px]">
              <InquiryType />
              <YourInformation />
              <FirstName />
              <LastName />
              <Email />
              <PropertyDetails />
              <MaxPrice />
              <MinSize />
              <Beds />
              <Baths />
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormColumn;
