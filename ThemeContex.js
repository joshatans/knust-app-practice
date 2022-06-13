import React, {createContext,useContext,useState} from 'react';


//creating of contect
const  ThemeContext = createContext();
const ThemeContextUpdate = createContext();

//creating our custom Hooks
export const useTheme = ()=>{
    return useContext(ThemeContext)
}

export const useThemeUpdate = ()=>{
    return useContext(ThemeContextUpdate)
}

//themeProvider

export const ThemeProvider = ({children})=>{
    const [DarkTheme, setDarkTheme]= useState(true);
     
    const toggledTheme = ()=>{
        setDarkTheme(prevTheme => !prevTheme)
    }
    
        return(
            <ThemeContext.Provider value={DarkTheme}>
                <ThemeContext.Provider value={toggledTheme}>
                {children}
                </ThemeContext.Provider> 
            </ThemeContext.Provider>
        )
}