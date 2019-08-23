<template>
  <div :id="$options.name" class="container mx-auto">
    <header class="w-full">
      <h1 class="p-2">Checkpoints</h1>
    </header>
    <div class="flex">
      <div class="w-1/3 p-1 m-1">
        <note-archive :notes="archive" @select="select" />
      </div>
      <div class="w-2/3 p-1 m-1">
        <note-view v-for="note in selected" :key="note.slug" :note="note" />
      </div>
    </div>
  </div>
</template>

<script>
import notes from '@/notes'
import NoteArchive from '@/components/note-archive'
import NoteView from '@/components/note-view'

export default {
  name: 'main-app',
  components: { NoteArchive, NoteView },
  methods: {
    select (note) {
      const noteSelected = this.selected.find(n => n.slug === note.slug)
      if (!noteSelected) this.selected.push(note)
    }
  },
  data () { return { selected: [], archive: null } },
  mounted () { this.archive = notes.list() }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
