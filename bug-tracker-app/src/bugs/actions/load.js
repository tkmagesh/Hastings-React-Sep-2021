import bugApi from '../services/bug-api';

//processed by the promiseMiddleware
/* export async function load(){
    const bugs = await bugApi.getAll();
    const action = { type : 'BUG_INIT', payload : bugs };
    return action;
}
 */

/* import * as axios from "axios";
export function load(){
    

    //using asyncMiddleware / redux-thunk middlewares
    //return function(dispatch, getState){
    //    axios.get('http://localhost:3030/bugs')
    //        .then(response => response.data)
    //        .then(bugs => {
    //            const action = { type : 'BUG_INIT', payload : bugs };
    //            dispatch(action);
    //        })
    //}
    
    //using the promiseMiddleware
    //return axios.get('http://localhost:3030/bugs')
    //    .then(response => response.data)
    //    .then(bugs => {
    //        const action = { type : 'BUG_INIT', payload : bugs };
    //        return action;
    //    });
    
} */

export function load(){
    return function(dispatch, getState){
        bugApi
        .getAll()
        .then(bugs => {
            const action = { type : 'BUG_INIT', payload : bugs };
            dispatch(action);
        })
        .catch(error => {
           const action = { type : 'ADD_NOTIFICATION', payload : error.message};
           dispatch(action);
        });
    }
}