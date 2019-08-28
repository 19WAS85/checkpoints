<template>
  <section :id="$options.name" class="rounded shadow-md" v-if="note">
    <div class="p-4">
      <header class="mb-2">
        <h1 :id="note.slug" class="font-bold text-xl">
          {{ note.title }}
        </h1>
      </header>
      <div class="mb-2 text-gray-800 text-base">{{ note.text }}</div>
      <div class="text-sm text-gray-500" @click="note.edit = true">
        {{ note.updated.toLocaleDateString() }}
        {{ note.updated.toLocaleTimeString() }} · 
        #{{ note.slug }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'note-view',
  props: { note: Object }
}
</script>
