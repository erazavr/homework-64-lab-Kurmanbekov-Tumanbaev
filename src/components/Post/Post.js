import React, {Component} from 'react';
import './Post.css'
class Post extends Component {
    state={
        date: '',
    };
    componentDidMount() {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        this.setState({
            date:
                date + '/' + month + '/' + year + ' ' + hours + ':' + min
        });
    }

    render() {
        return (
            <div className='Post'>
                <p className='date'>Created on: {this.state.date}</p>
                <p className='text'>{this.props.title}</p>
                <button onClick={this.props.clickHandler} className='Post-btn'>Read More >></button>
            </div>
        );
    }
}

export default Post;