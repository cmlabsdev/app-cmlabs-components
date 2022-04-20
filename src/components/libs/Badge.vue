<template>
  <span
    class="w-auto inline-flex items-center justify-between gap-2.5 font-medium border"
    :class="masterClass"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'CmBadge',

  props: {
    /**
     * The badge size.
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
          'unset'
        ].includes(value)
      }
    },
    /**
     * The badge type.
     */
    type: {
      type: String,
      default: 'base',
      validator (value) {
        return ['base', 'pill'].includes(value)
      }
    },
    /**
     * The badge variant.
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
          'unset'
        ].includes(value)
      }
    }
  },

  computed: {
    /**
     * The badge all classes.
     */
    masterClass () {
      return [
        this.paddingClass,
        this.roundedClass,
        this.textClass,
        this.variantClass
      ]
    },
    /**
     * The padding class.
     */
    paddingClass () {
      switch (this.size) {
        case 'xs':
          return 'h-[20px] px-1'
        case 'sm':
          return 'h-[22px] px-2'
        case 'base':
          return 'h-[28px] px-3'
        case 'md':
          return 'h-[35px] px-4'
        default:
          return ''
      }
    },
    /**
     * The rounded class.
     */
    roundedClass () {
      if (this.type === 'pill') { return 'rounded-full' }
      return 'rounded'
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
        default:
          return ''
      }
    },
    /**
     * The variant class.
     */
    variantClass () {
      switch (this.variant) {
        case 'primary':
          return (
            `bg-primary-10 text-primary-60 border-primary-60
            dark:bg-transparent dark:text-primary-40 dark:border-primary-40`
          )
        case 'secondary':
          return (
            `bg-secondary-10 text-secondary-60 border-secondary-60
            dark:bg-transparent dark:text-secondary-40 dark:border-secondary-40`
          )
        case 'info':
          return (
            `bg-info-10 text-info-60 border-info-60
            dark:bg-transparent dark:text-info-40 dark:border-info-40`
          )
        case 'success':
          return (
            `bg-success-10 text-success-60 border-success-60
            dark:bg-transparent dark:text-success-40 dark:border-success-40`
          )
        case 'danger':
          return (
            `bg-danger-10 text-danger-60 border-danger-60
            dark:bg-transparent dark:text-danger-40 dark:border-danger-40`
          )
        case 'warning':
          return (
            `bg-warning-10 text-warning-60 border-warning-60
            dark:bg-transparent dark:text-warning-40 dark:border-warning-40`
          )
        case 'dark':
          return (
            `bg-gray-10 text-dark-60 border-dark-60
            dark:bg-transparent dark:text-dark-40 dark:border-dark-40`
          )
        case 'gray':
          return (
            `bg-white text-gray-110 border-gray-110
            dark:bg-transparent dark:text-gray-110 dark:border-gray-110`
          )
        default:
          return ''
      }
    }
  }
}
</script>
