<template>
  <section :id="$options.name" v-if="note">
    <header>
      <h1>{{ note.title }}</h1>
      <small @click="note.edit = true">
        {{ note.created }} /
        {{ note.updated }} /
        {{ note.slug }}
      </small>
    </header>
    <div>{{ note.text }}</div>
  </section>
</template>

<script>
export default {
  name: 'note-view',
  props: { note: Object }
}
</script>
