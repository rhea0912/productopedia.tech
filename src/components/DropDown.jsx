
function Dropdown({ items, icon, label, classname }) {
  return (
    <div className="dropdown">
      <a href="">{label}</a>
      <img src={icon} width={15} className={classname}/>
      <div className="dropdown-menu">
        {
          items.map(item => (
              <div className="dropdown-menu-item">
                <div>
                  <img src={item.iconName} alt="" />
                </div>
                <div>{item.name}</div>
              </div>
            ))
        }
      </div>
    </div>
  );
}
export default Dropdown;
