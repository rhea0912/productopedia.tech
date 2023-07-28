
import { useState } from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Sidebar from "../sidebar";
import HeadsetIcon from '../../assets/images/headset-icon.png';

function Header(){
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const testCategoryItems = Array(12).fill({name: 'Headset', iconName: HeadsetIcon});

   return(
    <div>
        <div className="top-header-con container">
            <h1>Productopedia.tech</h1>
            <TopHeader onClickSideMenuBar={() => setSidebarOpen(true)}/>
        </div>
        <BottomHeader categoryItems={testCategoryItems}/> 
        {
            isSidebarOpen && <Sidebar categoryItems={testCategoryItems} onClose={() => setSidebarOpen(false)}/> 
        }
    </div>
   )
}

export default Header;