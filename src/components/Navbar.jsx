
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { BsShop } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="z-20">
      {!openMenu ? <CiMenuBurger
        size={28}
        onClick={() => setOpenMenu((prev) => !prev)}
        className="cursor-pointer"
      /> : <RxCross1 size={28}
        onClick={() => setOpenMenu((prev) => !prev)}
        className="cursor-pointer" />}
      {openMenu && (
        <div className="flex flex-col font-semibold text-xl absolute text-white bg-black left-0 justify-center items-center gap-8 h-[calc(100vh-80px)]  border-4 w-full">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {

  return (
    <div className="h-20 px-6 py-4 relative ">
      {/* Mobile  */}
      <div className="flex justify-between items-center md:hidden">
        <Link to="/">Ecom</Link>
        <Menu />
      </div>
      {/* Big Screens  */}
      <div className="items-center gap-8 justify-between hidden md:flex ">
        {/* Left  */}
        <div className="flex w-1/3 lg:w-1/2 items-center justify-between ">
          <div className="flex items-center gap-4">
            <BsShop size={32} />
            <Link to="/">
              <div className="font-medium tracking-widest text-xl ">ECOM</div>
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        {/* Right  */}
        <div className="flex w-2/3 lg:w-1/2 gap-8 justify-between items-center ">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;