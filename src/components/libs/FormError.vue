<template>
  <span
    class="inline-flex items-center gap-1 text-danger-60 dark:text-danger-40"
    :class="masterClass"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'CmFormError',

  props: {
    /**
     * The component size.
     */
    size: {
      type: String,
      default: 'base',
      validator (value) {
        return [
          'xs',
          'sm',
          'base',
          'md',
          'lg',
          'xl',
          'unset'
        ].includes(value)
      }
    }
  },

  computed: {
    /**
     * The component class.
     */
    masterClass () {
      return [
        this.textClass
      ]
    },
    /**
     * The text class.
     */
    textClass () {
      switch (this.size) {
        case 'xs':
          return 'text-xs'
        case 'sm':
          return 'text-sm'
        case 'base':
          return 'text-base'
        case 'md':
          return 'text-md'
        case 'lg':
          return 'text-lg'
        case 'xl':
          return 'text-xl'
        default:
          return ''
      }
    }
  }
}
</script>
