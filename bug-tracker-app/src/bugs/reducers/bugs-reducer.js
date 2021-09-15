function bugsReducer(currentState = [], action){
    switch(action.type){
        case 'BUG_ADD_NEW':
            return [...currentState, action.payload];
        case 'BUG_UPDATE':
            return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug);
        case 'BUG_REMOVE':
            return currentState.filter(bug => bug.id !== action.payload.id);
        case 'BUG_INIT':
            return action.payload;
        default:
            return currentState;
    }
}
export default bugsReducer;