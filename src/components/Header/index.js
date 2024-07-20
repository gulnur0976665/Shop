import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { FaShopify } from "react-icons/fa";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { backet, favorite, shopProduct } = useSelector((s) => s);
  // console.log(shopProduct.filter((el) => el.title.includes("Love")));
  const dispatch = useDispatch();
  const nav = useNavigate();
  const KeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "SEARCH", payload: inputValue });
      nav("/search");
      setInputValue("");
    }
  };
  const onInputHandler = () => {
    dispatch({ type: "SEARCH", payload: inputValue });
    nav("/search");
  };
  return (
    <div className="py-[30px] sticky top-0 z-50 bg-[#c8c4c46d] backdrop:blur-sm">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a className="text-[35px] text-violet-700 ">
              <FaShopify />
            </a>
            <Link to={"/"} className="text-[40px] font-black">
              WomanShop
            </Link>
          </div>
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
          <select
            className="bg-transparent border-none outline-none text-[20px] font-semibold px-[20px]"
            onChange={(e) =>
              dispatch({ type: "KURS_PRODUCT", payload: e.target.value })
            }>
            <option className="" value="dollar">Dollar$</option>
            <option className="" value="rub">Rub</option>
            <option className="" value="com">Com</option>
          </select>

          <div className="flex items-center gap-5">
            <div className="flex items-center relative">
              <a className="text-[30px] absolute left-2">
                <IoSearch />
              </a>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => KeyDown(e)}
                onInput={() => onInputHandler()}
                value={inputValue}
                type="text"
                placeholder="Search for “Phones”"
                className="py-[10px] px-[40px]  outline-none rounded-[20px] bg-[#D9D9D9] placeholder:text-black"
              />
            </div>
            <a onClick={() => nav(`/favorite`)} className="text-[40px]">
              <FaRegHeart />
            </a>
            {favorite.length ? (
              <h1
                style={{
                  marginTop: "-35px",
                  marginLeft: "-28px",
                  background: "red",
                  color: "white",
                  width: "23px",
                  height: "23px",
                  textAlign: "center",
                  borderRadius: "50%",
                }}>
                {favorite.length}
              </h1>
            ) : null}
            <a onClick={() => nav("/backet")} className="text-[40px]">
              <LuShoppingBag />
            </a>
            {backet.length ? (
              <h1
                style={{
                  marginTop: "-35px",
                  marginLeft: "-28px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  textAlign: "center",
                  width: "23px",
                  height: "23px",
                }}>
                {backet.length}
              </h1>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
