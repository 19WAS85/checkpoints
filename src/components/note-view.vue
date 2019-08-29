<template>
  <section :id="`${$options.name}-${note.key}`"
    class="relative p-4 rounded shadow"
    @dblclick="$emit('dblclick', note)"
    v-if="note">
    <header>
      <h1 :id="note.key" class="font-bold text-xl">{{ note.title }}</h1>
    </header>
    <div class="text-xs text-gray-500">
      {{ note.created.toLocaleDateString() }} • #{{ note.key }}
    </div>
    <div class="my-2 text-gray-800 text-base">{{ note.text }}</div>
    <button class="absolute top-0 right-0 mt-4 mr-4 py-1 px-2 rounded shadow bg-gray-400 text-xs text-white"
      @click="$emit('close', note)">
      Close
    </button>
  </section>
</template>

<script>
export default {
  name: 'note-view',
  props: { note: Object }
}
</script>
