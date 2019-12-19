import React, {Component, Fragment} from 'react';
import './Edit.css'
import Header from "../../components/Header/Header";
import axiosPosts from "../../axios-posts";
class Edit extends Component {
    state = {
        title: '',
        description: '',
        date: '',
    };
    getLink = () => {
        const id = this.props.match.params.id;
        return  '/posts/' + id + '.json'
    };
    async componentDidMount() {
        const response = await axiosPosts.get(this.getLink());
        this.setState({title: response.data.title, description: response.data.description, date: response.data.date,});
    }
    valueChanged = event => this.setState({[event.target.name]: event.target.value});
    postsHandler = async (e) => {
        e.preventDefault();
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        const posts = {
            title: this.state.title,
            description: this.state.description,
            date:date + '.' + month + '.' + year + ' ' + hours + ':' + min
        };
        await axiosPosts.put('/posts/' + this.props.match.params.id + '.json',posts);
        this.props.history.push('/')
    };
    render() {
        return this.state && (
            <Fragment>
                <Header/>
                <form className='Add container'  onSubmit={this.postsHandler}>
                    <h1>Edit</h1>
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
                    <button className='btn'>Save Changes</button>
                </form>
            </Fragment>
        );
    }
}

export default Edit;