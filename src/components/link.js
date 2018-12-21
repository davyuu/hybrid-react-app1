import React from 'react'
import { Button, Platform } from 'react-native'
import { Link } from '@react-navigation/web'
import PropTypes from 'prop-types'

export default class DynamicLink extends React.Component {
  render () {
    if (Platform.OS === 'web') {
      return (
       <Link routeName={this.props.route}>
          {this.props.children}
        </Link>
      )
    } else {
      return (
        <Button
          onPress={() => this.props.navigation.navigate(this.props.route)}
        >
          {this.props.children}
        </Button>
      )
    }
  }
}


DynamicLink.propTypes = {
  route: PropTypes.string.isRequired
}