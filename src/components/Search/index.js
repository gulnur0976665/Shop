import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ShopProductCard from "../ShopProductCard";

const Search = () => {
  const { search } = useSelector((s) => s);

  return (
    <div className="my-[27px]">
      <div className="container">
        <div className="flex items-center  mt-5 flex-wrap  gap-[49px]">
          {search.map((el, idx) => (
            <ShopProductCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
