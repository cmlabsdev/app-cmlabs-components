<template>
  <i class="cm-transition bx" :class="icon" @click="$emit('click', $event)" />
</template>

<script>
export default {
  name: 'CmIcon',

  props: {
    /**
     * The icon class.
     * Used with only boxicons without the bx prefix.
     * Example: bx-user, bx-calendar, bx-circle, etc.
     */
    icon: {
      type: String,
      default: null
    }
  },

  emits: {
    click: null
  }
}
</script>
