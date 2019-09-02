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

const start = () => {
  return [
    parse({ title: ' Getting Started', text: 'Hello, welcome to #Checkpoints, your personal knowledge wiki!\n\nEdit and list here the start content, it will be your home page.\n\n - Tips and treats here: #Checkpoint;\n\n - http://the-future-site.com;' }),
    parse({ title: 'Checkpoints', text: '> Client hash-link based personal wiki using markdown and local-storage.\n\n### Tricks\n\n - Create rich text, list, images, tables and others using [markdown](https://guides.github.com/features/mastering-markdown/);\n\n - Click or create simple `#hash` or `[Markdown Links](#hash)` to create related content;\n\n - Archive is character sorted, use prefixes to group them;\n\n - Double click at item header is a shortcut to edit;\n\n - The first archive item is your default;' })
  ]
}

export default { parse, save, load, start }
