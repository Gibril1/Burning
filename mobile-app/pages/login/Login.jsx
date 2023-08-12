import { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"
// import ToastManager, { Toast } from 'toastify-react-native'
import { useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/AuthSlice'

import styles from './login.styles'


const Login = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const handleChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = () => {
        if (!username || !password) {
            // Toast.success('Please enter all details')
            console.log('there are no details')
            return
        }

        const userData = {
            username,
            password
        }
        console.log(userData)
        dispatch(login(userData))
        dispatch(reset())
    }
    return (
        <View style={styles.container}>
            {/* <ToastManager/> */}
            <View style={styles.heroTextView}>
                <Text style={styles.heroText}>Welcome! Get Started</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => handleChange('username', text)}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => handleChange('password', text)}
                    style={styles.textInput}
                />
                <TextInput />
            </View>
            <View>
                <TouchableOpacity style={styles.touchableOpacity} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>  
            </View>
        </View>
    )

}


export default Login