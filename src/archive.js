import store from './store'
import slugify from './slugify'

const ARCHIVE_KEY = 'checkpoints.ARCHIVE'
const TRASH_KEY = 'checkpoints.TRASH'
const KEY_MAX_SIZE = 64

const ARCHIVE = store.load(ARCHIVE_KEY)
const TRASH = store.load(TRASH_KEY)

const create = (values) => store.parse(values)
const find = (key) => ARCHIVE.find(n => n.key === key)
const list = () => ARCHIVE
const trash = () => TRASH

const save = () => {
  store.save(ARCHIVE_KEY, ARCHIVE)
  store.save(TRASH_KEY, TRASH)
}

const set = (note) => {
  note.updated = new Date()
  const index = ARCHIVE.findIndex(n => n.key === note.key)
  if (index > -1) ARCHIVE[index] = note
  else ARCHIVE.push(note)
  ARCHIVE.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
  save()
  return note
}

const push = ({ key, title, text, created }) => {
  const noteKey = slugify(key || title || text).substring(0, KEY_MAX_SIZE)
  return set(create({ key: noteKey, title, text, created }))
}

const changeKey = (oldKey, newKey) => {
  const note = find(oldKey)
  if (note) note.key = newKey
}

const remove = (key) => {
  const index = ARCHIVE.findIndex(n => n.key === key)
  if (index < 0) return
  ARCHIVE[index].deleted = new Date()
  TRASH.push(ARCHIVE[index])
  ARCHIVE.splice(index, 1)
  save()
}

export default { create, find, list, trash, push, changeKey, remove }
