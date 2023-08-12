import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './store/store'
import { Provider } from 'react-redux'
const Stack = createNativeStackNavigator();

import Welcome from './components/welcome/Welcome';
import Login from './pages/login/Login'
import Register from './pages/registration/Registration'

export default function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' component={Welcome} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='register' component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


