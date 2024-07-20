import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import HomeProduct from "../HomeProduct";
import motoBg from "../../assets/image/homeimg3.jpg";
import bg1 from "../../assets/image/bg1.jpg";
import bg2 from "../../assets/image/bg2.gif";
import bg3 from "../../assets/image/bg4.jpg";
import bg from "../../assets/image/bg3.jpg";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

const Home = () => {
  const images = [bg2, bg, bg1, bg3, motoBg];
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const keydownHandler = (e) => {
      if (swiper && e.keyCode == 32) {
        e.preventDefault();
        swiper.slideNext();
      }
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [swiper]);
  return (
    <div className="my-[30px]">
      <div className="container">
        <div className=" flex justify-around items-center">
          <div className="w-[100%]">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              pagination={true}
              className="mySwiper"
              cssMode={true}
              loop={false}
              scrollbar={{ draggable: true }}
              modules={[Autoplay, Navigation, Pagination, Keyboard]}
              mousewheel={true}
              onSwiper={setSwiper}
              slidesPerView={1}>
              {images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      className="rounded-t-lg w-[100%] h-[500px] rounded-[20px] object-cover "
                      src={image}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <>
        <HomeProduct />
      </>
    </div>
  );
};

export default Home;
