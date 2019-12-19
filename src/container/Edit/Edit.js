import React, {Component, Fragment} from 'react';
import axiosPosts from "../../axios-posts";
import './Edit.css'
import Header from "../../components/Header/Header";
class Edit extends Component {
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


    render() {
        return this.state.some && (
            <Fragment>
                <Header/>
                <div className='Add container'>
                    <h1>Edit</h1>
                    <div>
                        <label htmlFor="input" className='label'>Title</label>
                        <input
                            type="text"
                            name='title'
                            id='input'
                            className='field'
                            placeholder='Title'
                            value={this.state.some.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="textarea" className='label'>Description</label>
                        <textarea
                            name="description"
                            id="textarea" cols="30"
                            rows="10"
                            className='textarea'
                            value={this.state.some.description}
                        />
                    </div>
                    <button className='btn' onClick={this.postDelete}>Delete</button>
                    <button className='btn'>Edit</button>
                </div>
            </Fragment>
        );
    }
}

export default Edit;