<template>
  <span
    class="flex items-center justify-between border focus-within:ring-2 focus-within:ring-opacity-50 cm-transition"
    :class="masterClass"
  >
    <slot :error-class="errorClass" :font-size="textClass" />
  </span>
</template>

<script>
export default {
  name: 'CmFormControl',

  provide () {
    return {
      size: this.size
    }
  },

  props: {
    /**
     * If set to true, disabled state class will be used.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * If set to true, error state class will be used.
     */
    error: {
      type: Boolean,
      default: false
    },
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
        this.borderClass,
        this.disabledClass,
        this.errorClass,
        this.gapClass,
        this.paddingClass,
        this.roundedClass
      ]
    },
    /**
     * The border class.
     */
    borderClass () {
      if (this.disabled) { return 'border-gray-80 dark:border-dark-60' }
      if (this.error) { return 'border-danger-60 dark:border-danger-40 focus-within:ring-danger-60 dark:focus-within:ring-danger-40' }
      return 'border-gray-100 dark:border-dark-40 focus-within:ring-gray-100 dark:focus-within:ring-dark-40'
    },
    /**
     * The disabled state class.
     */
    disabledClass () {
      if (!this.disabled) { return '' }
      return 'bg-gray-20 dark:bg-dark-90'
    },
    /**
     * The error state class.
     */
    errorClass () {
      if (!this.error) { return 'text-gray-80 focus-within:text-dark-60 dark:text-gray-80 dark:focus-within:text-gray-60' }
      return '!text-danger-60 !dark:text-danger-40'
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
