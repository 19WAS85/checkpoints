const parse = (values) => {
  return {
    ...values,
    edit: values.edit,
    created: new Date(values.created),
    updated: values.updated ? new Date(values.updated) : null
  }
}

const load = (key) => {
  const stored = localStorage.getItem(key)
  const collection = JSON.parse(stored) || []
  if (stored) return collection.map(v => parse(v))
}

const save = (key, obj) => localStorage.setItem(key, JSON.stringify(obj))

export default { parse, save, load }
