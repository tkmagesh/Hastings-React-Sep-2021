import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';
import projectsReducer from '../projects/reducers/projects-reducer'

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})
//const appStore = createStore(bugsReducer);
//const appStore = createStore(projectsReducer);

const appStore = createStore(rootReducer);
export default appStore;