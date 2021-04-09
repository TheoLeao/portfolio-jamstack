import { useState, createContext } from "react";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const [data, setData] = useState({
        categories: {

        },
        projects: {

        },
        pages: {

        }
    });

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
