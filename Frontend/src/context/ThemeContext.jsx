import { createContext, useState,useEffect } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('dark')
    const [book, setBook] = useState([]);

    const initialAuthUser = localStorage.getItem("User")
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )

    useEffect(()=>{
      fetch('http://localhost:3000/book')
      .then((res)=>res.json())
      .then((data)=>setBook(data))
    },[])

    const handleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme === 'dark' ? 'light' : 'dark'))
    }
    return(
        <ThemeContext.Provider value={{theme, handleTheme, book, authUser, setAuthUser}}>
        {children}
    </ThemeContext.Provider>
    )
}