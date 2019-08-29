import slugify from './slugify'

const STORAGE_KEY = 'checkpoints.ARCHIVE'
const KEY_MAX = 64
const ARCHIVE = []

const parse = (v) => {
  return {
    ...v,
    edit: false,
    created: new Date(v.created),
    updated: v.updated ? new Date(v.updated) : null
  }
}

const stored = localStorage.getItem(STORAGE_KEY)
if (stored) JSON.parse(stored).forEach(v => ARCHIVE.push(parse(v)))

const rawList = () => ARCHIVE

const find = (key) => ARCHIVE.find(n => n.key === key)

const set = (note) => {
  note.updated = new Date()
  const index = ARCHIVE.findIndex(n => n.key === note.key)
  if (index > -1) ARCHIVE[index] = note
  else ARCHIVE.push(note)
  ARCHIVE.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ARCHIVE))
  return note
}

const create = ({ key, title, text, created, edit }) => {
  const note = { key, title, text, created, edit }
  if (!note.created) note.created = new Date()
  note.updated = null
  return note
}

const push = ({ key, title, text, created }) => {
  const noteKey = slugify(key || title || text).substring(0, KEY_MAX)
  return set(create({ key: noteKey, title, text, created }))
}

const changeKey = (oldKey, newKey) => {
  const note = find(oldKey)
  if (note) note.key = newKey
}

const remove = (key) => {
  const index = ARCHIVE.findIndex(n => n.key === key)
  if (index > -1) ARCHIVE.splice(index, 1)
}

export default { rawList, find, push, create, changeKey, remove }
