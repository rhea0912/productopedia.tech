import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import menubar from '../../assets/svgs/menu.svg'
import search from '../../assets/svgs/search.svg'
import close from '../../assets/svgs/close.svg'
import arrowmenu from '../../assets/svgs/arrowmenu.svg'
import { useEffect, useRef } from "react";

function TopHeader({text="", isSearchInputOpen=false, onOpenSearchInput, onOpenSidebar, onInputChange, onClear}){
    const inputRef = useRef(null);
    const searchButtonRef = useRef(null);
    const clearRef = useRef(null);

    const showClear = text.length > 0 && isSearchInputOpen;

    useEffect(() => {
        const listener = document.addEventListener('click', (e) => {
            const { target } = e;
            const elements = [
                inputRef.current,
                searchButtonRef.current,
                clearRef.current,
            ]
            if(!elements.includes(target))
            {
                onOpenSearchInput(false);
            }
        });

        return () => document.removeEventListener('click', listener);
    }, []);

    return (
        <div className="top-header-con container">
            <h1 className={`${isSearchInputOpen ? 'hidden' : ''}`}>Productopedia.tech</h1>
            <div className="right-header">
                <input type="text" className="search" placeholder="Search" onChange={onInputChange} value={text}/>
                <button type="button" className="searchBtn"> <FontAwesomeIcon icon={faSearch} className="search-icon" title="search"/></button>
                <button className="subscribe">SUBSCRIBE</button>
            </div>
            
            <input 
                ref={inputRef}
                type="text"
                className={`search-input-mobile ${isSearchInputOpen ? 'show' : ''}`}
                placeholder="Search" 
                onChange={onInputChange}
                value={text}
            />
            <img src={close} className={`clear ${showClear ? 'visible' : ''}`} ref={clearRef} onClick={onClear}/>

            <div className={`top-navbar ${isSearchInputOpen ? 'hidden' : ''}`}>
                <img src={search} className="search" onClick={() => onOpenSearchInput(!isSearchInputOpen, true)} ref={searchButtonRef}/>
                <img src={menubar} className="menubar" onClick={onOpenSidebar}/>
                <img src={arrowmenu} className="arrowmenu"/>
            </div>
        </div>
    )
}
export default TopHeader;