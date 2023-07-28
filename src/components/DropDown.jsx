import CategoryItem from "./CategoryItem";

function Dropdown({ items, icon, label, classname }) {

  return (
    <div className="dropdown">
      <div>
        <a href="">{label}</a>
        <img src={icon} width={15} className={classname}/>
      </div>
      <div className="dropdown-menu">
          {
            items.map((item, index) => <CategoryItem key={index} name={item.name} iconName={item.iconName}/>)
          }
        </div>
    </div>
  );
}
export default Dropdown;
