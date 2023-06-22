import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        height: height*0.7,
        width: width,
        padding: 10
    },
    heroTextView: {
        width: '100%'
    },
    heroText: {
        fontSize: 20,
        alignSelf: 'center'
    },
    formContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        alignSelf: 'center'
    },
    touchableOpacity: {
        borderWidth: 1,
        padding: 15,
        backgroundColor: 'hsla(153, 25%, 84%, 1)',
        borderRadius: 10,
    },
    buttonText: {
        color: '#333',
        fontSize: 16,
        textAlign: 'center',
    }
})

export default styles