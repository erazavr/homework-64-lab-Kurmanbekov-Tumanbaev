import React, {Component, Fragment} from 'react';
import './Edit.css'
import Header from "../../components/Header/Header";
import axiosPosts from "../../axios-posts";
class Edit extends Component {
    state = {
        edit: null,
    };
    getLink = () => {
        const id = this.props.match.params.id;
        return  '/posts/' + id + 'edit.json'
    };
    async componentDidMount() {
        const response = await axiosPosts.get(this.getLink());
        this.setState({edit: response.data});
    }
    render() {
        return (
            <Fragment>
                <Header/>
                <div className='Add container'>
                    <h1>asdasdasda</h1>
                    <div>
                        <label htmlFor="input" className='label'>Title</label>
                        <input
                            type="text"
                            name='title'
                            id='input'
                            className='field'
                            placeholder='Title'
                            value={this.state.edit.title}
                        />
                    </div>
                    <div>
                        <label htmlFor="textarea" className='label'>Description</label>
                        <textarea
                            name="description"
                            id="textarea" cols="30"
                            rows="10"
                            className='textarea'
                            value={this.state.edit.description}
                        />
                    </div>
                    <button className='btn'>Save Changes</button>
                </div>
            </Fragment>
        );
    }
}

export default Edit;