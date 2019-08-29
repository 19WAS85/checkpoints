<template>
  <section :id="`${$options.name}-${note.key || Math.random()}`" v-if="note">
    <div class="text-sm p-4 rounded shadow">
      <div class="flex mb-2">
        <div class="w-1/2 pr-1">
          <input class="border border-gray-200 rounded py-1 px-2 w-full"
            autofocus type="text" placeholder="Title" v-model="note.title">
        </div>
        <div class="w-1/2">
          <input class="border border-gray-200 rounded py-1 px-2 w-full"
            type="text" placeholder="Key (Link)" v-model="note.key">
        </div>
      </div>
      <div class="mb-1">
        <textarea class="border border-gray-200 rounded py-1 px-2 w-full"
          placeholder="Text" rows="5" v-model="note.text">
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
