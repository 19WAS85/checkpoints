import slugify from './slugify'

const SLUG_MAX = 32
const ARCHIVE = { }

const find = (slug) => ARCHIVE[slug]

const list = () => Object.keys(ARCHIVE).map((k) => ARCHIVE[k])

const set = (item) => {
  if (!item.slug) throw Error(`Invalid slug [${item.slug}]`)
  ARCHIVE[item.slug] = item
}

const create = (slug, title, text) => {
  const itemSlug = slugify(slug || title).substring(0, SLUG_MAX)
  const created = new Date()
  return { title, text, created, slug: itemSlug, updated: null, edit: false }
}

const push = (slug, { title, text } = { }) => {
  const item = find(slug) || create(slug, title, text)
  const newItem = { ...item, ...{ title, text } }
  newItem.updated = new Date()
  set(newItem)
  return newItem
}

const size = () => Object.keys(ARCHIVE).length

push(null, {
  title: 'Lorem ipsum dolor sit amet',
  text: '**Proin aliquet** quam et convallis tristique.'
})

export default { list, find, push, size }
