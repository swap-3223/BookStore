import React, { useContext } from 'react'
// import List from '../../public/List.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import { ThemeContext } from '../context/ThemeContext';
function FreeBook() {
  const {theme,book}=useContext(ThemeContext)
    const filterData = book.filter((data)=>{
       return data.category === "free"
    })
    // console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-41  ${theme === 'dark' ? 'bg-gray-950' : 'bg-white text-gray-950'}`}>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.el consequuntur facilis sed quod consectetur debitis adipisci repellendus, veritatis suscipit maxime. Quam, tempora expedita!</p>
    <div>
      <Slider {...settings}>
       {filterData.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>   
    </div>
     </>
  )
}

export default FreeBook