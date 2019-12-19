import React from 'react';
import './Post.css'
const Post = (props) => {
    return (
        <div className='Post'>
            <p className='date'>Created on: {props.date}</p>
            <p className='text'>{props.title}</p>
            <button onClick={props.clickHandler} className='Post-btn'>Read More >></button>
        </div>
    );
};

export default Post;