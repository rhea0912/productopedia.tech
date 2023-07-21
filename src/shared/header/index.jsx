
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
function Header(){
   return(
    <div>
        <div className="bg">
        <div className="top-header-con">
            <h1>Productopedia.tech</h1>
            <TopHeader />
        </div>
        <BottomHeader />
        </div>
       
    </div>
   )
}

export default Header;