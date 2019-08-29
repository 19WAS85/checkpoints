<template>
  <section :id="`${$options.name}-${note.key}`"
    class="relative p-4 rounded shadow"
    @dblclick="$emit('dblclick', note)"
    v-if="note">
    <header>
      <h1 :id="note.key" class="font-bold text-xl">{{ note.title }}</h1>
    </header>
    <div class="text-xs text-gray-500">
      {{ note.created.toLocaleDateString() }} • #{{ note.key }}
    </div>
    <div class="note-content my-2 text-gray-700 text-sm"
      v-html="md(note.text)">
    </div>
    <button class="absolute top-0 right-0 mt-4 mr-4 py-1 px-2 rounded shadow bg-gray-400 text-xs text-white"
      @click="$emit('close', note)">
      Close
    </button>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it'

const markdown = new MarkdownIt({ html: true, linkify: true })

export default {
  name: 'note-view',
  props: { note: Object },
  methods: { md (content) { return content ? markdown.render(content) : null } }
}
</script>

<style>
.note-content h1 { margin: .75rem 0; font-weight: bold; font-size: 1.25rem }
.note-content h2 { margin: .75rem 0; font-weight: bold; font-size: 1.125rem }
.note-content h3 { margin: .75rem 0; font-weight: bold; font-size: 1rem }
.note-content h4 { margin: .75rem 0; font-weight: bold; font-size: .875rem }
.note-content h5 { margin: .75rem 0; font-weight: bold; font-size: .75rem }
.note-content h6 { margin: .75rem 0; font-size: .75rem }
.note-content a { color: #4299E1 }
.note-content p { margin: 1rem 0 }
.note-content code { padding: .125rem .25rem; background-color: #F7FAFC }
.note-content code { border: 1px solid #EDF2F7; border-radius: .25rem }
.note-content pre { margin: .75rem 0; padding: .5rem; background-color: #F7FAFC }
.note-content pre { border: 1px solid #EDF2F7; border-radius: .25rem }
.note-content pre code { padding: 0; border: none }
.note-content ul{ margin: .75rem 0.5rem }
.note-content li { list-style: disc inside }
</style>
