import { createSwitchNavigator } from '@react-navigation/core'
import { createBrowserApp } from '@react-navigation/web'

import { navRoutes, initRoute } from './routes/nav'

const App = createBrowserApp(
  createSwitchNavigator(
    navRoutes,
    { initialRouteName: initRoute }
  )
)

export default App
