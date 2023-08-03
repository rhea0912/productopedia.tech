import Header from "../shared/header/Index";
import BlogContent from "../components/BlogContent";    
import facebookpage from "../assets/svgs/facebookpage.svg"
import AboutUsImage from "../assets/svgs/about-us.svg"
import SubscribeUs from "../components/SubscribeUs";
import notificationGif from "../assets/images/notification.gif";
import envelope from "../assets/svgs/envelope.svg";
import Footer from "../shared/footer/Index";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="bg" style={{ minHeight: "unset", borderBottom: "2px solid #E1E1E1" }}>
        <div className="opacity" style={{ opacity: "90%", minHeight: "unset"}}>
            <div className="container">
             <p className="blog-title-large">About Us</p>
            </div>
        </div>
      </div>
      <div className="about-us-content container">
        <div className="left-content">
          <BlogContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
           in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
          <div>
            <img src={facebookpage} title="facebook page"/>
            <div className="blog-title-small" style={{ fontSize: "16px", fontWeight:"bolder"}}>Like our Facebook page</div>
         </div>

        </div>
        <div className="aboutus-right-content">
            <img src={AboutUsImage} />
        </div>
      </div>
      <SubscribeUs icon={notificationGif} envelopeicon={envelope} />
      <Footer />
    
    </>
  );
}

export default AboutUs;
