import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import { FaHeart } from "react-icons/fa";

const ShopDetails = () => {
  const dispatch = useDispatch();
  const { shopProduct, backet, favorite } = useSelector((s) => s);
  const { ProId } = useParams();
  const nav = useNavigate();
  const findShop = shopProduct.find((el) => el.id === +ProId);
  
  const someBacket = backet.some((item) => item.id === findShop.id);
  const someFavorite = favorite.some((item) => item.id === findShop.id);
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
  console.log(findShop);
  let { title, image, countInStock, price, rating, description } = findShop;
  return (
    <div className="my-[40px]">
      <div className="container">
        <div className="flex  items-start gap-10">
          <Zoom>
            <img src={image} alt="img" width={370} className="rounded-[10px]" />
          </Zoom>
          <div className="flex items-start flex-col gap-2">
            <h1 className="text-[40px] font-bold">{title}</h1>

            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <div
                  className="star"
                  style={{
                    background: rating >= 1 ? "rgb(255, 200, 0)" : "gray",
                  }}></div>
                <div
                  className="star"
                  style={{
                    background: rating >= 2 ? "rgb(255, 200, 0)" : "gray",
                  }}></div>
                <div
                  className="star"
                  style={{
                    background: rating >= 3 ? "rgb(255, 200, 0)" : "gray",
                  }}></div>
                <div
                  className="star"
                  style={{
                    background: rating >= 4 ? "rgb(255, 200, 0)" : "gray",
                  }}></div>
                <div
                  className="star"
                  style={{
                    background: rating >= 5 ? "rgb(255, 200, 0)" : "gray",
                  }}></div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {rating}
              </span>
            </div>

            <p className="text-[30px]">{description}</p>
            <div
              className={`flex gap-2 px-[16px] py-[8px] border-[2px] rounded-[10px] ${
                price > 3000 ? "border-red-600" : "border-none"
              }`}>
              <h2
                className={`text-[20px] font-bold ${
                  price > 3000 ? "text-gray-300" : "text-orange-500"
                } ${price > 3000 ? "line-through" : ""}`}>
                {price} com
              </h2>
              {price > 3000 ? (
                <h2 className="text-[20px] font-bold text-red-600">
                  {price - (price / 100) * 20} c
                </h2>
              ) : null}
            </div>
            <div className="flex items-center gap-5 mt-5">
              <h1 className=" border-gray-400 border-[2px] px-[16px] py-[4px] rounded-[7px]">
                M
              </h1>
              <h1 className=" border-gray-400 border-[2px] px-[16px] py-[4px] rounded-[7px]">
                S
              </h1>
              <h1 className=" border-gray-400 border-[2px] px-[16px] py-[4px] rounded-[7px]">
                L
              </h1>
              <h1 className=" border-gray-400 border-[2px] px-[16px] py-[4px] rounded-[7px]">
                XL
              </h1>
            </div>
            <div className="flex items-center gap-3 mt-7">
              <button
                onClick={() =>
                  someBacket
                    ? nav(`/backet`)
                    : dispatch({ type: "ADD_TO_BACKET", payload: findShop })
                }
                className={`${
                  someBacket ? "bg-red-500" : "bg-orange-500"
                } outline-none px-[100px] py-[9px] rounded-[10px] font-bold text-[20px] text-white`}>
                {someBacket ? "add to backet" : "add to card"}
              </button>
              <a
                onClick={() =>
                  addFavorite(findShop)
                }
                className={`text-[30px] border-gray-700 border-[2px] px-[5px] py-[5px] rounded-[50px] ${
                  someFavorite ? "text-red-600" : "text-gray-400"
                }`}>
                <FaHeart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
