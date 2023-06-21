import { View, Text, ImageBackground } from 'react-native'

import styles from './welcome.styles'


import Button from '../button/Button.jsx'
import Food from '../../assets/food.jpg'


const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Food} style={{ width:'100%', height:'100%'}}>
        <View style={ styles.heroSection}>
            {/* <Text style={styles.heroText}>Do you want to burn it</Text> */}
        </View>
        <View style={styles.buttonSection}>
          <Button name = 'Register' />
          <Button name = 'Login' />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome
