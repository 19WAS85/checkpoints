<template>
  <section :id="$options.name" v-if="note">
    <div class="text-sm">
      <div class="mb-2">
        <input class="border border-gray-200 rounded py-1 px-2 w-full"
          type="text"
          placeholder="Title"
          v-model="note.title">
      </div>
      <div class="mb-2">
        <input class="border border-gray-200 rounded py-1 px-2 w-full"
          type="text"
          placeholder="Slug (Link)"
          v-model="note.slug">
      </div>
      <div class="mb-2">
        <textarea class="border border-gray-200 rounded py-1 px-2 w-full"
          placeholder="Text"
          v-model="note.text">
        </textarea>
      </div>
      <div class="text-xs text-gray-500">
        Created {{ note.created.toLocaleString() }} <br/>
        Updated {{ note.updated.toLocaleString() }}
      </div>
      <div class="text-right">
        <button class="px-4 py-2 rounded-full bg-green-500 text-white font-bold"
          @click="note.edit = false">Done
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'note-edit',
  props: { note: Object }
}
</script>
