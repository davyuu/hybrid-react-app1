import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import notes from '../data/notes'
import notesActions from '../data/actions'
import colors from '../styles/colors'
import styles from '../styles'

export default class NoteInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      noteTitle: '',
      noteContent: ''
    }
  }

  showAddNote = () => {

  }

  saveNote = () => {
    const { noteTitle, noteContent } = this.state
    if (noteTitle && noteContent) {
      notesActions.addNote(noteTitle, noteContent)
      this.setState({ noteTitle: '', noteContent: '' })
      console.log('notes:', notes)
    } else {
      alert('need both title and content')
    }
  }

  render () {
    return (
      <View>
        {/* <TextInput
          onChangeText={(noteTitle) => this.setState({ noteTitle })}
          placeholder={'Take a note...'}
          style={s.noteInput}
          value={this.state.noteTitle}
        /> */}
        <TouchableOpacity
          style={s.noteButton}
          onPress={this.showAddNote}
        >
          <Text>Take a note...</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const s = StyleSheet.create({
  ...styles,
  noteButton: {
    cursor: 'text',
    padding: 10,
    paddingRight: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.gray
  },  
  noteInput: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.gray
  }
})
