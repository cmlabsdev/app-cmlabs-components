<template>
  <div
    class="flex items-center justify-between gap-8 rounded"
    :class="masterClass"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CmAlert',

  props: {
    /**
     * The alert size.
     */
    size: {
      type: String,
      default: 'base',
      validator (value) {
        return [
          'sm',
          'base',
          'unset'
        ].includes(value)
      }
    },
    /**
     * The alert type.
     */
    type: {
      type: String,
      default: 'filled',
      validator (value) {
        return [
          'filled',
          'outline',
          'soft'
        ].includes(value)
      }
    },
    /**
     * The alert variant.
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
     * The alert all classes.
     */
    masterClass () {
      return [
        this.paddingClass,
        this.sizeClass,
        this.textClass,
        this.variantClass
      ]
    },
    /**
     * The alert class when the type is filled.
     */
    filledClass () {
      switch (this.variant) {
        case 'primary':
          return 'bg-primary-60 text-white'
        case 'secondary':
          return 'bg-secondary-60 text-white'
        case 'info':
          return 'bg-info-60 text-white'
        case 'success':
          return 'bg-success-60 text-white'
        case 'danger':
          return 'bg-danger-60 text-white'
        case 'warning':
          return 'bg-warning-60 text-white'
        case 'dark':
          return 'bg-dark-60 text-white'
        default:
          return ''
      }
    },
    /**
     * The alert class when the type is outline.
     */
    outlineClass () {
      switch (this.variant) {
        case 'primary':
          return 'bg-primary-10 border border-primary-60 text-primary-60'
        case 'secondary':
          return 'bg-secondary-10 border border-secondary-60 text-secondary-60'
        case 'info':
          return 'bg-info-10 border border-info-60 text-info-60'
        case 'success':
          return 'bg-success-10 border border-success-60 text-success-60'
        case 'danger':
          return 'bg-danger-10 border border-danger-60 text-danger-60'
        case 'warning':
          return 'bg-warning-10 border border-warning-60 text-warning-60'
        case 'dark':
          return 'bg-gray-60 border border-dark-60 text-dark-60'
        default:
          return ''
      }
    },
    /**
     * The padding class.
     */
    paddingClass () {
      switch (this.size) {
        case 'sm':
          return 'px-4'
        case 'base':
          return 'px-5'
        default:
          return ''
      }
    },
    /**
     * The size class.
     */
    sizeClass () {
      switch (this.size) {
        case 'sm':
          return 'h-[30px]'
        case 'base':
          return 'h-[40px]'
        default:
          return ''
      }
    },
    /**
     * The alert class when the type is soft.
     */
    softClass () {
      switch (this.variant) {
        case 'primary':
          return 'bg-primary-10 text-dark-60'
        case 'secondary':
          return 'bg-secondary-10 text-dark-60'
        case 'info':
          return 'bg-info-10 text-dark-60'
        case 'success':
          return 'bg-success-10 text-dark-60'
        case 'danger':
          return 'bg-danger-10 text-dark-60'
        case 'warning':
          return 'bg-warning-10 text-dark-60'
        case 'dark':
          return 'bg-gray-60 text-dark-60'
        default:
          return ''
      }
    },
    /**
     * The text class.
     */
    textClass () {
      switch (this.size) {
        case 'sm':
          return 'text-sm'
        case 'base':
          return 'text-base'
        default:
          return ''
      }
    },
    /**
     * The variant class.
     */
    variantClass () {
      switch (this.type) {
        case 'filled':
          return this.filledClass
        case 'outline':
          return this.outlineClass
        default:
          return this.softClass
      }
    }
  }
}
</script>
