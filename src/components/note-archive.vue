<template>
  <section :id="$options.name" class="p-4 rounded shadow">
    <h1 class="font-bold text-sm">Archive</h1>
    <ul class="mx-1 list-disc list-inside text-sm">
      <li v-for="note in notes" :key="note.slug">
        <a class="cursor-pointer underline text-blue-500"
          :href="`#${note.slug}`"
          @click="$emit('select', note)">
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
