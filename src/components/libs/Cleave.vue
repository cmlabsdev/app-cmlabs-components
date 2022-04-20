<template>
  <cleave
    class="flex-1 focus:outline-none bg-transparent placeholder-gray-80 dark:placeholder-gray-110 overflow-hidden"
    :class="masterClass"
    :disabled="disabled"
    :placeholder="placeholder"
    :readonly="readonly"
    :type="type"
    :options="options"
    :value="value"
    @keyup.esc="$emit('esc')"
    @keyup.enter="$emit('enter')"
    @blur="$emit('blur')"
    @input="value => $emit('update:value', value)"
  />
</template>

<script>
export default {
  name: 'CmCleave',

  inject: ['size'],

  model: {
    prop: 'value',
    event: 'update:value'
  },

  props: {
    /**
     * Is the input disabled?
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Is the input error?
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * The cleave options.
     */
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    /**
     * The input placeholder.
     * Defaults to empty string.
     */
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * Is the input readonly?
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * The input type.
     * When set to number, more attributes are accepted.
     * Highly recommended to use (for now) text and number type only.
     */
    type: {
      type: String,
      default: 'text'
    },
    /**
     * The input value.
     * Used with v-model binding.
     */
    value: {
      type: [String, Number],
      default: null
    }
  },

  emits: {
    'update:value': null,
    blur: null,
    esc: null,
    enter: null
  },

  computed: {
    /**
     * The component class.
     */
    masterClass () {
      return [
        this.stateClass,
        this.sizeClass,
        this.textClass
      ]
    },
    /**
     * The state class.
     */
    stateClass () {
      if (this.disabled) { return 'text-gray-80 dark:text-dark-60' }
      if (this.error) { return 'text-danger-60 dark:text-danger-40' }
      return 'text-dark-60 dark:text-gray-60'
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
    }
  }
}
</script>
