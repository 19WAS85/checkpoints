const parse = (values) => {
  return {
    ...values,
    edit: values.edit,
    created: values.created ? new Date(values.created) : new Date(),
    updated: values.updated ? new Date(values.updated) : null
  }
}

const load = (key) => {
  const stored = localStorage.getItem(key)
  const collection = JSON.parse(stored) || []
  if (stored) return collection.map(v => parse(v))
}

const source = (url) => {
  return new Promise(resolve => {
    const http = new XMLHttpRequest()
    http.onreadystatechange = () => {
      if (http.readyState !== 4) return
      resolve(JSON.parse(http.response))
    }
    http.open('GET', url)
    http.send()
  })
}

const save = (key, obj) => localStorage.setItem(key, JSON.stringify(obj))

export default { parse, save, load, source }
