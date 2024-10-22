import axios from 'axios'

const api = axios.create({
    baseURL : process.env.REACT_APP_BACKEND_URL,
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