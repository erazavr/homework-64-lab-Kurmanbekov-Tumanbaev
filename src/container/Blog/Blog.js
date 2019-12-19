import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import './Blog.css';
import axiosPosts from "../../axios-posts";
import Post from "../../components/Post/Post";
import Spinner from "../../components/UI/Spinner/Spinner";

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
                />
            })
        };
        return (
            <div className='container'>
                <Header/>
                {this.state.posts!==null ? allPosts():<Spinner/>}
            </div>
        );
    }
}

export default Blog;