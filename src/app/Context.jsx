import {createContext, useReducer, useContext} from "react";
import appReducer from "./appSlice";

const GlobalStateContext = createContext ();

const initialState = {
    isSidebarOpen: false,
    isMobileSearchOpen: false,
}

const GlobalStateProvider = ({children}) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return <GlobalStateContext.Provider value={[state, dispatch]}>
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