import screens from '../screens'
import routes from './index'

export const navRoutes = Object.keys(routes).reduce((result, key) => {
  result[key] = screens[key]
  return result
}, {})

export const initRoute = routes.splash