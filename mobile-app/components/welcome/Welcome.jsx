import { View, Text, ImageBackground } from 'react-native'
import styles from './welcome.styles'


import Button from '../button/Button'
import Food from '../../assets/BGFood.jpg'


const Welcome = ({ navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Food} style={{ width:'100%', height:'100%'}}>
        <View style={ styles.heroSection}>
            <Text style={styles.heroText}>Do you want to burn it</Text>
        </View>
        <View style={styles.buttonSection}>
          <Button name = 'Register' handleClick={() => {navigation.navigate('register')}} />
          <Button name = 'Login' handleClick={() => {navigation.navigate('login')}} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome
