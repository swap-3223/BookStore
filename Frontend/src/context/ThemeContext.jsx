import { createContext, useState,useEffect } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('dark')
    const [book, setBook] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:3000/book')
      .then((res)=>res.json())
      .then((data)=>setBook(data))
    },[])
    
    const initialAuthUser = localStorage.getItem("Users")
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )

    const handleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme === 'dark' ? 'light' : 'dark'))
    }
    return(
        <ThemeContext.Provider value={{theme, handleTheme, book, authUser, setAuthUser}}>
        {children}
    </ThemeContext.Provider>
    )
}