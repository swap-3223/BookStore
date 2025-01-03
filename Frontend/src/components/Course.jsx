import React, { useContext } from 'react'
import List1 from '../../public/List1.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
function Course() {
  const {theme}=useContext(ThemeContext)
  return (
    <>
        <div className={`max-w-screen-2xl container mx-auto  md:px-20 px-4  ${theme === 'dark' ? 'bg-gray-950' : 'bg-white text-gray-950'}`}>
            <div className='mt-11 py-10 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>We're delight to have you <span className='text-pink-500'>Here! :)</span></h1>
                <p className='mt-12'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, recusandae. Accusantium doloremque rerum corrupti commodi itaque saepe id dolores, exercitationem unde, necessitatibus, dolor sint. Voluptatum porro beatae necessitatibus esse totam nulla sint voluptatibus facilis! Mollitia, assumenda est possimus eos quae temporibus odit sapiente, vel, ea tenetur minus officiis voluptatibus aliquid!</p>
                <Link to='/'>
                <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                </Link>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {List1.map((item)=>(
                <Cards key={item.id} item={item}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Course