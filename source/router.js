import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main';

// Pages
import Home from './pages/home';
import Repos from './pages/repos';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="repos" component={Repos} />
        </Route>
    </Router>
);
