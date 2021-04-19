import { createStore } from 'redux';
import stockReducer from './stock/stockReducer';

const store = createStore(stockReducer);

export default store;
