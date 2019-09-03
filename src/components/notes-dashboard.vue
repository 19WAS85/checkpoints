<template>
  <section :id="$options.name">
    <div class="flex">
      <div class="w-1/4 p-1 m-1">
        <notes-archive
          :notes="notes"
          @select="select"
          @create="create" />
        <notes-info class="mt-4" :notes="notes" :trash="trash" @push="push"/>
      </div>
      <div class="w-3/4 p-1 m-1">
        <div class="mb-4" v-for="note in selected" :key="note.key">
          <note-edit
            v-if="note.edit"
            :note="note"
            @push="push"
            @remove="remove" />
          <note-view
            v-else
            :note="note"
            @edit="edit"
            @close="close" />
        </div>
      </div>
    </div>
    <notes-footer :notes="notes" />
  </section>
</template>

<script>
import archive from '@/archive'
import slugify from '@/slugify'
import NotesArchive from '@/components/notes-archive'
import NoteView from '@/components/note-view'
import NoteEdit from '@/components/note-edit'
import NotesFooter from '@/components/notes-footer'
import NotesInfo from '@/components/notes-info'

const { location } = window

export default {
  name: 'notes-dashboard',
  components: { NotesArchive, NoteView, NoteEdit, NotesFooter, NotesInfo },
  methods: {
    edit (note) { note.edit = true },
    select (note) {
      const isSelected = this.selected.find(n => n.key === note.key)
      if (isSelected) this.removeSelected(note.key)
      this.selected.unshift(note)
      location.hash = note.key
    },
    removeSelected (key) {
      const index = this.selected.findIndex(n => n.key === key)
      if (index > -1) this.selected.splice(index, 1)
    },
    close (note) {
      this.removeSelected(note.key)
      window.scrollTo(0, 0)
      const first = this.selected[0]
      location.hash = first ? first.key : ''
    },
    create (title) {
      if (!title) return
      const key = slugify(title)
      this.selected.unshift(archive.create({ key, title, edit: true }))
    },
    push (note, link) {
      if (!note.title && !note.text) return
      if (link && note.key && note.key !== link) {
        archive.changeKey(note.key, link)
        note.key = link
      }
      note.edit = false
      archive.push(note)
      location.hash = note.key
    },
    remove (note) {
      archive.remove(note.key)
      this.close(note)
    },
    addHashListener () {
      window.addEventListener('hashchange', (event) => {
        const key = event.newURL.split('#')[1]
        const note = archive.find(key)
        if (note) this.select(note)
        else this.create(key)
      }, false)
    }
  },
  data () { return { selected: [], notes: null, trash: null } },
  mounted () {
    this.notes = archive.list()
    this.trash = archive.trash()
    const key = location.hash.substring(1)
    const note = key ? archive.find(key) : this.notes[0]
    if (note) this.selected.unshift(note)
    else this.create(key)
    this.addHashListener()
  }
}
</script>
