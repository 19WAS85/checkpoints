import slugify from './slugify'

const SLUG_MAX = 64
const ARCHIVE = []

const find = (slug) => ARCHIVE.find(i => i.slug === slug)

const list = () => ARCHIVE.slice()

const set = (item) => {
  const index = ARCHIVE.findIndex(i => i.slug === item.slug)
  if (index >= 0) ARCHIVE[index] = item
  else ARCHIVE.push(item)
}

const create = ({ slug, title, text, edit = false } = { }) => {
  const created = new Date()
  return { slug, title, text, created, edit, updated: null }
}

const push = (slug, title, text) => {
  const itemSlug = slugify(slug || title).substring(0, SLUG_MAX)
  const item = find(itemSlug) || create({ slug: itemSlug, title, text })
  const newItem = { ...item, ...{ title, text } }
  newItem.updated = new Date()
  set(newItem)
  return newItem
}

const size = () => Object.keys(ARCHIVE).length

push(null,
  'Lorem ipsum dolor sit amet',
  '**Proin aliquet** quam et convallis tristique.')

export default { list, find, create, push, size }
