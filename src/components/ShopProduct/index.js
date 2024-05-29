import React from 'react';
import { useSelector } from 'react-redux';
import ShopProductCard from '../ShopProductCard';

const ShopProduct = () => {
    const {shopProduct} = useSelector((s) => s)
    return (
        <div className='my-[60px] '>
            <div className="container">
                <div className="flex items-center flex-wrap gap-[69px] ">
                    {
                        shopProduct.map((el,idx) => <ShopProductCard el={el} key={idx}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ShopProduct;