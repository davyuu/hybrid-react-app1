import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../styles'

export default class Note extends React.Component {
  render () {
    return (
      <View style={[s.flex, s.note]}>
        <Text>{this.props.note.title}</Text>
      </View>
    )
  }
}

const s = StyleSheet.create({
  ...styles,
  note: {
    flex: 1,
    minHeight: 100,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
})


Note.propTypes = {
  note: PropTypes.object.isRequired
}