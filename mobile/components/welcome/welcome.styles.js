import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: width,
    height: height
  },
  heroSection: {
    flex: 3,
    width: width,
    height: '80%'
  },
  heroText: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  buttonSection: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default styles
