<template>
  <section
    :id="note.key"
    class="relative p-4 rounded shadow"
    v-if="note">
    <header @dblclick="$emit('edit', note)">
      <h1 class="font-bold text-xl">{{ note.title }}</h1>
      <div class="text-xs text-gray-500">
        {{ note.created.toLocaleDateString() }} •
        #{{ note.key }} •
        <button class="underline" @click="exportNote">Export</button> •
        <input
          class="ml-2 font-mono"
          type="text"
          onfocus="this.select()"
          ref="exportDataInput"
          v-model="exportData"
          v-if="exportData">
        <button
          data-hotkey="e"
          class="underline"
          @click="$emit('edit', note)">
          Edit
        </button>
      </div>
    </header>
    <div
      class="note-content my-2 text-gray-800 text-sm"
      v-html="md(note.text)">
    </div>
    <button
      data-hotkey="c"
      class="absolute top-0 right-0 mt-4 mr-4 py-1 px-2 rounded shadow bg-gray-500 text-xs text-white"
      @click="$emit('close', note)">
      Close
    </button>
  </section>
</template>

<script>
import Vue from 'vue'
import markdown from '@/markdown'

export default {
  name: 'note-view',
  props: { note: Object },
  methods: {
    md (content) { return content ? markdown.render(content) : null },
    exportNote () {
      this.exportData = `[${JSON.stringify(this.note)}]`
      Vue.nextTick(() => this.$refs.exportDataInput.focus())
    }
  },
  data () { return { exportData: null } }
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
.note-content table { width: 100% }
.note-content th { background-color: #F7FAFC }
.note-content tr { border-bottom: 1px solid #E2E8F0 }
.note-content code { padding: .125rem .25rem; background-color: #F7FAFC }
.note-content code { border: 1px solid #EDF2F7; border-radius: .25rem }
.note-content pre { margin: .75rem 0; padding: .5rem; background-color: #F7FAFC }
.note-content pre { border: 1px solid #EDF2F7; border-radius: .25rem }
.note-content pre { overflow-y: auto }
.note-content pre code { padding: 0; border: none }
.note-content blockquote { margin: 0rem 1rem; font-style: italic }
.note-content ul { margin: 0 1rem; list-style: disc inside }
.note-content ol { margin: 0 1rem; list-style: decimal inside }
</style>
