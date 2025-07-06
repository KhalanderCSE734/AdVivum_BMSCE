import React from 'react'

import { useState ,createContext } from 'react';

const AppContext = createContext();


const AppContextProvider = (props) => {

    const [isLoggedIn,setIsLoggedIn] = useState("Mohammed");

    const value = {
        isLoggedIn,setIsLoggedIn
    }


  return (
    <AppContext.Provider value={value}>
         {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider


export { AppContext }