import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BacketProduct = ({ el }) => {
  const dispatch = useDispatch();
  const { kurs } = useSelector((s) => s);
  return (
    <tr class="bg-white border-b text-[17px]  hover:bg-gray-50 ">
      <td class="p-4">
        <img
          src={el.image}
          class="w-16 md:w-32 max-w-full max-h-full"
          alt="Apple Watch"
        />
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-black">
        {el.title}
      </td>
      <td class="px-6 py-4">
        <div class="flex items-center">
          <button
            onClick={() =>
              dispatch({ type: "DECREMENT_QUANTITY", payload: el.id })
            }
            class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
            type="button">
            <span class="sr-only">Quantity button</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <div>
            <h1 class="bg-gray-50 w-14 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:placeholder-gray-400 dark:text-black text-center dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {el.quantity}
            </h1>
          </div>
          <button
            onClick={() =>
              dispatch({ type: "INCREMENT_QUANTITY", payload: el.id })
            }
            class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:border-gray-600 dark:hover:border-gray-600 "
            type="button">
            <span class="sr-only">Quantity button</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
        </div>
      </td>
      <td class="px-6 py-4 font-semibold text-black">
        <div className="flex relative">
          <h2
            className={`text-[17px] font-bold ${
              el.price > 3000 ? "text-red-600" : ""
            } `}>
            {el.price > 35
              ? Math.round(el.price * el.quantity * kurs) -
                (el.price / 100) * 20
              : el.price * el.quantity}
            {kurs === 87.2 ? "сом" : kurs === 90.44 ? "рубль" : "$"}
          </h2>
        </div>
      </td>
      <td class="px-6 py-4">
        <button
          onClick={() => dispatch({ type: "DELETE_BACKET", payload: el.id })}
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BacketProduct;
