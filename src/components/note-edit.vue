<template>
  <section :id="$options.name" v-if="note">
    <div>
      <input type="text" class="w-full" v-model="note.title">
    </div>
    <div>
      <input type="text" class="w-full" v-model="note.slug">
    </div>
    <div>
      <input type="text" class="w-full" v-model="note.text">
    </div>
    <div>
      <input type="text" class="w-full" v-model="note.created" disabled>
    </div>
    <div>
      <input type="text" class="w-full" v-model="note.updated" disabled>
    </div>
    <div class="text-right">
      <button @click="note.edit = false">Ok</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'note-edit',
  props: { note: Object }
}
</script>
