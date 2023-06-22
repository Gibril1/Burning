import { Pressable, Text, View } from 'react-native'
import styles from './button.styles'

const Button = ( { name, handleClick }) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button } onPress={handleClick}>
                <Text style={styles.buttonLabel }>{ name }</Text>
            </Pressable>
        </View>
    )
}

export default Button