import { createStore } from 'redux';
import reducers from './reducers.js';

const Store = createStore(reducers);
export default Store;