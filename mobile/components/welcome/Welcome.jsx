import { View, Text, ImageBackground } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.styles'


import Button from '../button/Button.jsx'
import Food from '../../assets/BGFood.jpg'


const Welcome = () => {
  const router = useRouter()

  const handlePress = () => {
    router.push('./login/Login.jsx')
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={Food} style={{ width:'100%', height:'100%'}}>
        <View style={ styles.heroSection}>
            {/* <Text style={styles.heroText}>Do you want to burn it</Text> */}
        </View>
        <View style={styles.buttonSection}>
          <Button name = 'Register' />
          <Button name = 'Login' onPress= {handlePress} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome
