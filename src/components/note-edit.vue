<template>
  <section :id="`${$options.name}-${note.key || Math.random()}`" v-if="note">
    <div class="text-sm p-4 rounded shadow">
      <div class="flex mb-2">
        <div class="w-1/2 pr-1">
          <input class="border border-gray-200 rounded py-1 px-2 w-full"
            type="text"
            placeholder="Title"
            v-model="note.title">
        </div>
        <div class="w-1/2">
          <input class="border border-gray-200 rounded py-1 px-2 w-full"
            type="text"
            placeholder="Link"
            v-model="link">
        </div>
      </div>
      <div class="mb-1">
        <textarea class="border border-gray-200 rounded py-1 px-2 w-full"
          placeholder="Text"
          rows="5"
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
            class="py-2 px-4 rounded shadow bg-green-500 text-white text-xs"
            @click="$emit('push', note, link)">
            Done
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'note-edit',
  props: { note: Object },
  data () { return { link: null } },
  mounted () { this.link = this.note.key }
}
</script>
