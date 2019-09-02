<template>
  <footer :id="$options.name"
    class="mt-2 py-2 border-t border-gray-200 text-gray-500 text-xs text-center">
    <div>
      Keyboard Shortcuts:
      <span class="inline-block">
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">N</kbd> Create
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">E</kbd> Edit
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">R</kbd> Remove
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">D</kbd> Done
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">C</kbd> Close
      </span>
    </div>
    <div class="mt-2" v-if="notes">
      {{ this.notes.length }} Archive Notes
      <button
        class="underline text-gray-500 text-xs"
        @click="show">
        Export All
      </button>
    </div>
    <div v-if="archiveJSON">
      <input
        id="export-data"
        class="w-full font-mono text-gray-800"
        onfocus="this.select()"
        type="text"
        v-model="archiveJSON">
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'notes-footer',
  props: { notes: Array },
  methods: {
    show () {
      this.archiveJSON = JSON.stringify(this.notes)
      Vue.nextTick(() => document.getElementById('export-data').focus())
    }
  },
  data () { return { archiveJSON: null } }
}
</script>
