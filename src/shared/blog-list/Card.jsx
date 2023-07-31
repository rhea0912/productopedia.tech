import { Link } from "react-router-dom";

function Card({date, title}) {
  return (
    <div>
         <div className="card-container">
            <div className="card-of-blog">
              <Link to="/blog" className="link"></Link>
            </div>
            <h6 className="date-of-blog">{date}</h6>
            <Link to="/blog">
              <h1 className="blog-title-medium">{title}</h1>
            </Link>
         </div>
    </div>
  );
}
export default Card;
