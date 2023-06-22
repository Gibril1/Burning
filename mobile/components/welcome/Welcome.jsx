import { View, Text, ImageBackground } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.styles'


import Button from '../button/Button.jsx'
import Food from '../../assets/BGFood.jpg'


const Welcome = () => {
  const router = useRouter()

  
  
  return (
    <View style={styles.container}>
      <ImageBackground source={Food} style={{ width:'100%', height:'100%'}}>
        <View style={ styles.heroSection}>
            {/* <Text style={styles.heroText}>Do you want to burn it</Text> */}
        </View>
        <View style={styles.buttonSection}>
          <Button name = 'Register' handleClick={() => {router.push('/registration/Registration')}} />
          <Button name = 'Login' handleClick={() => {router.push('/login/Login')}} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Welcome
