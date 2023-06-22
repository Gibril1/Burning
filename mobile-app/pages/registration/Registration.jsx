import { useState } from "react"
import { View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native"

import styles from '../login/login.styles'


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: ''
    })

    const { username, password, email, firstName, lastName } = formData

    const handleChange = (name, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleRegister = () => {
        console.log(`Username is ${username}`)
        console.log(`Password is ${password}`)
    }
    return (
        <ScrollView>
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
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => handleChange('email', text)}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={(text) => handleChange('firstName', text)}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={(text) => handleChange('lastName', text)}
                    style={styles.textInput}
                />
                <TextInput />
            </View>
            <View>
                <TouchableOpacity style={styles.touchableOpacity}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>  
            </View>
        </ScrollView>
    )

}


export default Register