import React from "react";
import img1 from "../../../../../assets/grid1.jpg";
import img2 from "../../../../../assets/grid2.jpg";
import img3 from "../../../../../assets/grid3.jpg";
import img4 from "../../../../../assets/grid4.jpg";
import img5 from "../../../../../assets/grid5.jpg";
import img6 from "../../../../../assets/grid6.jpg";
import img7 from "../../../../../assets/grid7.jpg";
import img8 from "../../../../../assets/grid8.jpg";
import img9 from "../../../../../assets/grid9.jpg";
import "./GridImages.css";

const GridImages = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] flex m-auto">
        <div className="grid_wrapper md:grid md:grid-flow-row md:grid-rows-3 md:grid-cols-2 grid grid-flow-row grid-cols-1 gap-3 w-full text-center">
          <div className="Slika1 w-[100%] md:flex flex h-[258px] md:h-auto p-2 rounded">
            <div
              className="w-[100%] relative bg-cover bg-no-repeat bg-center hover-effect-img"
              style={{ backgroundImage: `url(${img1})` }}
            >
              <div className="details absolute md:right-[42%] md:top-[41%] right-[35%] top-[45%] text-white z-[1] w-auto text-center">
                <div className="title flex uppercase text-[20px]">Aparment</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  17 Properties
                </div>
              </div>
            </div>
          </div>
          <div className="Slika2-i-3 w-[100%] md:flex flex h-[258px] md:h-auto p-2 gap-7 rounded">
            <div
              className="md:w-[50%] relative w-full h-auto md:h-[258px] bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img2})` }}
            >
              <div className="details absolute md:right-[35%] md:top-[40%] right-[25%] top-[40%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">Villa</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  10 Properties
                </div>
              </div>
            </div>
            <div
              className="md:w-[50%] relative w-full md:h-[258px] h-auto bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img3})` }}
            >
              <div className="details absolute md:right-[12%] md:top-[40%] right-[2%] top-[40%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">
                  Single Family Home
                </div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  10 Properties
                </div>
              </div>
            </div>
          </div>
          <div className="Slika2-i-3 w-[100%] md:flex flex h-[258px] md:h-auto p-2 gap-7">
            <div
              className="md:w-[50%] relative w-full h-auto md:h-[258px] bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img4})` }}
            >
              <div className="details absolute md:right-[35%] md:top-[40%] right-[25%] top-[40%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">Studio</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  7 Properties
                </div>
              </div>
            </div>
            <div
              className="md:w-[50%] relative w-full h-auto md:h-[258px] bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img5})` }}
            >
              <div className="details absolute right-[25%] top-[40%] md:right-[35%] md:top-[40%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">Shop</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  3 Properties
                </div>
              </div>
            </div>
          </div>
          <div className="Slika1 w-[100%] md:flex flex h-[258px] md:h-auto p-2">
            <div
              className="w-[100%] relative bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img6})` }}
            >
              <div className="details absolute md:right-[45%] md:top-[40%] right-[40%] top-[41%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">Office</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  3 Properties
                </div>
              </div>
            </div>
          </div>

          {/* Slika7 */}
          <div className="Slika1 w-[100%] md:flex flex h-[258px] md:h-auto p-2">
            <div
              className="w-[100%] relative bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img7})` }}
            >
              <div className="details absolute md:right-[45%] md:top-[40%] right-[40%] top-[41%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">Condo</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  1 Property
                </div>
              </div>
            </div>
          </div>

          {/* Slika 8 i 9 */}
          <div className="Slika2-i-3 w-[100%] md:flex flex h-[258px] md:h-auto p-2 gap-7">
            <div
              className="md:w-[50%] relative w-full h-auto md:h-[258px] bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img8})` }}
            >
              <div className="details absolute md:right-[40%] md:top-[40%] right-[30%] top-[40%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">Lot</div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  1 Property
                </div>
              </div>
            </div>

            {/* slika 9 */}
            <div
              className="md:w-[50%] relative w-full h-auto md:h-[258px] bg-cover bg-no-repeat bg-center hover-effect-img rounded"
              style={{ backgroundImage: `url(${img9})` }}
            >
              <div className="details absolute md:right-[12%] md:top-[40%] right-[2%] top-[40%] text-white z-[1] w-auto text-center">
                <div className="title uppercase text-[20px]">
                  Multi Family Home
                </div>
                <div className="Subtitle font-light text-[#D8D8DC] text-[12px] uppercase">
                  1 Property
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridImages;
