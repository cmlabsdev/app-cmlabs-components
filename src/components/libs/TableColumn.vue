<template>
  <component :is="tag" class="px-4" :class="[width, height, fontSize]">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CmTableColumn',

  inject: ['size'],

  props: {
    /**
     * The element tag.
     */
    tag: {
      type: String,
      default: 'td'
    },
    /**
     * The column width.
     */
    width: {
      type: String,
      default: 'flex-1'
    }
  },

  computed: {
    /**
     * The font size class.
     */
    fontSize () {
      switch (this.size) {
        case 'sm':
          return 'text-sm'
        default:
          return 'text-base'
      }
    },
    /**
     * The height class.
     */
    height () {
      switch (this.size) {
        case 'sm':
          return 'h-10'
        default:
          return 'h-12'
      }
    }
  }
}
</script>
