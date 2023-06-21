import { useState } from "react"
import { View, TextInput, Text, TouchableOpacity } from "react-native"

import styles from './login.styles'


const Login = () => {
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
        console.log(`Username is ${username}`)
        console.log(`Password is ${password}`)
    }
    return (
        <View style={styles.container}>
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
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>  
            </View>
        </View>
    )

}


export default Login