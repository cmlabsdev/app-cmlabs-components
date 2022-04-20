<template>
  <textarea
    :cols="cols"
    :rows="rows"
    class="flex-1 my-2 focus:outline-none bg-transparent placeholder-gray-80 dark:placeholder-gray-110 overflow-hidden"
    :class="masterClass"
    :disabled="disabled"
    :placeholder="placeholder"
    :readonly="readonly"
    :value="value"
    @keyup.esc="$emit('esc')"
    @keyup.enter="$emit('enter')"
    @blur="$emit('blur')"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'CmTextarea',

  model: {
    prop: 'value',
    event: 'update:value'
  },

  props: {
    /**
     * Define textarea cols
     */
    cols: {
      type: [String, Number],
      default: 30
    },
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
     * The textarea placeholder
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * Is the input readonly?
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * Define textarea rows
     */
    rows: {
      type: [String, Number],
      default: 4
    },
    /**
     * The textarea value.
     * Used with v-model binding.
     */
    value: {
      type: String,
      default: null
    }
  },

  computed: {
    /**
     * The component class.
     */
    masterClass () {
      return [
        this.stateClass,
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
