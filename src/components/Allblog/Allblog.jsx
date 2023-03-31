import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={()=>Handleaddblog(props.allblog)}  className='btn-read'><FontAwesomeIcon icon={faBookmark} /></button>
           </div>
           <h1>{blogTitle}</h1>
           <a href="">mark as read</a>

        </div>
    );
};

export default Allblog;