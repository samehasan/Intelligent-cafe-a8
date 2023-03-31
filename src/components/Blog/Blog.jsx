import React from 'react';
import  { useEffect, useState } from 'react';
import Allblog from '../Allblog/Allblog';
import './Blog.css'
const Blog = () => {
    const [allblogs,setallblogs]= useState([]);
    const [bookmarklist,setBookmarklist]=useState([])
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setallblogs(data))
    },[]);

    const Handleaddblog=(allblog)=>{
        const newBookmarklist=[...bookmarklist,allblog]
        setBookmarklist(newBookmarklist);
    }
    return (
        <div className='blog-container'>
            <div className='allblog-container'>
             {
                allblogs.map(allblog=><Allblog
                key={allblog.id}
                allblog={allblog}
                Handleaddblog={Handleaddblog}
                ></Allblog>)
             }
            </div>

            <div className='Bookmarks-container'>
            <h2>Bookmarked Blogs : {bookmarklist.length}</h2>
            </div>
        </div>
    );
};

export default Blog;