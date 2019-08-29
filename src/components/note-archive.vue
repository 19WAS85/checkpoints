<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <header class="flex font-bold text-sm">
      <h1 class="flex-1">All Notes</h1>
      <div class="flex-1 text-white text-right">
        <a href="#" class="px-2 py-1 rounded-full bg-green-500"
          @click="$emit('create')">+
        </a>
      </div>
    </header>
    <ul class="mx-1 list-disc list-inside text-sm">
      <li v-for="note in notes" :key="note.key">
        <a class="cursor-pointer underline text-blue-500"
          :href="`#${note.key}`" @click="$emit('select', note)">
          {{ note.title }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'note-archive',
  props: { notes: Array }
}
</script>
