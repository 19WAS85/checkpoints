<template>
  <section :id="$options.name">
    <div class="flex">
      <div class="w-1/4 p-1 m-1">
        <note-archive :notes="archive" @select="select" @create="create" />
      </div>
      <div class="w-3/4 p-1 m-1">
        <div class="mb-4" v-for="note in selected" :key="note.slug">
          <note-edit v-if="note.edit" :note="note" @push="push" />
          <note-view v-else :note="note" @dblclick="edit" />
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
  name: 'notes-dashboard',
  components: { NoteArchive, NoteView, NoteEdit },
  methods: {
    edit (note) { note.edit = true },
    create () { this.selected.push(notes.create({ edit: true })) },
    select (note) {
      const noteSelected = this.selected.find(n => n.slug === note.slug)
      if (!noteSelected) this.selected.push(note)
    },
    push (note) {
      notes.push(note.slug, note.title, note.text)
      note.edit = false
    }
  },
  data () { return { selected: [], archive: null } },
  mounted () {
    this.archive = notes.rawList()
    const openSlug = window.location.hash.substring(1)
    const openNote = openSlug ? notes.find(openSlug) : null
    if (openNote) this.selected.push(openNote)
  }
}
</script>