import { Link } from "react-router-dom";

function CategoryItem({name, iconName}){
    return (
    <Link className="dropdown-menu-item" to='/'>
        <div>
        <img src={iconName} alt="" />
        </div>
        <div>{name}</div>
  </Link>)
}

export default CategoryItem;