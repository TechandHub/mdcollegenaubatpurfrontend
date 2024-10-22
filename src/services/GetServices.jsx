import axios from 'axios'
const BACKEND_URL = import.meta.env.VITE_BACKEND_URl

const api = axios.create({
    baseURL : BACKEND_URL,
})

// Creating GET request method
export const getMethod = () =>{
    return api.get("")
}

// Creating Post request method
export const postMethod = (url, formData) =>{
    return api.post(url, formData)
}

// Creating Put request method
export const putMethod = () =>{
    return api.put("")
}

// Creating Delete request method
export const deleteMethod = () =>{
    return api.delete("")
}