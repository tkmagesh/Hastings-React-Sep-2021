import { combineReducers } from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';
import projectsReducer from '../projects/reducers/projects-reducer'

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
})

export default rootReducer;