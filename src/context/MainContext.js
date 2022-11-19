import { createContext, useContext, useState } from "react";

const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [urls, setUrls] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [menuToggle, setMenuToggle] = useState(false);
    const MY_API_KEY = 'H0YlBtF4AuBfe-kLYV_2o0ZdYfJySCvaX9F-b6UpMvs';

    const values = {
        user,
        setUser,
        urls,
        setUrls,
        photos,
        setPhotos,
        MY_API_KEY,
        menuToggle,
        setMenuToggle
    }

    return <MainContext.Provider value={values}> {children} </MainContext.Provider>
}

export const usePhoto = () => useContext(MainContext);