import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async(data) => {
    try {
        return await axios.post(`${url}/Add`, data);
        // dispatch({ type: 'CREATE', payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const getUser = async () => {
    try {
        return await axios.get(`${url}/All`)
    } catch (err) {
        console.log(err);
    }
}

export const getUserDetails = async (id) => {
    // console.log("Hello",id);
    try {
        return await axios.get(`${url}/${id}`)
    } catch (err) {
        console.log(err);
    }
}

export const editUser = async(data,id) => {
    try {
        // console.log(data);
        return await axios.post(`${url}/${id}`, data);
        // dispatch({ type: 'CREATE', payload: data });
    } catch (err) {
        console.log(err);
    }
}

export const deleteUser = async(id) => {
    try {
       
        return await axios.delete(`${url}/${id}`);
        
    } catch (err) {
        console.log(err);
    }
}


