<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <header class="flex">
      <h1 class="py-1 flex-1 text-sm font-bold">Archive</h1>
      <div class="flex-1 text-white text-right">
        <button
          data-hotkey="n"
          class="py-1 px-2 rounded shadow bg-green-500 text-xs"
          @click="$emit('create', ymdFormat(new Date()))">
          Create
        </button>
      </div>
    </header>
    <ul class="mt-4 list-disc list-inside text-sm">
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
  props: { notes: Array }
}
</script>
