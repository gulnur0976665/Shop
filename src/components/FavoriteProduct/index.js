import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const FavoriteProduct = ({ el }) => {
  const { backet } = useSelector((s) => s);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const someBacket = backet.some((bac) => bac.id === el.id);
  return (
    <div class="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow  ">
      <a
        onClick={() => dispatch({ type: "DELETE_FAVORITE", payload: el.id })}
        className=" absolute top-[14px] right-[15px] text-[20px] font-bold bg-white py-[5px] px-[5px] rounded-[50px] border-gray-700 border-[2px] cursor-pointer">
        <GoX />
      </a>
      <Link to={`/shopDetails/${el.id}`}>
        <img
          class=" rounded-[8px] w-full h-[400px] object-cover"
          src={el.image}
          alt=""
        />
      </Link>
      <div class="p-5">
        <a href="#">
          <Link
            to={`/shopDetails/${el.id}`}
            class="text-xl font-bold tracking-tight text-black">
            {el.title}
          </Link>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Link
            to={`/shopDetails/${el.id}`}
            className="flex items-center space-x-1 rtl:space-x-reverse">
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
          </Link>
          <span className="bg-blue-100 text-blue-800 text-[13px] font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {el.rating}
          </span>
        </div>
        <div className="flex relative mb-4">
          <h2
            className={`text-[17px] font-bold text-gray-900 ${
              el.price > 3000 ? "line-through" : ""
            }`}>
            {el.price} com
          </h2>

          {el.price > 3000 ? (
            <h2 className="text-[17px] font-bold text-red-600 absolute top-[-15px] left-[70px] ">
              {el.price - (el.price / 100) * 20} c
            </h2>
          ) : null}
        </div>
        <button
          onClick={() =>
            someBacket
              ? nav(`/backet`)
              : dispatch({ type: "ADD_TO_BACKET", payload: el })
          }
          href="#"
          class={`inline-flex items-center px-20 py-2 text-sm font-medium text-center text-white ${
            someBacket ? "bg-red-600" : "bg-orange-600"
          } rounded-[6px] focus:ring-[3px] focus:outline-none `}>
          {someBacket ? "   add to backet" : "   add to card"}
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FavoriteProduct;
