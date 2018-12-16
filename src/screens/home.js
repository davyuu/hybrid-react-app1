import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import Note from '../components/note'
import notes from '../data/notes'
import styles from '../styles'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render () {
    return (
      <View style={[s.center, s.main]}>
        <FlatList
          data={notes}
          style={s.notes}
          renderItem={({item}) => <Note note={item}/>}
          numColumns={2}
        />
      </View>
    )
  }
}

const s = StyleSheet.create({
  ...styles,
  notes: {
    marginVertical: 10
  }
})
