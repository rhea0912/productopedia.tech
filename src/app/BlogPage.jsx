import Header from "../shared/header/Index";
import Blog from "../components/Blog";
import home from "../assets/svgs/home.svg";
import homeArrow from "../assets/svgs/homeArrow.svg";
import BlogContent from "../components/BlogContent";
import Card from "../shared/blog-list/Card";
import SubscribeUs from "../components/SubscribeUs";
import notificationGif from "../assets/images/notification.gif";
import envelope from "../assets/svgs/envelope.svg";
import Footer from "../shared/footer/Index";

function BlogPage() {
  return (
    <>
      <div className="bg">
        <div className="opacity">
          <Header />
          <div className="bread-crumb container">
            <img src={home} />
            <img src={homeArrow} />
            <Blog />
          </div>
          <div className="container">
            <p className="blog-title-large">Title of the blog</p>
            <div className="blog-date">July 15, 2023</div>
            <div className="content-container">
              <div className="left-content">
                <div className="blog-image-large"></div>
                <BlogContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum."/>
                <BlogContent title="Title of the current stanza" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum."/>
                <BlogContent title="Title of the current stanza" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum."/>
              </div>
              <div className="right-content">
                <div className="latest-post-con">
                 <div className="blog-title-semilarge">Latest post</div>
                  <div className="blog-small-con">
                    <div className="blog-image-small"></div>
                    <div>
                    <div className="blog-title-small">This is the title of blog</div>
                    <div className="blog-date">July 15, 2023</div>
                    </div>
                  </div>
                </div>
                <div className="current-title">
                  <div className="blog-title-small" style={{paddingBottom: "40px", paddingLeft:"0"}}>This is the title of blog</div>
                  <div className="blog-title-small" style={{paddingBottom: "40px", paddingLeft:"0"}}>This is the title of blog</div>
                  <div className="blog-title-small" style={{paddingBottom: "40px", paddingLeft:"0"}}>This is the title of blog</div>
                  <div className="blog-title-small" style={{paddingBottom: "40px", paddingLeft:"0"}}>This is the title of blog</div>
                </div>
                <div className="advertisement">Advertisement</div>
                <div className="advertisement">Advertisement</div>
              </div>
            </div>
          </div>
          <div className="featured-post container" >
            <div className="blog-title-semilarge">Featured posts</div>
            <div className="line"></div>
            <div className="card-con-flex">
         <Card date="July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         </div>
          </div>
          <SubscribeUs icon={notificationGif} envelopeicon={envelope} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default BlogPage;
