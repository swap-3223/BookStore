import { createContext, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('dark')
    

    const handleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme === 'dark' ? 'light' : 'dark'))
    }
    return(
        <ThemeContext.Provider value={{theme, handleTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}