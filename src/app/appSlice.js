
function appReducer(state, action) {
    switch(action.type)
    {
        case 'set_sidebar_open':
            return {
                ...state,
                isSidebarOpen: action.isSidebarOpen,
            }
        case 'set_searchbar_open':
            return {
                ...state,
                isMobileSearchOpen: action.isMobileSearchOpen
            }
        default:
            return state;
    }
}

//#region Action Creators
const setSidebarOpen = isSidebarOpen => ({
    type: 'set_sidebar_open',
    isSidebarOpen
});

const setMobileSearchbarOpen = isMobileSearchOpen => ({
    type: 'set_searchbar_open',
    isMobileSearchOpen
});

// #endregion


export {setSidebarOpen, setMobileSearchbarOpen};
export default appReducer;