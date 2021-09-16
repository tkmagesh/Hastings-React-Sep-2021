export function removeClosed(){
    return function(dispatch, getState){
        const appState = getState();
        const bugs = appState.bugsState;
        const bugsToRetain = bugs.filter(bug => bug.isClosed === false);
        const action = { type : 'BUG_INIT', payload : bugsToRetain };
        dispatch(action);
    }
}