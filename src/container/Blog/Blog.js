import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
import './Blog.css'
class Blog extends Component {
    state = {
        posts: [],
    };
    getPosts = async ()=> {

    };
    render() {
        return (
            <div className='container'>
                <Header/>
                <Posts/>
            </div>
        );
    }
}

export default Blog;