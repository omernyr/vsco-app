import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [urls, setUrls] = useState([]);
    const [photos, setPhotos] = useState([]);

    const values = {
        user,
        setUser,
        urls,
        setUrls,
        photos,
        setPhotos
    }

    return <MainContext.Provider value={values}> {children} </MainContext.Provider>
}

export const usePhoto = () => useContext(MainContext);