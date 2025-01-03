import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Cards({ item }) {
  // console.log(item);
const {theme}=useContext(ThemeContext)  

  return (
    <>
      <div className={`mt-4 my-3 p-3  ${theme === 'dark' ? 'bg-gray-950' : 'bg-white text-gray-950'}`}>
        <div className="card  w-60  shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between cursor-pointer">
              <div className="badge badge-outline hover:text-white hover:bg-red-500 duration-200">₹ {item.price}</div>
              <div className="badge badge-outline hover:text-white hover:bg-red-500 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
