<template>
  <footer :id="$options.name"
    class="mt-2 text-gray-500 text-xs text-center">
    <div>
      Keyboard Shortcuts:
      <span class="inline-block">
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">N</kbd> Create
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">E</kbd> Edit
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">R</kbd> Remove
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">D</kbd> Done
        <kbd class="p-1 ml-2 rounded bg-gray-100 font-bold">C</kbd> Close
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'notes-footer',
  props: { notes: Array },
  data () { return { jsonData: null } }
}
</script>
