<template>
  <section :id="$options.name" class="container mx-auto">
    <header class="w-full px-3 py-1">
      <h1>
        <a href="/" class="inline-block align-middle opacity-50">
          <img class="w-8 mr-2 inline-block" src="/open-book.png">
          <span class="inline-block align-middle font-light text-lg">
            Checkpoints
          </span>
        </a>
      </h1>
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
