import React, {Component, Fragment} from 'react';
import Header from "../../components/Header/Header";
import axiosPosts from "../../axios-posts";
import './Add.css'
import Spinner from "../../components/UI/Spinner/Spinner";
class Add extends Component{
    state = {
        loading: false,
        title: '',
        description: '',
    };
    valueChanged = event => this.setState({[event.target.name]: event.target.value});
    postsHandler = async event => {
        event.preventDefault();
      const posts = {
              title: this.state.title,
              description: this.state.description,
              date:Date(),
      };
      this.setState({loading: true})
      await axiosPosts.post('/posts.json',posts);
      this.setState({loading: false})
      this.props.history.push('/')

    };

    render() {
        let form = (
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
                        placeholder='Description'
                        onChange={this.valueChanged}
                    />
                </div>
                <button type='Submit' className='form-btn'>Save</button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>
        }
        return(
            <Fragment>
                <Header/>
                <div className='Add container'>
                    <h1>Add new post</h1>
                    {form}
                </div>
            </Fragment>
        )
    }
}
export default Add;