import uuidv1 from 'uuid/v1'

import notes from './notes'

export const addNote = (title, content) => {
  if (title && content) {
    return notes.push({
      id: uuidv1(),
      title,
      content
    })
  }
  return null
}

export default {
  addNote
}