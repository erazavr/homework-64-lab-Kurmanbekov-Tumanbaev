import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import axiosPosts from "../../axios-posts";
import './Add.css'
class Add extends Component{
    state = {
        title: '',
        description: '',
    };
    valueChanged = event => this.setState({[event.target.name]: event.target.value});
    postsHandler = async event => {
        event.preventDefault();
      const posts = {
              title: this.state.title,
              description: this.state.description,
      };
      await axiosPosts.post('/posts.json',posts);
        this.props.history.push('/')

    };

    render() {

        return(
            <Fragment>
                <Header/>
                <div className='Add container'>
                    <h1>Add new post</h1>
                    <form onSubmit={this.postsHandler}>
                        <div>
                            <label htmlFor="input" className='label'>Title</label>
                            <input
                                type="text"
                                name='title'
                                id='input'
                                className='field'
                                placeholder='Title'
                                value={this.state.title}
                                onChange={this.valueChanged}
                            />
                        </div>
                        <div>
                            <label htmlFor="textarea" className='label'>Description</label>
                            <textarea
                                name="description"
                                id="textarea" cols="30"
                                rows="10"
                                className='textarea'
                                value={this.state.description}
                                onChange={this.valueChanged}
                            />
                        </div>
                        <button type='Submit' className='form-btn'>Save</button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
export default Add;