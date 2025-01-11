import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
// using fetch 
      // const onSubmit = async (data) => {
      //   const userInfo={
      //     fullName: data.fullName,
      //     email:data.email,
      //     password:data.password
      //   }
      //   await fetch('http://localhost:3000/user/Signup',
      //     {method: "post", 
      //       headers: {
      //     "Content-Type": "application/json", // Specify the content type
      //   },
      //   body: JSON.stringify(userInfo),
      // },)
      //   .then((res)=>{
      //     console.log(res.data)
      //     if(res.data)
      //       alert('signup successful')
      //   })
      //   .catch((err)=>{
      //     console.log(err)
      //     alert("err: ", err)
      //   })
      //   // Close the dialog after successful submission
      //   document.getElementById("my_modal_3").close();
      // };

//using axios
 const onSubmit = async (data) => {
        const userInfo={
          fullName: data.fullName,
          email:data.email,
          password:data.password
        }
        await axios.post("http://localhost:3000/user/Signup",userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            // alert('signup successful')
        toast.success('Signup Successful');

          }
        localStorage.setItem("User",JSON.stringify(res.data.user))

        })
        .catch((err)=>{
          
          //   console.log(err)
          // alert("Error: "+" user already exist")
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
    <div className='flex justify-center items-center h-screen  bg-gray-800'>
      <form onSubmit={handleSubmit(onSubmit)} className="modal-box relative  bg-gray-800  text-white p-6 rounded-lg shadow-2xl shadow-gray-950">
        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </Link>
        <h3 className="text-lg font-semibold">Signup</h3>
        <h2 className="py-4">Name</h2>
        <input
          type="text"
          placeholder="Enter your Name"
          className="text-sm px-5 py-1 h-10 w-full bg-inherit outline-none border border-gray-600 rounded-md"
          {...register("fullName", { required: "Name is required" })}
        />
        <br/>
            {errors.fullName && (
              <span className="text-red-500 text-sm ml-10">{errors.name.message}</span>
            )}
        <h2 className="py-4">Email</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="text-sm px-5 py-1 h-10 w-full bg-inherit outline-none border border-gray-600 rounded-md"
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
          className="text-sm px-5 py-1 h-10 w-full bg-inherit outline-none border border-gray-600 rounded-md"
          {...register("password", { required: "Password is required" })}

        />
        <br/>
            {errors.password && (
              <span className="text-red-500 text-sm ml-10">{errors.password.message}</span>
            )}
        <div className="flex justify-around mt-5">
          <button className="px-4 py-1 rounded-md bg-pink-500">signup</button>
          <p>Have an account? <span className="underline text-blue-500 cursor-pointer" 
          onClick={()=>{document.getElementById('my_modal_3').showModal()}} >Login</span></p>
        </div>
      </form>
      <Login/>
      
    </div>
  );
}

export default Signup;
            
// import React from "react";
// import { Link } from "react-router-dom";
// import { useForm } from "react-hook-form";

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);

//     // Close the modal after successful submission
//     document.getElementById("signup_modal").close();
//   };

//   return (
//     <>
//       <dialog id="signup_modal" className="modal">
//         <div className="modal-box relative bg-gray-800 text-white p-6 rounded-lg shadow-2xl shadow-gray-950">
//           <button
//             type="button"
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             onClick={() => document.getElementById("signup_modal").close()}
//           >
//             ✕
//           </button>
//           <h3 className="text-lg font-semibold">Signup</h3>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <h2 className="py-4">Name</h2>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="text-sm px-5 py-1 h-10 w-full bg-inherit outline-none border border-gray-600 rounded-md"
//               {...register("name", { required: "Name is required" })}
//             />
//             {errors.name && (
//               <span className="text-red-500 text-sm ml-10">
//                 {errors.name.message}
//               </span>
//             )}

//             <h2 className="py-4">Email</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="text-sm px-5 py-1 h-10 w-full bg-inherit outline-none border border-gray-600 rounded-md"
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && (
//               <span className="text-red-500 text-sm ml-10">
//                 {errors.email.message}
//               </span>
//             )}

//             <h2 className="py-4">Password</h2>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="text-sm px-5 py-1 h-10 w-full bg-inherit outline-none border border-gray-600 rounded-md"
//               {...register("password", { required: "Password is required" })}
//             />
//             {errors.password && (
//               <span className="text-red-500 text-sm ml-10">
//                 {errors.password.message}
//               </span>
//             )}

//             <div className="flex justify-around mt-5">
//               <button
//                 type="submit"
//                 className="px-4 py-1 rounded-md bg-pink-500 hover:scale-105"
//               >
//                 Signup
//               </button>
//               <p>
//                 Have an account?{" "}
//                 <span
//                   className="underline text-blue-500 cursor-pointer"
//                   onClick={() =>
//                     document.getElementById("my_modal_3").showModal()
//                   }
//                 >
//                   Login
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </>
//   );
// }

// export default Signup;
