import bugApi from '../services/bug-api';

export function removeClosed(){
    return function(dispatch, getState){
        const appState = getState();
        const bugs = appState.bugsState;
        const bugsToRemove = bugs.filter(bug => bug.isClosed);
        bugsToRemove.forEach(async bug => {
            await bugApi.remove(bug);
            const action = { type : 'BUG_REMOVE', payload : bug };
            dispatch(action);
        });
    }
}