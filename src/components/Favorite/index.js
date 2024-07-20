import React from 'react';
import { useSelector } from 'react-redux';
import FavoriteProduct from '../FavoriteProduct';
import { FaV } from 'react-icons/fa6';

const Favorite = () => {
    const {favorite} = useSelector((s) => s)
    console.log(favorite,'fav');
    return (
        <div className='my-[30px]'>
            <div className="container">
                <div className=" flex flex-wrap gap-[41px] ">
                    {
                        favorite.map((el,idx) => <FavoriteProduct el={el} key={idx}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;