function DropDown({ icon, label, classname }) {
  return (
    <div>
      <div>
        <a href="">{label}</a>
        <img src={icon} width={15} className={classname}/>
      </div>
      <div className="dropdown-menu">
                
      </div>
    </div>
  );
}
export default DropDown;
