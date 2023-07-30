import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import menubar from '../../assets/svgs/menu.svg'
import search from '../../assets/svgs/search.svg'
import arrowmenu from '../../assets/svgs/arrowmenu.svg'
import { useEffect, useRef } from "react";

function TopHeader({isSearchInputOpen=false, onOpenSearchInput, onOpenSidebar}){
    const inputRef = useRef(null);
    const searchButtonRef = useRef(null);

    useEffect(() => {
        const listener = document.addEventListener('click', (e) => {
            if(e.target !== inputRef.current && e.target !== searchButtonRef.current)
            {
                onOpenSearchInput(false);
            }
        });

        return () => {
            document.removeEventListener('click', listener);
        }
    }, []);

    return (
        <div className="top-header-con container">
            <h1 className={`${isSearchInputOpen ? 'hidden' : ''}`}>Productopedia.tech</h1>
            <div className="right-header">
                        <input type="text" className="search" placeholder="Search" />
                        <button type="button" className="searchBtn"> <FontAwesomeIcon icon={faSearch} className="search-icon" title="search"/></button>
                        <button className="subscribe">SUBSCRIBE</button>
            </div>
            <input type="text" className={`search-input-mobile ${isSearchInputOpen ? 'show' : ''}`} placeholder="Search" ref={inputRef}/>
            <div className={`top-navbar ${isSearchInputOpen ? 'hidden' : ''}`}>
                <img src={search} className="search" onClick={() => onOpenSearchInput(!isSearchInputOpen, true)} ref={searchButtonRef}/>
                <img src={menubar} className="menubar" onClick={onOpenSidebar}/>
                <img src={arrowmenu} className="arrowmenu"/>
            </div>
        </div>
    )
}
export default TopHeader;