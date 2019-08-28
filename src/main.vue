<template>
  <section :id="$options.name" class="container mx-auto">
    <header class="w-full p-2 font-bold text-gray-400">
      <h1>Checkpoints</h1>
    </header>
    <div class="flex">
      <div class="w-1/4 p-1 m-1">
        <note-archive :notes="archive" @select="select" />
      </div>
      <div class="w-3/4 p-1 m-1">
        <div v-for="note in selected" :key="note.slug">
          <note-edit v-if="note.edit" :note="note" />
          <note-view v-else :note="note" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import notes from '@/notes'
import NoteArchive from '@/components/note-archive'
import NoteView from '@/components/note-view'
import NoteEdit from '@/components/note-edit'

export default {
  name: 'checkpoint-main',
  components: { NoteArchive, NoteView, NoteEdit },
  methods: {
    select (note) {
      const noteSelected = this.selected.find(n => n.slug === note.slug)
      if (!noteSelected) this.selected.push(note)
    }
  },
  data () { return { selected: [], archive: null } },
  mounted () {
    this.archive = notes.list()
    const openSlug = window.location.hash.substring(1)
    const openNote = openSlug ? notes.find(openSlug) : null
    if (openNote) this.selected.push(openNote)
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
