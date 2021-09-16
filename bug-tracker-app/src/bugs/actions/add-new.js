import bugApi
 from "../services/bug-api";
export async function addNew(bugName, projectId){

    const newBugData = {
        id : 0,
        name : bugName,
        isClosed : false,
        createdAt : new Date(),
        projectId : projectId
    }
    const newBug = await bugApi.save(newBugData);
    const action = { type : 'BUG_ADD_NEW', payload : newBug };
    return action;
}