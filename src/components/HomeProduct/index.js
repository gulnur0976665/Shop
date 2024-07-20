import React from 'react';
import ShopProductCard from '../ShopProduct'
import { useSelector } from 'react-redux';
const HomeProduct = () => {
  const { shopProduct } = useSelector((s) => s);
  return (
    <div className='my-[50px]'>
      <div className="container">
        <div className="">
          <h1 className="font-bold text-[35px]">Товары со скидкой:</h1>
          <div className="flex items-center flex-wrap">
            {shopProduct.map((el) =>
              el.price > 35 ? <ShopProductCard el={el} /> : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;