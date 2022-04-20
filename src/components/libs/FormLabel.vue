<template>
  <component
    :is="tag"
    class="mb-1 font-bold"
    :class="masterClass"
    :for="labelFor"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CmFormLabel',

  props: {
    /**
     * Optional for attributes.
     */
    labelFor: {
      type: String,
      default: null
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
    },
    /**
     * The element to render
     */
    tag: {
      type: String,
      default: 'span'
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
