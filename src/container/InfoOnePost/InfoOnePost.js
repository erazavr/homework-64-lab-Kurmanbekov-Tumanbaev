import React, {Component, Fragment} from 'react';
import axiosPosts from "../../axios-posts";
import './InfoOnePost.css'
import Header from "../../components/Header/Header";
import {NavLink} from "react-router-dom";
class InfoOnePost extends Component {
    state  = {
        some: null,
    };
    getLink = () => {
        const id = this.props.match.params.id;
        return  '/posts/' + id + '.json'
    };
    async componentDidMount() {
        const response = await axiosPosts.get(this.getLink());
        this.setState({some: response.data});
    }
    postDelete = async () => {
        await axiosPosts.delete(this.getLink());
        this.props.history.replace('/');
    };
    edit = () => {
        this.props.history.push(`${this.props.match.params.id}/edit`);
    };
    render() {
        return this.state.some && (
            <Fragment>
                <Header/>
                <div className='Add container'>
                    <div>
                        <h3>Title</h3>
                        <p>{this.state.some.title}</p>
                    </div>
                    <div>
                       <h3>Description</h3>
                       <p>{this.state.some.description}</p>
                    </div>
                    <button className='btn' onClick={this.postDelete}>Delete</button>
                    <NavLink to={`/posts/${this.props.match.params.id}/edit`}>Edit</NavLink>
                </div>
            </Fragment>
        );
    }
}

export default InfoOnePost;