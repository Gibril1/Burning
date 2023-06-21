import { Pressable, Text, View } from 'react-native'
import styles from './button.styles'

const Button = ( { name }) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button }>
                <Text style={styles.buttonLabel }>{ name }</Text>
            </Pressable>
        </View>
    )
}

export default Button