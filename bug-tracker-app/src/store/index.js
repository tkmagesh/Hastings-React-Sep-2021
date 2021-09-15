import { createStore } from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';

const appStore = createStore(bugsReducer);

export default appStore;