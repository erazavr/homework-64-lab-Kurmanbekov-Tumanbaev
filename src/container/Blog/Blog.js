import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import './Blog.css';
import axiosPosts from "../../axios-posts";
import Post from "../../components/Post/Post";

class Blog extends Component {
    state = {
        posts: null,
    };
    async componentDidMount() {
        let response = await axiosPosts.get('posts.json');
        this.setState({posts: response.data})
    }
    readMore = id => {
      this.props.history.push(`/posts/${id}`);
    };
    render() {
        const allPosts = () => {
            return Object.keys(this.state.posts).map(id=> {
                return <Post
                    clickHandler={() => this.readMore(id)}
                    key={id}
                    title={this.state.posts[id].title}
                    date={this.state.posts[id].date}
                />
            })
        };
        return (
            <div className='container'>
                <Header/>
                {this.state.posts!==null ? allPosts().reverse():<h1 style={{'textAlign': 'center'}}>No posts</h1>}
            </div>
        );
    }
}

export default Blog;