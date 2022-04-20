<template>
  <button
    class="inline-flex items-center justify-center border border-gray-100 dark:border-dark-60"
    :class="masterClass"
  >
    <slot />
    <cm-icon :class="textClass" icon="bx-chevron-down" />
  </button>
</template>

<script>
export default {
  name: 'CmDropdownToggler',

  props: {
    /**
     * The toggler size.
     * Defines the component gap, padding, rounded, height,
     * and text class.
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
        this.gapClass,
        this.paddingClass,
        this.roundedClass,
        this.sizeClass,
        this.textClass
      ]
    },
    /**
     * The gap class.
     */
    gapClass () {
      switch (this.size) {
        case 'xs':
          return 'gap-1'
        case 'sm':
          return 'gap-2'
        case 'base':
          return 'gap-3'
        case 'md':
          return 'gap-4'
        case 'lg':
          return 'gap-5'
        case 'xl':
          return 'gap-6'
        default:
          return ''
      }
    },
    /**
     * The padding class.
     */
    paddingClass () {
      switch (this.size) {
        case 'xs':
          return 'px-1'
        case 'sm':
          return 'px-2'
        case 'base':
          return 'px-3'
        case 'md':
          return 'px-4'
        case 'lg':
          return 'px-5'
        case 'xl':
          return 'px-6'
        default:
          return ''
      }
    },
    /**
     * The rounded class.
     */
    roundedClass () {
      switch (this.size) {
        case 'xs':
          return 'rounded-sm'
        case 'sm':
        case 'base':
        case 'md':
        case 'lg':
        case 'xl':
          return 'rounded-[3px]'
        default:
          return ''
      }
    },
    /**
     * The size class.
     */
    sizeClass () {
      switch (this.size) {
        case 'xs':
          return 'h-[22px]'
        case 'sm':
          return 'h-[28px]'
        case 'base':
          return 'h-[34px]'
        case 'md':
          return 'h-[40px]'
        case 'lg':
          return 'h-[46px]'
        case 'xl':
          return 'h-[52px]'
        default:
          return ''
      }
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
