import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios'

const API_URL = 'http://100.112.33.28:8000/api/auth/'

const registerUser = async (user) => {
    try {
        const response = await axios.post(API_URL + 'register/', user)
        console.log(response.data)
        if (response.data) {
            await AsyncStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}
const loginUser = async (user) => {
    try {
        const response = await axios.post(API_URL + 'token/', user) 
        
        if (response.data) {
            await AsyncStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}
const logoutUser = async () => {
    await AsyncStorage.removeItem('user')
}

const authService = {
    registerUser,
    loginUser,
    logoutUser
}

export default authService