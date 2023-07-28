import CategoryItem from "../../components/CategoryItem";
import Back from '../../assets/svgs/arrow-right.svg';


function Sidebar({categoryItems, isOpen, onClose}) {

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'close'}`}>
            <div className="back-button" onClick={onClose}>
                <img src={Back}/>
            </div>
            <div className="sidebar-list">
            {
                categoryItems && categoryItems.map((item, index) => (
                    <div key={index} className="sidebar-item">
                        <CategoryItem name={item.name} iconName={item.iconName} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Sidebar;