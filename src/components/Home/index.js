import React from "react";
import motoBg from "../../assets/image/motoBg.png";
import watch from '../../assets/image/watch.png'
const Home = () => {
  return (
    <div className="">
      <div
        className="container"
        style={{
          background: `url("${motoBg}") no-repeat center/cover`,
          minHeight: "80vh",
          borderRadius: "50px",
        }}>
        <div className="flex items-center justify-between">
          <div className="text-white ml-[50px] flex items-start gap-5 justify-center flex-col">
            <h2 className="text-[35px] font-medium">Sale up to 20% off</h2>
            <h1 className="text-[55px] font-black">Apple Watch Ultra 2</h1>
            <p className="text-[23px]">
              The most rugged and capable Apple Watch pushes <br /> the limits again.
              Featuring the all-new S9 SiP.
            </p>
            <div className="flex gap-4">
              <button className="py-[6px] px-[35px] text-[20px] bg-orange-600 rounded-[20px]">Shop Now</button>
              <button className="py-[6px] px-[35px] text-[20px] text-black bg-white rounded-[20px]">Learn More</button>
            </div>
          </div>
       <img src={watch} alt="watch" width={590}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
