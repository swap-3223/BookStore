import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import toast from 'react-hot-toast';

function Logout() {
    const{authUser, setAuthUser}=useContext(ThemeContext);
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("User");
            toast.success("Logout Successfull");
            setTimeout(() => {
            window.location.reload();
            }, 1000);
            
        } catch (error) {
            toast.error("Error: "+ error.message)
        }
    }
  return (
    <div>
    <button onClick={handleLogout}
    className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout