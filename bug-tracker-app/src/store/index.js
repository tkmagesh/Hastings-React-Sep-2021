import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';
import projectsReducer from '../projects/reducers/projects-reducer'
import { devToolsEnhancer } from 'redux-devtools-extension';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})
/*
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.info('Before ', store.getState());
            console.info(action);
            next(action);
            console.info('After ', store.getState());
            console.groupEnd();
        }
    }
}

function asyncMiddleware({dispatch, getState}){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(dispatch, getState);;
            } 
            return next(action);
        }
    }
}

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));
*/

const promiseMiddleware = store => next => action => {
    if (action instanceof Promise){
        return action.then(actionObj => store.dispatch(actionObj));
    }
    return next(action);
}

const appStore = createStore(rootReducer, applyMiddleware(logger, thunk, promiseMiddleware));
export default appStore;