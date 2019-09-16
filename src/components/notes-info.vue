<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <section :id="`${$options.name}-data`">
      <header>
        <h1 class="py-2 font-bold text-sm">Local JSON Database</h1>
      </header>
      <ul class="ml-2 text-xs text-gray-500 list-disc list-inside" v-if="notes">
        <li>
          <button class="underline" @click="show(notes)">
            Archived ({{ this.notes.length }})
          </button>
        </li>
        <li>
          <button class="underline" @click="show(trash)">
            Removed ({{ this.trash.length }})
          </button>
        </li>
        <li>
          <button class="underline" @click="importNotes">Import</button>
          <span v-if="jsonData || importing"> •
            <button
              class="underline text-xs"
              @click="importing = jsonData = null">
              Close
            </button>
          </span>
        </li>
      </ul>
      <div v-if="jsonData || importing" class="mt-2 text-gray-500 text-right">
        <textarea
          placeholder="Paste JSON database and press Import"
          id="json-data"
          rows="10"
          class="p-2 w-full font-mono text-xs"
          onfocus="this.select()"
          v-model="jsonData">
        </textarea>
      </div>
    </section>
    <section :id="`${$options.name}-keys`">
      <header>
        <h1 class="py-2 font-bold text-sm">Keyboard Shortcuts</h1>
      </header>
      <ul class="ml-2 text-xs text-gray-500 list-disc list-inside">
        <li><kbd class="px-1 rounded bg-gray-100 font-bold">N</kbd> Create</li>
        <li><kbd class="px-1 rounded bg-gray-100 font-bold">E</kbd> Edit</li>
        <li><kbd class="px-1 rounded bg-gray-100 font-bold">R</kbd> Remove</li>
        <li><kbd class="px-1 rounded bg-gray-100 font-bold">D</kbd> Done</li>
        <li><kbd class="px-1 rounded bg-gray-100 font-bold">C</kbd> Close</li>
      </ul>
    </section>
  </section>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'notes-info',
  props: { notes: Array, trash: Array },
  methods: {
    importNotes () {
      if (this.importing) {
        const array = JSON.parse(this.jsonData)
        array.forEach(v => this.$emit('push', v))
      } else {
        this.jsonData = null
      }
      this.importing = !this.importing
    },
    show (collection) {
      this.jsonData = JSON.stringify(collection, null, 2)
      Vue.nextTick(() => document.getElementById('json-data').focus())
    }
  },
  data () { return { jsonData: null, importing: null } }
}
</script>
