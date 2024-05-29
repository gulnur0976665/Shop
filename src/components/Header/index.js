import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <div className="py-[30px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-[40px] font-black">ShopVerse</Link>
          <div className="">
            <Link to={"/"} className="text-[25px] mx-[35px]">
              About
            </Link>
            <Link to={"/shop"} className="text-[25px] mx-[35px]">
              Shop
            </Link>
            <Link to={"/"} className="text-[25px] mx-[35px]">
              Categories
            </Link>
            <Link to={"/"} className="text-[25px] mx-[35px]">
              Help
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center relative">
              <a className="text-[30px] absolute left-2">
                <IoSearch />
              </a>
              <input
                type="text"
                placeholder="Search for “Phones”"
                className="py-[10px] px-[40px] rounded-[20px] bg-[#D9D9D9] placeholder:text-black"
              />
            </div>
            <a className="text-[40px]">
              <FaRegHeart />
            </a>
            <a className="text-[40px]">
              <LuShoppingBag />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
