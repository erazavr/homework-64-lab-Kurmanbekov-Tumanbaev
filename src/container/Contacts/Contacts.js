import React, {Fragment} from 'react';
import Header from "../../components/Header/Header";
import './Contacts.css'
const Contacts = () => {
    return (
        <Fragment>
            <Header/>
            <div className='Contacts'>
                <h1>Contacts</h1>
                <h2>Call:</h2>
                <p>0557058804</p>
                <p>0557120545</p>
                <p>0557648845</p>
            </div>
        </Fragment>

    );
};

export default Contacts;