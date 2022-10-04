import React from "react";
import { MenuItems } from "./MenuItems";
import { NavbarData } from "./navBarData";
import Logo from "./Logo";
import Favorites from "./Favorites";
import Listing from "./Listing";

const NavPc = () => {
  return (
    <div className="md:flex hidden">
      <div className="logo-div flex my-auto">
        <Logo />
      </div>
      <div className="nav-div ml-3 hidden md:flex p-2">
        <div className="nav-wrapper pl-44">
          <ul className="hidden md:flex">
            {NavbarData.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems items={menu} key={index} depthLevel={depthLevel} />
              );
            })}
          </ul>
        </div>
      </div>

      <div className="subs-div min-h-[20px] ">
        <ul className="flex p-7">
          <li className="my-auto">
            <Favorites />
          </li>
          <li className="my-auto hidden md:block">
            <Listing />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavPc;
