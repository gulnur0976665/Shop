import React from "react";
import sale from "../../assets/image/sale.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ShopProductCard = ({ el }) => {
    const dispatch = useDispatch()
  return (
    <Link to={`/shopDetails/${el.id}`} className=" max-w-[400px] h-[750px] bg-white border relative border-gray-200 rounded-lg shadow">
   {
    el.price > 3000 ?   <img src={sale} alt="sale" width={180} className="absolute top-[-7px] left-[-7Lpx]" /> : null
   }
      <img
        className="p-8 rounded-t-lg w-[100%] h-[530px] object-contain"
        src={el.image}
        alt="product image" />

      <div className="px-5 pb-5">
        <a href="#">
          <h5
          className="text-xl  font-semibold tracking-tight text-gray-900 ">
            {el.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <div
              className="star"
              style={{
                background: el.rating >= 1 ? "rgb(255, 200, 0)" : "gray",
              }}></div>
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
          </div>
          <span className="bg-blue-100 text-blue-800 text-xl font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {el.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex relative">
            <h2
              className={`text-xl font-bold text-gray-900 ${
                el.price > 3000 ? "line-through" : ""
              }`}>
              {el.price} com
            </h2>
            {el.price > 3000 ? (
              <h2 className="text-xl font-bold text-red-600 absolute top-[-15px] right-[-90px]">
                {el.price - (el.price / 100) * 20} com
              </h2>
            ) : null}
          </div>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add to cart
          </a>
        </div>
      </div>
    </Link>
  );
};

export default ShopProductCard;
