

function BlogContent({text, title}){
    return(
        <>
            <div className="blog-title-semilarge">{title}</div>
            <p className="blog-text">{text}</p>
        </> 
    )
}

export default BlogContent;