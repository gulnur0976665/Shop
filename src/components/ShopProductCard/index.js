import React from "react";
import sale from "../../assets/image/sale.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

const ShopProductCard = ({ el }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { backet, favorite, kurs } = useSelector((s) => s);
  const someBacket = backet.some((item) => item.id === el.id);
  const someFavorite = favorite.some((item) => item.id == el.id);

  const addFavorite = (data) => {
    const findFavorite = favorite.find((item) => item.id === data.id);
    if (findFavorite) {
      let filterFavorite = favorite.filter((fav) => fav.id !== data.id);
      dispatch({ type: "FILTER_FAVORITE", payload: filterFavorite });
      // alert("error")
    } else {
      dispatch({ type: "CREATE_FAVORITE", payload: data });
    }
  };
  
  return (
    <div className=" w-[305px] h-[530px] bg-white border relative border-gray-200 rounded-lg shadow">
      {el.price > 35 ? (
        <img
          src={sale}
          alt="sale"
          width={130}
          className="absolute top-[-5px] left-[-5px]"
        />
      ) : null}

      <a
        // style={{ color: favorite ? "red" : "while" }}
        onClick={() => addFavorite(el)}
        className={`absolute top-[39px] right-[39px] text-[26px] ${
          someFavorite ? "text-red-600" : "text-white"
        } `}>
        <FaHeart />
      </a>

      <Link to={`/shopDetails/${el.id}`}>
        <img
          className="p-8 rounded-t-lg w-[100%] h-[380px] object-cover"
          src={el.image}
          alt="product image"
        />
      </Link>

      <div className="px-5 pb-5 ">
        <a href="#">
          <Link
            to={`/shopDetails/${el.id}`}
            className="text-xl  font-semibold tracking-tight text-gray-900 ">
            {el.title}
          </Link>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Link
            to={`/shopDetails/${el.id}`}
            className="flex items-center space-x-1 rtl:space-x-reverse">
            <div1
              className="star"
              style={{
                background: el.rating >= 1 ? "rgb(255, 200, 0)" : "gray",
              }}></div1>
            <div
              className="star"
              style={{
                background: el.rating >= 2 ? "rgb(255, 200, 0)" : "gray",
              }}></div>
            <div
              className="star"
              style={{
                background: el.rating >= 3 ? "rgb(255, 200, 0)" : "gray",
              }}></div>
            <div
              className="star"
              style={{
                background: el.rating >= 4 ? "rgb(255, 200, 0)" : "gray",
              }}></div>
            <div
              className="star"
              style={{
                background: el.rating >= 5 ? "rgb(255, 200, 0)" : "gray",
              }}></div>
          </Link>
          <span className="bg-blue-100 text-blue-800 text-[13px] font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {el.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex relative">
            <h2
              className={`text-[17px] font-bold text-gray-900 ${
                el.price > 35 ? "line-through" : ""
              }`}>
              {Math.round(el.price * kurs)}
              {kurs === 87.2 ? "сом" : kurs === 90.44 ? "рубль" : "$"}

              {/* {kurs === 90.44 ? "Рубль" : ""} */}
            </h2>

            {el.price > 35 ? (
              <h2 className="text-[17px] font-bold text-red-600 absolute top-[-15px] right-[-50px]">
                {Math.round(el.price * kurs - ((el.price * kurs) / 100) * 20)}
                {kurs === 87.2 ? "сом" : kurs === 90.44 ? "рубль" : "$"}
                {/* {kurs === 90.44 ? "Рубль" : ""} */}
              </h2>
            ) : null}
          </div>
          <button
            style={{ background: someBacket ? "red" : "blue" }}
            onClick={() =>
              someBacket ? nav(`/backet`) : dispatch({ type: "ADD_TO_BACKET", payload: el })
            }
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {someBacket ? "add to backet" : "add to card"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
