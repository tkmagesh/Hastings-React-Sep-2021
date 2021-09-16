import * as axios from "axios";
export function load(){
    /* const bugs = [
        {
            id: 1,
            name : 'Inmemory bug - 1',
            isClosed : false,
            createdAt : new Date()
        },
        {
            id: 2,
            name : 'Inmemory bug - 2',
            isClosed : true,
            createdAt : new Date()
        }
    ]; 
    const action = { type : 'BUG_INIT', payload : bugs };
    return action;
    */
    return function(dispatch){
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugs => {
                const action = { type : 'BUG_INIT', payload : bugs };
                dispatch(action);
            })
    }
   
    
}