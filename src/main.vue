<template>
  <section :id="$options.name" class="container mx-auto">
    <header class="w-full p-2 font-bold text-gray-400">
      <h1>Checkpoints</h1>
    </header>
    <notes-dashboard />
  </section>
</template>

<script>
import NotesDashboard from '@/components/notes-dashboard'

export default {
  name: 'checkpoints-main',
  components: { NotesDashboard }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
