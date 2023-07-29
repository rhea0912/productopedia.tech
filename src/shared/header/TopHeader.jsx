import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import menubar from '../../assets/svgs/menu.svg'
import search from '../../assets/svgs/search.svg'
import arrowmenu from '../../assets/svgs/arrowmenu.svg'

function TopHeader({onClickSideMenuBar}){
    return (
        <>
        <div className="right-header">
                    <input type="text" className="search" placeholder="Search" />
                    <button type="button" className="searchBtn"> <FontAwesomeIcon icon={faSearch} className="search-icon" title="search"/></button>
                    <button className="subscribe">SUBSCRIBE</button>
        </div>
        <div className="top-navbar">
            <img src={search} className="search"/>
            <img src={menubar} className="menubar" onClick={onClickSideMenuBar}/>
            <img src={arrowmenu} className="arrowmenu"/>
        </div>
        </>
    )
}
export default TopHeader;