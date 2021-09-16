import * as axios from 'axios';

const endPoint = 'http://localhost:3030/bugs';

/* function getAll(){
    return axios.get(endPoint)
        .then(response => response.data);
} */

async function getAll(){
    const response = await axios.get(endPoint);
    return response.data; //returns all the bugs the server
}

async function save(bugData){
    if (bugData.id === 0){
        const response = await axios.post(endPoint, bugData)
        return response.data; // returns the newly created bug
    } else {
        const response = await axios.put(`${endPoint}/${bugData.id}`, bugData)
        return response.data; // returns the updated bug
    }
}

async function remove(bugData){
    const response = await axios.delete(`${endPoint}/${bugData.id}`);
    return response.data;
}

const bugApi = { getAll, save, remove };

export default bugApi;