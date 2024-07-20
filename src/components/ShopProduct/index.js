import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopProductCard from "../ShopProductCard";

const ShopProduct = () => {
  const { shopProduct } = useSelector((s) => s);
  const dispatch = useDispatch();
  return (
    <div className="my-[25px] ">
      <div className="container">
        <select
          onChange={(e) =>
            dispatch({ type: "SORT_PRODUCT", payload: e.target.value })
          }
          className="border-[3px] px-[70px] mb-[30px]">
          <option value=""></option>
          <option value="expensive">Expensive</option>
          <option value="cheap">Cheap</option>
          <option value="1-5">Rating 1-5</option>
          <option value="5-1">Rating 5-1</option>
        </select>
        <div className="flex items-center   flex-wrap  gap-[49px] ">
          {shopProduct.map((el, idx) => (
            <ShopProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
