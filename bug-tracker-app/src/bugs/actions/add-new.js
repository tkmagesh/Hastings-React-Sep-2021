//TO BE FIXED
let _currentBugId = 0;

export function addNew(bugName, projectId){
    const newBug = {
        id : ++_currentBugId,
        name : bugName,
        isClosed : false,
        createdAt : new Date(),
        projectId : projectId
    }
    const action = { type : 'BUG_ADD_NEW', payload : newBug };
    return action;
}