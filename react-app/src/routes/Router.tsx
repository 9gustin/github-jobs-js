import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import JobView from '../pages/JobView';
import NotFound from '../pages/NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/job/:company/:title/:id" component={JobView}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;