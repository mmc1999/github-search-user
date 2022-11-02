import { useEffect, useState, createContext } from "react";
const DarkContext = createContext();

const ProviderDark = ({children}) => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
      if(dark){
        setDark(true)
        localStorage.setItem("modeDark", "true");
        document.body.classList.add("dark");
      }else {
        setDark(false)
        localStorage.setItem("modeDark", "false");
        document.body.classList.remove("dark");
      }
    }, [dark])
    
    let data = {
        setDark,
        dark
    }

    return (
        <DarkContext.Provider value={data}>
            {children}
        </DarkContext.Provider>
    )
}

export {
    ProviderDark,
    DarkContext
}