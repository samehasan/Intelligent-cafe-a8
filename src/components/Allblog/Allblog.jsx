import React from 'react';

import './Allblog.css'
const Allblog = (props) => {
    const{authorName,blogTitle,blogCoverImage,authorImage,readTime,publishDate}=props.allblog;
    const Handleaddblog=props.Handleaddblog;
    return (
        <div className='allblog'>
           <img src={blogCoverImage} alt="" />
           <div className='info'>
             <img src={authorImage} alt="" /> 
            <p>{authorName}  <br />{publishDate}</p>
            
            <p>{readTime} mins read  
           
            </p>
            <button onClick={()=>Handleaddblog(props.allblog)}  className='btn-read'></button>
           </div>
           <h1>{blogTitle}</h1>

        </div>
    );
};

export default Allblog;