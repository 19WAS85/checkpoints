<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <header class="flex">
      <div class="py-1 flex-1 text-sm">
        <h1 class="inline-block font-bold">Archive</h1>
        <button
          class="py-1 px-2 underline text-gray-500 text-xs"
          @click="importNotes">
          Import
        </button>
      </div>
      <div class="flex-1 text-white text-right">
        <button
          data-hotkey="n"
          class="py-1 px-2 rounded shadow bg-green-500 text-xs"
          @click="$emit('create', ymdFormat(new Date()))">
          Create
        </button>
      </div>
    </header>
    <input
      class="px-2 py-1 inline-block w-full border rounded border-gray-200 text-xs"
      type="text"
      placeholder="Paste data and click import"
      v-model="importData"
      v-if="importStarted">
    <ul class="mt-2 list-disc list-inside text-sm">
      <li v-for="note in notes" :key="note.key">
        <a class="cursor-pointer text-blue-500"
          :href="`#${note.key}`" @click="$emit('select', note)">
          {{ note.title }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'notes-archive',
  props: { notes: Array },
  methods: {
    importNotes () {
      if (this.importStarted) {
        const array = JSON.parse(this.importData)
        array.forEach(v => this.$emit('push', v))
      }
      this.importStarted = !this.importStarted
    }
  },
  data () { return { importStarted: false, importData: null } }
}
</script>
