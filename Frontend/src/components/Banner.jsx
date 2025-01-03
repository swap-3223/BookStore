import React, { useContext } from "react";
import BannerImg from "/BannerImg.png";
import { ThemeContext } from "../context/ThemeContext";
function Banner() {
  const {theme}=useContext(ThemeContext)
  return (
    <>
      <div className={`max-w-screen-2xl container mx-auto mt-14 md:px-20 px-4 flex flex-col md:flex-row 
      ${theme === 'dark' ? 'bg-gray-950' : 'bg-white text-gray-950'}
      `}>
        <div className="w-full md:w-1/2 md:mt32 mt-12 order-2 md:order-1 ">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              Hello,welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur coroporis at veniam esst voluptas animi!
            </p>
            <label className={`input input-bordered flex items-center gap-2  ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200 text-gray-950'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow " placeholder="E-mail" />
            </label>
          </div>
          <button className="btn btn-secondary mt-9 mb-5">Send E-mail</button>

        </div>
        <div className="w-full md:w-1/2 order-1">
            <img src={BannerImg}></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
