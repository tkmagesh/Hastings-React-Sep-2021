import { createStore } from 'redux';
import rootReducer from '../reducers';
import rootMiddleware from './middlewares';
import { composeWithDevTools } from 'redux-devtools-extension';

//with no middleware
//const appStore = createStore(rootReducer, devToolsEnhancer());

//with middleware
const appStore = createStore(rootReducer, composeWithDevTools(rootMiddleware));
export default appStore;