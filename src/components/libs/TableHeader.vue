<template>
  <tr
    class="sticky z-[1] top-0 left-0 dark:bg-dark-80"
    :class="headerTheme"
  >
    <slot />
  </tr>
</template>

<script>
export default {
  name: 'CmTableHeader',

  props: {
    /**
     * The table theme.
     */
    theme: {
      type: String,
      default: 'base',
      validator (value) {
        return ['plain', 'base', 'clean', 'last-border'].includes(value)
      }
    },
    /**
     * A transparent will render no background by default,
     * when necessary, we need to mockup the parent layer
     * background so it looks like the background is the same.
     * To do so, pass in this property with any valid
     * tailwind background class.
     */
    transparentBg: {
      type: String,
      default: 'dark:bg-transparent'
    }
  },

  computed: {
    headerTheme () {
      if (this.theme === 'plain') {
        return 'border-y border-gray-50 dark:border-dark-50 bg-white shadow-sm z-[1] ' + this.transparentBg
      } else if (this.theme === 'clean') {
        return 'bg-white shadow-sm z-[1] ' + this.transparentBg
      } else if (this.theme === 'base') {
        return 'bg-gray-20 dark:bg-dark-90'
      } else {
        return 'bg-white ' + this.transparentBg
      }
    }
  }
}
</script>
