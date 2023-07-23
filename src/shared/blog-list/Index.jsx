import Card from "./Card";

function BlogList(){
    return(
       <div className="blog-title-con container">
         <p>All Blogs</p>
         <div className="line"></div>
         <div className="card-con-flex">
         <Card date="July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         <Card date="Date posted: July 15, 2023" title="This is the title of the blog. This is the title of the blog"/>
         </div>
         <div className="line"></div>
       </div>
    )
}

export default BlogList;