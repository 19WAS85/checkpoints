<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <section :id="`${$options.name}-export`">
      <header>
        <h1 class="py-2 font-bold text-sm">Local Database</h1>
      </header>
      <ul class="text-xs text-gray-500 list-disc list-inside" v-if="notes">
        <li>
          <button class="underline" @click="show(notes)">
            Export Archived ({{ this.notes.length }})
          </button>
        </li>
        <li>
          <button class="underline" @click="show(trash)">
            Export Removed ({{ this.trash.length }})
          </button>
        </li>
        <li>
          <button class="underline" @click="importNotes">
            Import Notes
          </button>
        </li>
      </ul>
      <div v-if="jsonData || importing" class="text-gray-500">
        <textarea
          placeholder="Copy Database and Press Import"
          id="json-data"
          rows="10"
          class="w-full font-mono text-xs mt-2"
          onfocus="this.select()"
          v-model="jsonData">
        </textarea>
        <button class="underline text-xs" @click="importing = jsonData = null">
          Close
        </button>
      </div>
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
