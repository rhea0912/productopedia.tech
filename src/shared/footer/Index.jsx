import { Link } from "react-router-dom";

function Footer() {
  return(
    <>
    <div className="footer-con">
       <h2>@2023 Productopedia.tech</h2>
       <div className="right-footer">
        <Link to="">About us</Link>
        <Link to="">Privacy Policy</Link>
       </div>
    </div>
    </>
  )
}

export default Footer;
