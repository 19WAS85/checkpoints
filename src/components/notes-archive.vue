<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <header class="flex">
      <div class="py-1 flex-1 text-sm">
        <h1 class="inline-block font-bold">Archive</h1>
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
      class="border border-gray-200 rounded mt-2 py-1 px-2 w-full text-xs"
      type="text"
      placeholder="Search"
      onfocus="this.select()"
      v-model="query">
    <ul class="mt-2 ml-2 list-disc list-inside text-sm">
      <li v-for="note in search(query, notes)" :key="note.key">
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
    search (query, notes) {
      if (!notes) return
      if (query.length === 0) return notes
      return notes.filter(note => {
        const lowerQuery = query.toLowerCase()
        return note.title.toLowerCase().indexOf(lowerQuery) >= 0 ||
          note.text.toLowerCase().indexOf(lowerQuery) >= 0
      })
    }
  },
  data () { return { query: '' } }
}
</script>
