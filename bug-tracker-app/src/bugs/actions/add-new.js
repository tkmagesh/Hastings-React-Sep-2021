export function addNew(bugName, projectId){
    const newBug = {
        id : 0,
        name : bugName,
        isClosed : false,
        createdAt : new Date(),
        projectId : projectId
    }
    const action = { type : 'BUG_ADD_NEW', payload : newBug };
    return action;
}