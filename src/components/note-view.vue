<template>
  <section :id="$options.name" class="p-4 rounded shadow" v-if="note">
    <header>
      <h1 :id="note.slug" class="font-bold text-xl">{{ note.title }}</h1>
    </header>
    <div class="text-xs text-gray-500" @click="note.edit = true">
      {{ note.updated.toLocaleDateString() }}
      {{ note.updated.toLocaleTimeString() }} ·
      #{{ note.slug }}
    </div>
    <div class="my-2 text-gray-800 text-base">{{ note.text }}</div>
  </section>
</template>

<script>
export default {
  name: 'note-view',
  props: { note: Object }
}
</script>
