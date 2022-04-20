<template>
  <button
    class="items-center justify-center cm-transition outline-none focus:outline-none"
    :class="masterClass"
    :disabled="disabled"
    :type="type"
    @click="$emit('click')"
  >
    <cm-loader v-if="loading" />
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'CmButton',

  props: {
    /**
     * Should the button be block?
     */
    block: {
      type: Boolean,
      default: false
    },
    /**
     * Should the button render only text?
     */
    contextual: {
      type: Boolean,
      default: false
    },
    /**
     * Should the button be disabled?
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Should the button be loading?
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Should the button be outline?
     */
    outline: {
      type: Boolean,
      default: false
    },
    /**
     * The button size.
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
    },
    /**
     * The button native type attribute.
     */
    type: {
      type: String,
      default: 'button'
    },
    /**
     * The button variant.
     */
    variant: {
      type: String,
      default: 'primary',
      validator (value) {
        return [
          'primary',
          'secondary',
          'info',
          'success',
          'danger',
          'warning',
          'dark',
          'gray',
          'light',
          'unset'
        ].includes(value)
      }
    }
  },

  emits: {
    click: null
  },

  computed: {
    /**
     * The button all classes.
     */
    masterClass () {
      return [
        this.colorClass,
        this.contextualClass,
        this.disabledClass,
        this.displayClass,
        this.gapClass,
        this.outlineClass,
        this.paddingClass,
        this.roundedClass,
        this.sizeClass,
        this.textClass,
        this.variantClass
      ]
    },
    /**
     * The color class for filled button.
     */
    colorClass () {
      if (this.contextual || this.outline) { return }

      switch (this.variant) {
        case 'light':
          return 'text-dark-30'
        case 'primary':
        case 'secondary':
        case 'info':
        case 'success':
        case 'danger':
        case 'warning':
        case 'dark':
        case 'gray':
          return 'text-white dark:text-dark-100'
        default:
          return ''
      }
    },
    /**
     * The contextual class.
     */
    contextualClass () {
      if (!this.contextual) { return }

      const baseClass = 'bg-transparent '

      switch (this.variant) {
        case 'primary':
          return baseClass + (
            `text-primary-60 hover:text-primary-70 focus:text-primary-70
            dark:text-primary-40 dark:hover:text-primary-50 dark:focus:text-primary-50`
          )
        case 'secondary':
          return baseClass + (
            `text-secondary-60 hover:text-secondary-70 focus:text-secondary-70
            dark:text-secondary-40 dark:hover:text-secondary-50 dark:focus:text-secondary-50`
          )
        case 'info':
          return baseClass + (
            `text-info-60 hover:text-info-70 focus:text-info-70
            dark:text-info-40 dark:hover:text-info-50 dark:focus:text-info-50`
          )
        case 'success':
          return baseClass + (
            `text-success-60 hover:text-success-70 focus:text-success-70
            dark:text-success-40 dark:hover:text-success-50 dark:focus:text-success-50`
          )
        case 'danger':
          return baseClass + (
            `text-danger-60 hover:text-danger-70 focus:text-danger-70
            dark:text-danger-40 dark:hover:text-danger-50 dark:focus:text-danger-50`
          )
        case 'warning':
          return baseClass + (
            `text-warning-60 hover:text-warning-70 focus:text-warning-70
            dark:text-warning-40 dark:hover:text-warning-50 dark:focus:text-warning-50`
          )
        case 'dark':
          return baseClass + (
            `text-dark-60 hover:text-dark-70 focus:text-dark-70
            dark:text-dark-40 dark:hover:text-dark-50 dark:focus:text-dark-50`
          )
        case 'gray':
          return baseClass + (
            `text-gray-110 hover:text-dark-20 focus:text-dark-20
            dark:text-gray-110 dark:hover:text-gray-120 dark:focus:text-gray-120`
          )
        case 'light':
          return baseClass + (
            `text-gray-60 hover:text-gray-70 focus:text-gray-70
            dark:text-gray-40 dark:hover:text-gray-50 dark:focus:text-gray-50`
          )
        default:
          return ''
      }
    },
    /**
     * The disabled class.
     */
    disabledClass () {
      if (!this.disabled) { return }
      if (this.outline) { return 'border border-gray-60 dark:border-dark-40 text-gray-60 dark:text-dark-20' }
      if (this.contextual) { return 'opacity-50 cursor-not-allowed' }
      return 'bg-gray-60 dark:bg-dark-70 text-white dark:text-dark-50'
    },
    /**
     * The display class.
     */
    displayClass () {
      if (this.block) { return 'flex w-full' }
      return 'inline-flex'
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
     * The outline class.
     */
    outlineClass () {
      if (!this.outline || this.disabled || this.contextual) { return }

      const baseClass = 'border focus:ring-2 focus:ring-opacity-50 '

      switch (this.variant) {
        case 'primary':
          return baseClass + (
            `border-primary-60 text-primary-60 hover:text-white focus:text-white hover:bg-primary-60 focus:bg-primary-60 focus:ring-primary-60
            dark:border-primary-40 dark:text-primary-40 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-primary-40 dark:focus:bg-primary-40 dark:focus:ring-primary-50`
          )
        case 'secondary':
          return baseClass + (
            `border-secondary-60 text-secondary-60 hover:text-white focus:text-white hover:bg-secondary-60 focus:bg-secondary-60 focus:ring-secondary-60
            dark:border-secondary-40 dark:text-secondary-40 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-secondary-40 dark:focus:bg-secondary-40 dark:focus:ring-secondary-50`
          )
        case 'info':
          return baseClass + (
            `border-info-60 text-info-60 hover:text-white focus:text-white hover:bg-info-60 focus:bg-info-60 focus:ring-info-60
            dark:border-info-40 dark:text-info-40 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-info-40 dark:focus:bg-info-40 dark:focus:ring-info-50`
          )
        case 'success':
          return baseClass + (
            `border-success-60 text-success-60 hover:text-white focus:text-white hover:bg-success-60 focus:bg-success-60 focus:ring-success-60
            dark:border-success-40 dark:text-success-40 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-success-40 dark:focus:bg-success-40 dark:focus:ring-success-50`
          )
        case 'danger':
          return baseClass + (
            `border-danger-60 text-danger-60 hover:text-white focus:text-white hover:bg-danger-60 focus:bg-danger-60 focus:ring-danger-60
            dark:border-danger-40 dark:text-danger-40 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-danger-40 dark:focus:bg-danger-40 dark:focus:ring-danger-50`
          )
        case 'warning':
          return baseClass + (
            `border-warning-60 text-warning-60 hover:text-white focus:text-white hover:bg-warning-60 focus:bg-warning-60 focus:ring-warning-60
            dark:border-warning-40 dark:text-warning-40 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-warning-40 dark:focus:bg-warning-40 dark:focus:ring-warning-50`
          )
        case 'dark':
          return baseClass + (
            `border-dark-60 text-dark-60 hover:text-white focus:text-white hover:bg-dark-60 focus:bg-dark-60 focus:ring-dark-60
            dark:border-dark-40 dark:text-dark-20 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-dark-40 dark:focus:bg-dark-40 dark:focus:ring-dark-50`
          )
        case 'gray':
          return baseClass + (
            `border-gray-110 text-gray-110 hover:text-white focus:text-white hover:bg-gray-110 focus:bg-gray-110 focus:ring-gray-110
            dark:border-gray-110 dark:text-gray-110 dark:hover:text-dark-100 dark:focus:text-dark-100 dark:hover:bg-gray-110 dark:focus:bg-gray-110 dark:focus:ring-gray-120`
          )
        case 'light':
          return baseClass + (
            `border-gray-60 text-gray-60 hover:text-dark-30 focus:text-dark-30 hover:bg-gray-60 focus:bg-gray-60 focus:ring-gray-60
            dark:border-gray-40 dark:text-gray-40 dark:hover:text-dark-30 dark:focus:text-dark-30 dark:hover:bg-gray-40 dark:focus:bg-gray-40 dark:focus:ring-gray-50`
          )
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
          return 'h-[20px]'
        case 'sm':
          return 'h-[26px]'
        case 'base':
          return 'h-[32px]'
        case 'md':
          return 'h-[38px]'
        case 'lg':
          return 'h-[44px]'
        case 'xl':
          return 'h-[50px]'
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
    },
    /**
     * The variant class.
     */
    variantClass () {
      if (this.outline || this.disabled || this.contextual) { return }

      const baseClass = 'focus:ring-2 focus:ring-opacity-50 '

      switch (this.variant) {
        case 'primary':
          return baseClass + (
            `bg-primary-60 hover:bg-primary-70 focus:bg-primary-70 focus:ring-primary-60
            dark:bg-primary-40 dark:hover:bg-primary-50 dark:focus:bg-primary-50 dark:focus:ring-primary-40`
          )
        case 'secondary':
          return baseClass + (
            `bg-secondary-60 hover:bg-secondary-70 focus:bg-secondary-70 focus:ring-secondary-60
            dark:bg-secondary-40 dark:hover:bg-secondary-50 dark:focus:bg-secondary-50 dark:focus:ring-secondary-40`
          )
        case 'info':
          return baseClass + (
            `bg-info-60 hover:bg-info-70 focus:bg-info-70 focus:ring-info-60
            dark:bg-info-40 dark:hover:bg-info-50 dark:docus:bg-info-50 dark:focus:ring-info-40`
          )
        case 'success':
          return baseClass + (
            `bg-success-60 hover:bg-success-70 focus:bg-success-70 focus:ring-success-60
            dark:bg-success-40 dark:hover:bg-success-50 dark:focus:bg-success-50 dark:focus:ring-success-40`
          )
        case 'danger':
          return baseClass + (
            `bg-danger-60 hover:bg-danger-70 focus:bg-danger-70 focus:ring-danger-60
            dark:bg-danger-40 dark:hover:bg-danger-50 dark:focus:bg-danger-50 dark:focus:ring-danger-40`
          )
        case 'warning':
          return baseClass + (
            `bg-warning-60 hover:bg-warning-70 focus:bg-warning-70 focus:ring-warning-60
            dark:bg-warning-40 dark:hover:bg-warning-50 dark:focus:bg-warning-50 dark:focus:ring-warning-40`
          )
        case 'dark':
          return baseClass + (
            `bg-dark-60 hover:bg-dark-70 focus:bg-dark-70 focus:ring-dark-60
            dark:bg-dark-40 dark:hover:bg-dark-50 dark:focus:bg-dark-50 dark:focus:ring-dark-40`
          )
        case 'gray':
          return baseClass + (
            `bg-gray-110 hover:bg-gray-120 focus:bg-gray-120 focus:ring-gray-110
            dark:bg-gray-110 dark:hover:bg-dark-10 dark:focus:bg-dark-10 dark:focus:ring-gray-110`
          )
        case 'light':
          return baseClass + (
            `bg-gray-60 hover:bg-gray-70 focus:bg-gray-70 focus:ring-gray-80
            dark:bg-gray-70 dark:hover:bg-gray-80 dark:focus:bg-gray-80 dark:focus:ring-gray-70`
          )
        default:
          return ''
      }
    }
  }
}
</script>
