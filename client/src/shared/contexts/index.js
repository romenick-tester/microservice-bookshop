import React, { useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{sample: "Hello World!"}}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext};