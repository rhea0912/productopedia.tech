import { Link } from "react-router-dom";

function ButtonLink({icon, label}){
 return(
    <div className="bottonLinkCom">
      <img src={icon} width={20}/>
      <Link to="">{label}</Link>
    </div>
 )
}

export default ButtonLink;