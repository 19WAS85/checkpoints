<template>
  <section :id="$options.name" class="bg-gray-100">
    <h1>Archive</h1>
    <ul>
      <li v-for="note in notes" :key="note.slug">
        <a :href="`/#/${note.slug}`" @click="$emit('select', note)">
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
