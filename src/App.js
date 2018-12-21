import { createStackNavigator, createAppContainer } from 'react-navigation'

import { navRoutes, initRoute } from './routes/nav'

const App = createStackNavigator(
  createAppContainer(
    navRoutes,
    { initialRouteName: initRoute }
  )
)

export default App
