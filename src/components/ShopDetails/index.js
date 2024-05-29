import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ShopDetails = () => {
    const {shopProduct} = useSelector((s) => s)
    const {ProId} = useParams()
    const findShop = shopProduct.find((el => el.id === +ProId))
    console.log(findShop);
    let {title,image,countInStock,price,rating,description} = findShop
    return (
        <div>
            <div className="container">
                <div className="">
                    <img src={image} alt="img" width={370} className='rounded-[10px]'/>
                    <div className="">
                        <h1>{title}</h1>
                        <h2>{price}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;