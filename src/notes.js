import slugify from './slugify'

const SLUG_MAX = 32
const ARCHIVE = { }

const find = (slug) => ARCHIVE[slug]

const list = () => Object.keys(ARCHIVE).map((k) => ARCHIVE[k])

const set = (item) => { if (item.slug) ARCHIVE[item.slug] = item }

const create = ({ slug, title, text, edit = false } = { }) => {
  const created = new Date()
  const updated = null
  return { slug, title, text, created, updated, edit }
}

const push = (slug, { title, text } = { }) => {
  const itemSlug = slugify(slug || title).substring(0, SLUG_MAX)
  const item = find(itemSlug) || create({ slug: itemSlug, title, text })
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

export default { list, find, create, push, size }
