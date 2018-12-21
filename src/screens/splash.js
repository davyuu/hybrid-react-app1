import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import assets from '../assets'
import colors from '../styles/colors'
import routes from '../routes'
import styles from '../styles'

export default class Splash extends React.Component {
  static navigationOptions = {
    title: 'Splash'
  }

  componentDidMount () {
    setTimeout(() => this.props.navigation.navigate(routes.home), 2000)
  }

  render () {
    return (
      <View style={[s.center, s.main]}>
        <Image
          style={s.headerImage}
          source={assets.logo}
        />
      </View>
    )
  }
}

const s = StyleSheet.create({
  ...styles,
  main: {
    ...styles.main,
    backgroundColor: colors.primary
  },
  headerImage: {
    width: 200,
    height: 200
  }
})
