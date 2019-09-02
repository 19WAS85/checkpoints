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
      <button
        class="underline text-gray-500 text-xs"
        @click="show(notes)">
        {{ this.notes.length }} archive notes
      </button> •
      <button
        class="underline text-gray-500 text-xs"
        @click="show(trash)">
        {{ this.trash.length }} on trash
      </button>
    </div>
    <div class="mt-2" v-if="trash">
    </div>
    <div v-if="jsonData">
      <input
        id="json-data"
        class="w-full font-mono text-gray-800"
        onfocus="this.select()"
        type="text"
        v-model="jsonData">
    </div>
  </footer>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'notes-footer',
  props: { notes: Array, trash: Array },
  methods: {
    show (collection) {
      this.jsonData = JSON.stringify(collection)
      Vue.nextTick(() => document.getElementById('json-data').focus())
    }
  },
  data () { return { jsonData: null } }
}
</script>
