// src/context/state.js
import { createContext, useContext } from 'react';

const AppContext = createContext({});

export function AppWrapper({ children }) {
    let data = {
        categories: {

        },
        projects: {

        },
        pages: {

        }
    }

    return (
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
