<template>
  <section :id="`${$options.name}-${note.slug || Math.random()}`" v-if="note">
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
      <div class="flex">
        <div class="w-1/2 text-xs text-gray-500">
          Created {{ note.created.toLocaleString() }} <br/>
          Updated {{ note.updated ? note.updated.toLocaleString() : 'Never' }}
        </div>
        <div class="w-1/2 text-right">
          <button
            class="px-4 py-2 rounded-full bg-green-500 text-white font-bold"
            @click="$emit('push', note)">Done
          </button>
        </div>
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
