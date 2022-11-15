import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const values = {
        user,
        setUser
    }

    return <MainContext.Provider value={values}> {children} </MainContext.Provider>
}

export const usePhoto = () => useContext(MainContext);