import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import colors from '../styles/colors'
import styles from '../styles'

export default class Note extends React.Component {
  render () {
    return (
      <View style={[s.flex, s.note]}>
        <Text style={s.title}>{this.props.note.title}</Text>
        <Text style={s.content}>{this.props.note.content}</Text>
      </View>
    )
  }
}

const s = StyleSheet.create({
  ...styles,
  note: {
    flex: 1,
    minHeight: 100,
    maxWidth: 200,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.gray
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10
  },
  content: {

  }
})


Note.propTypes = {
  note: PropTypes.object.isRequired
}