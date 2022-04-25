<template>
  <label
    class="relative flex items-center font-semibold select-none"
    :class="[gapClass, disabled ? 'cursor-not-allowed' : 'cursor-pointer', disabledClass]"
  >
    <input
      class="absolute flex-shrink-0 w-0 h-0 peer opacity-0"
      :checked="shouldBeChecked"
      :disabled="disabled"
      type="checkbox"
      :value="value"
      @change="onChange"
    >
    <span
      class="flex-shrink-0 flex items-center justify-center rounded border cm-transition"
      :class="masterClass"
    >
      <cm-icon
        class="text-white cm-transition"
        :class="[activeClass, textClass]"
        icon="bx-check"
      />
    </span>
    <slot
      :disabled-class="disabledClass"
      :text-class="textClass"
    />
  </label>
</template>

<script>
export default {
  name: 'CmCheckbox',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },

  props: {
    /**
     * Should the checkbox disabled?
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Model binding.
     * Used with v-model.
     */
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      required: true
    },
    /**
     * The checkbox size
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
     * The checkbox value.
     * If model value is boolean, this
     * will automatically be boolean too.
     */
    value: {
      type: [String, Number, Boolean, Array, Object],
      default: null
    },
    /**
     * The boolean true value
     */
    yesValue: {
      type: Boolean,
      default: true
    },
    /**
     * The boolean false value
     */
    noValue: {
      type: Boolean,
      default: false
    }
  },

  emits: {
    'update:modelValue': null
  },

  computed: {
    /**
     * The checkbox all classes.
     */
    masterClass () {
      return [
        this.sizeClass,
        this.peerClass,
        this.stateClass
      ]
    },
    /**
     * The active class
     */
    activeClass () {
      return this.shouldBeChecked ? 'opacity-100' : 'opacity-0'
    },
    /**
     * The disabled class
     */
    /**
     * The disabled class
     */
    disabledClass () {
      return this.disabled ? 'text-gray-80 dark:text-gray-110' : 'text-dark-60 dark:text-gray-60'
    },
    /**
     * The gap class
     */
    gapClass () {
      switch (this.size) {
        case 'xs':
          return 'gap-2'
        case 'sm':
        case 'base':
          return 'gap-[10px]'
        case 'md':
        case 'lg':
        case 'xl':
          return 'gap-[14px]'
        default:
          return ''
      }
    },
    /**
     * The peer class
     */
    peerClass () {
      if (this.shouldBeChecked) {
        return 'peer-focus:ring-2 peer-focus:ring-primary-60 peer-focus:ring-opacity-50'
      }

      return 'peer-focus:ring-2 peer-focus:ring-gray-60 peer-focus:ring-opacity-50'
    },
    /**
     * The size class
     */
    sizeClass () {
      switch (this.size) {
        case 'xs':
          return 'w-3 h-3'
        case 'sm':
          return 'w-4 h-4'
        case 'base':
          return 'w-[18px] h-[18px]'
        case 'md':
          return 'w-5 h-5'
        case 'lg':
          return 'w-[22px] h-[22px]'
        case 'xl':
          return 'w-6 h-6'
        default:
          return ''
      }
    },
    /**
     * The state class
     */
    stateClass () {
      if (this.disabled && !this.shouldBeChecked) {
        return 'bg-gray-20 dark:bg-dark-100 border-gray-60 dark:border-dark-40'
      }

      if ((this.disabled && this.shouldBeChecked) || this.shouldBeChecked) {
        return 'bg-primary-60 dark:bg-primary-40 border-primary-60 dark:border-primary-40'
      }

      return 'bg-white dark:bg-dark-90 border-gray-100 dark:border-dark-40'
    },
    /**
     * Should the checkbox checked?
     */
    shouldBeChecked () {
      if (Array.isArray(this.modelValue)) {
        return this.modelValue.includes(this.value)
      }

      if (typeof this.modelValue === 'boolean') {
        return this.modelValue
      }

      return this.yesValue
    },
    /**
     * The text class
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
  },

  methods: {
    /**
     * Clone the values from modelValue bindings.
     * Checks wether the values already have the
     * value of the checkbox or not.
     */
    emitArrayType () {
      const values = [...this.modelValue]

      if (!values.includes(this.value)) {
        values.push(this.value)
      } else {
        values.splice(values.findIndex(value => value === this.value), 1)
      }

      return this.$emit('update:modelValue', values)
    },
    /**
     * Immediately return the negated value.
     */
    emitBooleanType () {
      return this.$emit('update:modelValue', !this.modelValue)
    },
    /**
     * Emit other than boolean or array type.
     * Defaults to the noValue to make other type
     * casted into Boolean.
     */
    emitOtherType () {
      // shouldBeChecked was initially rendering yes value
      return this.$emit('update:modelValue', this.noValue)
    },
    /**
     * Handle the emits typeof value target.
     */
    onChange () {
      if (Array.isArray(this.modelValue)) {
        return this.emitArrayType()
      }

      if (typeof this.modelValue === 'boolean') {
        return this.emitBooleanType()
      }

      return this.emitOtherType()
    }
  }
}
</script>
