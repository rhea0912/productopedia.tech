import { Link } from "react-router-dom";

function Dropdown({ items, icon, label, classname }) {

  return (
    <div className="dropdown">
      <div>
        <a href="">{label}</a>
        <img src={icon} width={15} className={classname}/>
      </div>
      <div className="dropdown-menu">
          {
            items.map(item => (
                <Link className="dropdown-menu-item" to='/'>
                  <div>
                    <img src={item.iconName} alt="" />
                  </div>
                  <div>{item.name}</div>
                </Link>
              ))
          }
        </div>
    </div>
  );
}
export default Dropdown;
