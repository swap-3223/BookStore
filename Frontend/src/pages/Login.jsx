// import React from "react";
// import { Link } from 'react-router-dom'
// import {useForm} from 'react-hook-form'

// function Login() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm();

//       const onSubmit = (data) => console.log(data)
      
//   return (
//     <>
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//               ✕
//             </button>
//           </form>
//           <h3 className=" text-lg font-semibold">Login</h3>

//           <h2 className="py-4">Email</h2>
//             <input 
//             type="email" 
//             placeholder="enter your email" 
//             className="text-sm px-5 py-1 h-10 w-72 bg-inherit outline-none border border-gray-600 rounded-md" 
//             {...register("email", { required: true })}/>
//             <br/>
//             {errors.email && <span>This field is required</span>}

//             <h2 className="py-4">Password</h2>
//             <input type="password" placeholder="enter your password" className="text-sm px-5 py-1 h-10 w-72 bg-inherit outline-none border border-gray-600 rounded-md" 
//             {...register("password", { required: true })} />
//             <br/>
//             {errors.password && <span>This field is required</span>}

//             <div className="flex justify-around mt-5">
//                 <button className="px-4 py-1 rounded-md bg-pink-500 hover:scale-105">Login</button>
//                 <p>Not registerd? <Link to="/signup" className="underline text-blue-500 cursor-pointer">signup</Link></p>
//             </div>

//         </div>
//       </dialog>
//     </>
//   );
// }

// export default Login;

import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:3000/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        // alert('Login successful')
        toast.success('Login Successful');

      }
    localStorage.setItem("User",JSON.stringify(res.data.user))
      
    })
    .catch((err)=>{
      if(err.response){
        console.log(err)
        // alert("error: "+ err.response.data.message)
        toast.error("error: "+ err.response.data.message);
        
      }
      
    })
    // Close the dialog after successful submission
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold">Login</h3>
            <h2 className="py-4">Email</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="text-sm px-5 py-1 h-10 w-72 bg-inherit outline-none border border-gray-600 rounded-md"
              {...register("email", { required: "Email is required" })}
            />
            <br/>
            {errors.email && (
              <span className="text-red-500 text-sm ml-10">{errors.email.message}</span>
            )}

            <h2 className="py-4">Password</h2>
            <input
              type="password"
              placeholder="Enter your password"
              className="text-sm px-5 py-1 h-10 w-72 bg-inherit outline-none border border-gray-600 rounded-md"
              {...register("password", { required: "Password is required" })}
            />
            <br/>
            {errors.password && (
              <span className="text-red-500 text-sm ml-10">{errors.password.message}</span>
            )}

            <div className="flex justify-around mt-5">
              <button
                type="submit"
                className="px-4 py-1 rounded-md bg-pink-500 hover:scale-105"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default Login;
