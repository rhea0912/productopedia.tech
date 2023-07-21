import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch} from "@fortawesome/free-solid-svg-icons";
function TopHeader(){
return (
    <>
    <div className="right-header">
                <input type="text" className="search" placeholder="Search" />
                <button type="button" className="searchBtn"> <FontAwesomeIcon icon={faSearch} className="search-icon" title="search"/></button>
                <button className="subscribe">SUBSCRIBE</button>
    </div>
    </>
)
}

export default TopHeader;