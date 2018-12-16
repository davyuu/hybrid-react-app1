import { createSwitchNavigator } from '@react-navigation/core'
import { createBrowserApp } from '@react-navigation/web'

import Home from './screens/home'
import Splash from './screens/splash'

const routes = {
  Home,
  Splash
}

const AppNavigator = createSwitchNavigator(
  routes,
  {
    initialRouteName: 'Splash'
  }
)
const App = createBrowserApp(AppNavigator)

export default App
