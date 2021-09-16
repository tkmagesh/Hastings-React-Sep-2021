import { combineReducers } from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';
import projectsReducer from '../projects/reducers/projects-reducer'



function notificationReducer(currentState = '', action){
    switch(action.type){
        case 'ADD_NOTIFICATION':
            return action.payload;
        case 'REMOVE_NOTIFICATION':
            return '';
        default:
            return currentState;
    }
}


const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer,
    notification : notificationReducer
})

export default rootReducer;