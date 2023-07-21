import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async(data) => {
    try {
        
        return await axios.post(`${url}/Add`, data);
        console.log(data);
        // dispatch({ type: 'CREATE', payload: data });
    } catch (err) {
        console.log(err);
    }
}
export const HomeUser = async (data) => {
    try {
        
        return await axios.post(`${url}/signup`, data);
        console.log(data);
        
    } catch (err) {
        console.log(err);
    }
    
}
export const loginUser = async (data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/login`,data)
    } catch (err) {
        console.log(err);
    }

}
export const getUsers = async () => {
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


