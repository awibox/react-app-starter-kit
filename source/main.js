import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './router';
import Store from './store';
require('es6-promise').polyfill();

ReactDOM.render(
    <Provider store={Store}>{Router}</Provider>,
    document.getElementById('root')
);