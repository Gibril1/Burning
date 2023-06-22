import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/api/auth/'

const registerUser = async (user) => {
    try {
        const response = await axios.post(API_URL + 'register/', user)
        
        if (response.data) {
            localStorage.setItem('user', response.data)
        }

        return response.data
    } catch (error) {
        return error.response.data
    }
}
const loginUser = async (user) => {
    try {
        const response = await axios.post(API_URL + 'token/', user)
        
        if (response.data) {
            localStorage.setItem('user', response.data)
        }

        return response.data
    } catch (error) {
        return error.response.data
    }
}
const logoutUser = async () => {
    localStorage.removeItem('user')
}

const authService = {
    registerUser,
    loginUser,
    logoutUser
}

export default authService