

function ButtonLink({icon, label}){
 return(
    <div className="bottonLinkCom">
      <img src={icon} width={20}/>
      <a href="">{label}</a>
    </div>
 )
}

export default ButtonLink;