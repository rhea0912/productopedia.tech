
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
function Header(){
   return(
    <div>

        <div className="top-header-con container">
            <h1>Productopedia.tech</h1>
            <TopHeader />
        </div>
        <BottomHeader /> 
    </div>
   )
}

export default Header;