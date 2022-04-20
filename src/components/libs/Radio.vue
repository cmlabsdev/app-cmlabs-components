<template>
  <label
    class="relative flex items-center font-semibold select-none"
    :class="[gapClass, disabled ? 'cursor-not-allowed' : 'cursor-pointer']"
  >    
    <input
      class="absolute flex-shrink-0 w-0 h-0 peer invisible"
      :checked="shouldBeChecked"
      :disabled="disabled"
      type="radio"
      :value="value"
      @change="onChange"
    />

    <span
      class="flex-shrink-0 flex justify-center items-center rounded-full cm-transition"
      :class="masterClass"
    />

    <slot
      :disabled-class="disabledClass"
      :text-class="textClass"
    />
  </label>
</template>

<script>
export default {
  name: 'CmRadio',

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
      type: [String, Number],
      default: null,
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
      type: [String, Number],
      default: null
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
     * The disabled class
     */
    disabledClass () {
      return this.disabled ? 'text-gray-80 dark:text-gray-110' : 'text-dark-60 dark:text-white'
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
      // if (this.shouldBeChecked) {
      //   return 'peer-focus:ring-2 peer-focus:ring-primary-60 peer-focus:ring-opacity-50'
      // }
      
      // return 'peer-focus:ring-2 peer-focus:ring-gray-60 peer-focus:ring-opacity-50'
      return null
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
        return 'border bg-gray-20 dark:bg-dark-90 border-gray-60 dark:border-dark-60'
      }

      if (this.disabled && this.shouldBeChecked) {
        return 'border-4 bg-gray-20 dark:bg-dark-90 border-primary-40 dark:border-primary-20'
      }

      if (this.shouldBeChecked) {
        return 'border-4 border-primary-60'
      }

      return 'border border-gray-90'
    },
    /**
     * Should the checkbox checked?
     */
    shouldBeChecked () {
      return this.modelValue === this.value
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
    },
  },

  methods: {
    /**
     * Handle the emits typeof value target.
     */
    onChange () {
      return this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>