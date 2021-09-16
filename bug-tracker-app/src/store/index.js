import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';
import projectsReducer from '../projects/reducers/projects-reducer'
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})

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
export default appStore;