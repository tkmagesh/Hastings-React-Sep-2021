export function removeClosed(){
    return function(getState){
        const appState = getState();
        const bugs = appState.bugsState;
        const bugsToRetain = bugs.filter(bug => bug.isClosed === false);
        const action = { type : 'BUG_INIT', payload : bugsToRetain };
        return action;
    }
}