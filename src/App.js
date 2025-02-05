import React from 'react';
import Blog from "./container/Blog/Blog";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import Add from "./container/Add/Add";
import InfoOnePost from "./container/InfoOnePost/InfoOnePost";
import Edit from "./container/Edit/Edit";
import {BrowserRouter,Switch,Route} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Blog}/>
                <Route path='/About'  component={About}/>
                <Route path='/Contacts'  component={Contacts}/>
                <Route path='/Add'  component={Add}/>
                <Route path='/posts/:id/edit' exact component={Edit}/>
                <Route path='/posts/:id' component={InfoOnePost}/>
            </Switch>
        </BrowserRouter>
    );
};
export default App;