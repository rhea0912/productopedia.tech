import {createContext, useState, useContext} from "react";


const GlobalStateContext = createContext ();

const initialState = {
    isSidebarOpen: false,
}

const GlobalStateProvider = ({children}) => {
    const [globalState, setGlobalState] = useState(initialState);

    return <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
        {children}
    </GlobalStateContext.Provider>
}

const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
      throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export { GlobalStateProvider, useGlobalState };