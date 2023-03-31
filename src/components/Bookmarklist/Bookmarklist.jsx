import React from 'react';
import './Bookmarklist.css'
const Bookmarklist = ({bookmarklist}) => {
    console.log(bookmarklist);
    return (
        <div className='booklist'>
              <h2>Bookmarked Blogs : {bookmarklist.length}</h2>
        </div>
    );
};

export default Bookmarklist;