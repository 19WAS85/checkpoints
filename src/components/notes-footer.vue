<template>
  <footer :id="$options.name"
    class="mt-2 py-2 border-t border-gray-200 text-gray-500 text-xs text-center">
    Keyboard Shortcuts:
    <span class="inline-block">
      <kbd class="inline-block w-4 ml-2 rounded bg-gray-100 font-bold">N</kbd> Create
      <kbd class="inline-block w-4 ml-2 rounded bg-gray-100 font-bold">E</kbd> Edit
      <kbd class="inline-block w-4 ml-2 rounded bg-gray-100 font-bold">R</kbd> Remove
      <kbd class="inline-block w-4 ml-2 rounded bg-gray-100 font-bold">D</kbd> Done
      <kbd class="inline-block w-4 ml-2 rounded bg-gray-100 font-bold">W</kbd> Close
    </span>
  </footer>
</template>

<script>
export default { name: 'notes-footer' }
</script>
