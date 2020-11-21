import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Job from '../pages/Job';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/job/:id" component={Job}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;