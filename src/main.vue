<template>
  <section :id="$options.name" class="container mx-auto">
    <header class="w-full px-4 pt-2 pb-1">
      <h1>
        <a href="." class="inline-block align-bottom opacity-50">
          <img class="w-8 mr-2 inline-block" src="open-book.png">
          <span class="inline-block align-bottom font-light text-lg">
            Checkpoints
            <small class="text-xs align-middle">
              (v{{ version }})
            </small>
          </span>
        </a>
      </h1>
    </header>
    <notes-dashboard />
  </section>
</template>

<script>
import { version } from '../package.json'
import NotesDashboard from '@/components/notes-dashboard'

export default {
  name: 'checkpoints-main',
  components: { NotesDashboard },
  data () { return { version } },
  mounted () {
    const env = process.env.NODE_ENV
    if (env !== 'production') this.version += `-${env}`
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
