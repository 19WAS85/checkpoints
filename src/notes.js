import slugify from './slugify'

const KEY_MAX = 64
const ARCHIVE = []

const rawList = () => ARCHIVE

const find = (key) => ARCHIVE.find(n => n.key === key)

const set = (note) => {
  const index = ARCHIVE.findIndex(n => n.key === note.key)
  if (index >= 0) {
    note.updated = new Date()
    ARCHIVE[index] = note
  } else {
    ARCHIVE.push(note)
  }
  return note
}

const create = ({ key, title, text, created, edit }) => {
  const note = { key, title, text }
  note.created = created || new Date()
  if (edit) note.edit = true
  return note
}

const push = ({ key, title, text, created }) => {
  const noteKey = slugify(key || title || text).substring(0, KEY_MAX)
  return set(create({ key: noteKey, title, text, created }))
}

if (ARCHIVE.length === 0) {
  push({
    title: 'Lorem ipsum dolor sit amet',
    text: '**Proin aliquet** quam et convallis tristique.'
  })
}

export default { rawList, find, push, create }
