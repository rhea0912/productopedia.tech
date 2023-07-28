
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Sidebar from "../sidebar";
import HeadsetIcon from '../../assets/images/headset-icon.png';
import { useGlobalState } from "../../app/Context";

function Header(){
    const [gs, setGs] = useGlobalState();
    const testCategoryItems = Array(12).fill({name: 'Headset', iconName: HeadsetIcon});

    const toggleSidebar = (isOpen) => {
        setGs({...gs, isSidebarOpen: isOpen});
    }

   return(
    <div>
        <div className="top-header-con container">
            <h1>Productopedia.tech</h1>
            <TopHeader onClickSideMenuBar={() => toggleSidebar(true)}/>
        </div>
        <BottomHeader categoryItems={testCategoryItems}/> 
        {
            gs.isSidebarOpen && <Sidebar categoryItems={testCategoryItems} onClose={() => toggleSidebar(false)}/> 
        }
    </div>
   )
}

export default Header;