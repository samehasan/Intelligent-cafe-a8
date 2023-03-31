import React from 'react';
import './Allblog.css'
const Allblog = (props) => {
    const{authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate}=props.allblog;
    return (
        <div className='allblog'>
           <img src={blogCoverImage} alt="" />
           <div className='info'>
             <img src={authorImage} alt="" /> 
            <p>{authorName}</p>
            <p>{publishDate}</p>
            <p>{readTime} read</p>

           </div>
           <h1>{blogTitle}</h1>

        </div>
    );
};

export default Allblog;