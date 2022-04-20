<template>
  <tr
    class="bg-white dark:bg-transparent cm-transition"
    @click="$emit('click')"
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'CmTableRow',

  emits: {
    click: null
  }
}
</script>
