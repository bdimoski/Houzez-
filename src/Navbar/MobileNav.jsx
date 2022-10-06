import { React, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import Logo from "./Logo";
import Favorites from "./Favorites";
import { MenuItems } from "./MenuItems";
import { NavbarData } from "./navBarData";
import Listing from "./Listing";
import './MobileNav.css'

const MobileNav = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  const [isOpenFavs, setIsOpenFavs] = useState(false);

  const handleNav = () => {
    setIsOpenHamburger(!isOpenHamburger);
    setIsOpenFavs(false);
  };

  const handleFav = () => {
    setIsOpenFavs(!isOpenFavs);
    setIsOpenHamburger(false);
  };

  return (
    <div className="flex justify-between items-center mx-auto">
      <div onClick={handleNav} className="block md:hidden">
        {isOpenHamburger ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>

      <div className="flex justify-between">
        <Logo />
      </div>

      <div onClick={handleFav} className="block md:hidden">
        {isOpenFavs ? <Favorites size={20} /> : <Favorites size={20} />}
      </div>

      <ul
        className={
          isOpenHamburger
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "ease-in-out duration-0 fixed left-[-100%]"
        }
      >
        <div onClick={handleNav} className="block py-6 w-full md:hidden">
          {isOpenHamburger ? (
            <AiOutlineClose size={20} className="mx-auto" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        {NavbarData.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>

      <ul
        className={
          isOpenFavs
            ? "favs fixed right-0 top-0 w-[40%] h-[20%] border-r border-r-gray-900 bg-white ease-in-out duration-500"
            : "ease-in-out duration-0 fixed left-[-100%]"
        }
      >
        <div onClick={handleFav} className="block py-6 w-full md:hidden">
          {isOpenFavs ? <AiOutlineClose size={20} className="mx-auto" /> : null}
        </div>
        <li>
          <Listing />
        </li>
        <li className="flex items-center p-4">
          <BiLockAlt />
          <span className="ml-2">Login</span>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
