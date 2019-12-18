import React from 'react';
import Blog from "./container/Blog/Blog";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import Add from "./container/Add/Add";
import {BrowserRouter,Switch,Route} from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Blog}/>
                <Route path='/About' exact component={About}/>
                <Route path='/Contacts' exact component={Contacts}/>
                <Route path='/Add' exact component={Add}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;