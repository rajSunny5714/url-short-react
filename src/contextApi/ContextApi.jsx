import { createContext, useContext, useState, useEffect } from "react";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem("JWT_TOKEN");
        if (storedToken) setToken(JSON.parse(storedToken)); // parse it to remove quotes
    }, []);

    const sendData = {
        token,
        setToken,
    };

    return (
        <ContextApi.Provider value={sendData}>
            {children}
        </ContextApi.Provider>
    );
};

export const useStoreContext = () => {
    return useContext(ContextApi);
};