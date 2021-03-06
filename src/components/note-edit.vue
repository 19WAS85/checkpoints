<template>
  <section :id="`${$options.name}-${note.key}`" v-if="note">
    <div class="text-sm p-4 rounded shadow">
      <div class="flex mb-2">
        <div class="w-1/2 pr-1">
          <input
            class="border border-gray-200 rounded py-1 px-2 w-full"
            type="text"
            placeholder="Title"
            onfocus="this.select()"
            ref="titleInput"
            v-model="note.title"
            @blur="updateLink">
        </div>
        <div class="w-1/2">
          <input
            class="border border-gray-200 text-gray-500 font-mono rounded py-1 px-2 w-full"
            type="text"
            onfocus="this.select()"
            placeholder="Hashtag Name (Link)"
            v-model="link"
            @blur="updateLink">
        </div>
      </div>
      <div class="mb-1">
        <textarea class="border border-gray-200 rounded py-1 px-2 w-full font-mono text-xs"
          rows="10"
          placeholder="Text"
          ref="noteTxtArea"
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
            data-hotkey="d"
            class="py-2 px-4 mr-2 rounded shadow bg-green-500 text-white text-xs"
            @click="$emit('push', note, link)">
            Done
          </button>
          <button
            data-hotkey="r"
            class="py-1 px-2 underline text-gray-500 text-xs"
            @click="remove">
            Remove
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import slugify from '@/slugify'

export default {
  name: 'note-edit',
  props: { note: Object },
  methods: {
    updateLink () {
      if (!this.link || !this.note.updated) this.link = slugify(this.note.title)
    },
    remove () {
      const message = `Remove ${this.note.title}?`
      if (confirm(message)) this.$emit('remove', this.note)
    },
    autoHeight () {
      const txt = this.$refs.noteTxtArea
      const heightCss = `height:${txt.scrollHeight}px;overflow-y:hidden;`
      txt.setAttribute('style', heightCss)
      txt.addEventListener('input', () => {
        txt.style.height = 'auto'
        txt.style.height = `${txt.scrollHeight}px`
      }, false)
    }
  },
  data () { return { link: null } },
  mounted () {
    this.link = this.note.key
    if (!this.note.updated) this.$refs.titleInput.focus()
    this.autoHeight()
  }
}
</script>
