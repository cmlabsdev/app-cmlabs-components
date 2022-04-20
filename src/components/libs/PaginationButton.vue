<template>
  <button
    class="w-auto h-full flex items-center justify-center py-1 px-3 cm-transition"
    :class="masterClass"
    :disabled="isDisabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CmPaginationButton',

  props: {
    /**
     * Is the item active?
     * If set to true, the active class will be set.
     */
    isActive: {
      type: Boolean,
      default: false
    },
    /**
     * Is the item disabled?
     * If set to true, the disabled class will be set.
     */
    isDisabled: {
      type: Boolean,
      default: false
    }
  },

  emits: {
    click: null
  },

  computed: {
    /**
     * The component class.
     */
    masterClass () {
      if (this.isDisabled) { return 'text-gray-80 dark:text-dark-60 cursor-not-allowed' }
      if (this.isActive) { return 'bg-primary-60 dark:bg-primary-40 text-white' }
      return 'text-primary-60 hover:bg-primary-60 hover:text-white dark:text-primary-40 dark:hover:bg-primary-40 dar dark:hover:text-white'
    }
  }
}
</script>
