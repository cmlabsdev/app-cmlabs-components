<template>
  <div class="w-full relative inline-block">
    <div>
      <label @click="toggleDropdown">
        <slot name="label" />
      </label>

      <p ref="toggle">
        <slot name="toggler" :toggle-dropdown="toggleDropdown">
          <button
            class="w-full flex items-center justify-between gap-8 outline-none cursor-pointer border disabled:cursor-not-allowed relative focus:outline-none focus:ring-2 focus:ring-opacity-50 cm-transition"
            :class="masterClass"
            :disabled="disabled"
            type="button"
            @click="toggleDropdown"
          >
            <span class="flex-1 text-left border border-transparent">
              <slot name="placeholder" :placeholder-class="placeholderClass">
                <p :class="placeholderClass" class="line-clamp-1 border border-transparent">
                  {{ getPlaceholder }}
                </p>
              </slot>
            </span>
            <cm-icon
              class="absolute top-1/2 -translate-y-1/2 right-0"
              :class="[{ 'rotate-180': dropdownOpen }, paddingClass]"
              icon="bx-chevron-down text-gray-80"
            />
          </button>
        </slot>
      </p>

      <slot name="error" />
    </div>

    <transition name="fade-in">
      <ul
        v-if="dropdownOpen"
        ref="dropdownMenu"
        v-append-to-body
        class="absolute z-[1000] left-0 top-full bg-white dark:bg-dark-80 shadow-md rounded translate-y-1 overflow-y-auto"
        :class="[height, width]"
      >
        <slot name="search-input" />
        <template v-if="filteredOptions.length">
          <li
            v-for="(option) in filteredOptions"
            :key="getOptionKey(option)"
            @click="selectValue(option)"
          >
            <button
              class="w-full h-auto flex items-center justify-start text-left py-2 px-3 hover:bg-primary-10 focus:bg-primary-10 dark:hover:bg-primary-100 dark:focus:bg-primary-100 outline-none focus:outline-none cm-transition"
              :class="{ 'bg-primary-10 dark:bg-primary-100': getOptionValue(option) === value }"
              type="button"
            >
              <slot :name="getSlotName(option)" :option="option" :close-dropdown="closeDropdown">
                {{ getOptionLabel(option) }}
              </slot>
            </button>
          </li>
        </template>
        <template v-else>
          <li class="w-full h-auto flex items-center justify-center text-center p-3">
            <slot name="no-data" />
          </li>
        </template>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CmSelect',

  directives: {
    /**
     * Attach the element to body once the component created/mounted.
     */
    'append-to-body': {
      inserted (el, bindings, { context }) {
        if (context.appendToBody) {
          const {
            height,
            top,
            left,
            width
          } = context.$refs.toggle.getBoundingClientRect()

          const scrollX = window.scrollX || window.pageXOffset
          const scrollY = window.scrollY || window.pageYOffset

          el.unbindPosition = context.calculatePosition(el, context, {
            width: width + 'px',
            left: scrollX + left + 'px',
            top: scrollY + top + height + 'px'
          })

          document.body.appendChild(el)
        }
      },

      unbind (el, bindings, { context }) {
        if (context.appendToBody) {
          if (el.unbindPosition && typeof el.unbindPosition === 'function') {
            el.unbindPosition()
          }
          if (el.parentNode) {
            el.parentNode.removeChild(el)
          }
        }
      }
    }
  },

  model: {
    prop: 'value',
    event: 'update:value'
  },

  props: {
    /**
     * Should the component be appended to the body?
     * If set to true, when the component opens, it will be rendered
     * as a direct body child.
     * Used for avoiding overflow issues.
     */
    appendToBody: {
      type: Boolean,
      default: false
    },
    /**
     * The data option that the component should hold.
     * Used as a storage, while the options property might show some
     * filtered data, the original data is not lost.
     * Highly important when you need to use searching feature.
     */
    data: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * If set to true, the option will not be opened and the
     * disabled state class will be applied.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Is the select error?
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Which property from the data item object should be used?
     * By default, if the option is an object, the value given
     * on the model binding would be the entire object. To use
     * a certain property from the object option, define the
     * fieldKey here.
     */
    fieldKey: {
      type: String,
      default: null
    },
    /**
     * Which property from the data item object should be used
     * to render the select placeholder?
     * By default, the component will wrap the options with a
     * configured label property if the option has not yet have
     * a label property defined. You can also use slots if desired.
     */
    label: {
      type: String,
      default: null
    },
    /**
     * The options that should be rendered on the options dropdown.
     * The searching system will use this options while keeps track
     * of the original data stored within the data props.
     */
    options: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * The placeholder when no option is currenlty selected.
     */
    placeholder: {
      type: String,
      default () {
        return ''
      }
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
     * Define the slot name for each option.
     * By default, it will use the label property from
     * the option object.
     * Useful if the label is not in aa valid slot name
     * standard.
     */
    slotKey: {
      type: String,
      default: null
    },
    /**
     * The component value.
     * Used with v-model binding.
     */
    value: {
      type: [String, Boolean, Number, Array, Object],
      default () {
        return null
      }
    },
    /**
     * The dropdown height.
     */
    height: {
      type: String,
      default: 'max-h-[250px]'
    },
    /**
     * The dropdown options width. Defaults to w-full.
     */
    width: {
      type: String,
      default: 'w-full'
    }
  },

  emits: {
    'update:value': null
  },

  data () {
    return {
      defaultPlaceholder: 'Select value',
      dropdownOpen: false,
      selectedValue: this.value
    }
  },

  computed: {
    /**
     * The component class.
     */
    masterClass () {
      return [
        this.paddingClass,
        this.roundedClass,
        this.sizeClass,
        this.stateClass,
        this.textClass
      ]
    },
    /**
     * Determine the component placeholder.
     * When no value is selected, return the placeholder
     * from the props or the internal component default
     * placeholder.
     * If some option is selected, returns the selected
     * option using the defined label props key, but if
     * label props is not set, defaults to label prop.
     */
    getPlaceholder () {
      if (!this.value || this.value === '') {
        return this.placeholder || this.defaultPlaceholder
      }

      let fieldKey
      if (!this.fieldKey) { fieldKey = 'id' } else { fieldKey = this.fieldKey }

      const findsOn = this.data.length ? this.data : this.options
      const option = findsOn.find(option => option[fieldKey] === this.value)
      if (!option) { return this.value }

      let label
      if (!this.label) { label = 'label' } else { label = this.label }

      return option[label]
    },
    /**
     * Determines the placeholder class.
     * If no option selected, returns gray text.
     */
    placeholderClass () {
      if (
        (this.getPlaceholder === this.defaultPlaceholder) ||
        (this.disabled) ||
        (this.placeholder && !this.value)
      ) { return 'text-gray-80 dark:text-dark-20' }
      if (this.error) { return 'text-danger-60 dark:text-danger-40' }
      return 'text-dark-60 dark:text-gray-60'
    },
    /**
     * Wrap the options props.
     * Used to map the options with default label props
     * when options registered as array of strings.
     */
    filteredOptions () {
      const options = this.options

      return options.map((option) => {
        if (typeof option === 'string') { return { label: option } }
        return option
      })
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
      // Super weird bugs we have to add the
      // default values by 2px for this component.
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
     * The state class.
     */
    stateClass () {
      if (this.disabled) { return 'bg-gray-20 dark:bg-dark-90 border-gray-80 dark:border-dark-60' }
      if (this.error) { return 'border-danger-60 dark:border-danger-40' }
      return 'border-gray-100 dark:border-dark-40 focus:ring-gray-100 dark:focus:ring-dark-40'
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
  },

  watch: {
    dropdownOpen (isOpen) {
      if (isOpen) {
        document.addEventListener('click', this.watchClickOutside)
        document.addEventListener('keyup', this.closeMenu)
      } else {
        document.removeEventListener('click', this.watchClickOutside)
        document.removeEventListener('keyup', this.closeMenu)
      }
    },
    /**
     * Detect the v-model binding changes.
     * Immediately updates the placeholder state.
     */
    value: {
      immediate: true,
      handler (value) {
        const option = this.filteredOptions.find(option => (
          this.getOptionValue(option) === value)
        )
        this.selectedValue = !option ? null : this.getOptionLabel(option)
      }
    }
  },

  mounted () {
    /**
     * Handle the emitters to close the options dropdown.
     */
    this.$nuxt.$on("close:select", () => { this.closeDropdown() })
  },

  beforeDestroy () {
    /**
     * Detach the emitters to close the options dropdown.
     */
    this.$nuxt.$off("close:select", () => { this.closeDropdown() })
  },

  methods: {
    /**
     * When append to body is set to true,
     * calculate the position from the wrapper element.
     */
    calculatePosition (dropdownList, component, { width, top, left }) {
      dropdownList.style.top = top
      dropdownList.style.left = left
      dropdownList.style.width = width
    },
    /**
     * Returns the name used by the slot.
     * @param {Object} option - The option record.
     */
    getSlotName (option) {
      if (this.slotKey) { return option[this.slotKey] }
      return this.getOptionLabel(option)
    },
    /**
     * Returns the label used by the option.
     * @param {Object} option - The option record.
     */
    getOptionLabel (option) {
      if (!this.label) { return option.label }
      return option[this.label]
    },
    /**
     * Returns the key used by the option.
     * @param {Object} option - The option record.
     */
    getOptionKey (option) {
      if (typeof option !== 'object') { return option }
      if (option.id !== null) { return option.id }
      if (option[this.label] !== null) { return option[this.label] }
      return JSON.stringify(option)
    },
    /**
     * Returns the value used by the v-model binding.
     * @param {Object} option - The option record.
     */
    getOptionValue (option) {
      if (this.fieldKey) { return option[this.fieldKey] }
      return option.label
    },
    /**
     * Updates the parent model binding.
     * @param {Object} option - The option record.
     */
    selectValue (option) {
      this.$emit('update:value', this.getOptionValue(option))
      this.closeDropdown()
    },
    /**
     * Should open or close the dropdown.
     * Each hook is attached with native DOM listener to handle
     * clicking outside the toggle.
     */
    toggleDropdown () {
      if (this.dropdownOpen) {
        this.closeDropdown()
      } else {
        this.openDropdown()
      }
    },
    /**
     * A bridge before closing the dropdown.
     * Checks esc keyword code.
     */
    closeMenu (event) {
      event.preventDefault()
      if (event.keyCode === 27) { this.closeDropdown() }
    },
    /**
     * Close the dropdown.
     */
    closeDropdown () {
      this.dropdownOpen = false
    },
    /**
     * Open the dropdown.
     */
    openDropdown () {
      this.dropdownOpen = true
      this.$nextTick(() => {
        const dropdownMenu = this.$refs.dropdownMenu

        if (!dropdownMenu) { return }

        const searchInput = dropdownMenu.querySelector('input')
        if (searchInput) { searchInput.focus() }
      })
    },
    /**
     * Handle clicking outside the dropdown.
     * When clicking outside the dropdown is true, close
     * the dropdown.
     */
    async watchClickOutside () {
      try {
        await this.$nextTick()
        const didClickOutside = !(
          this.$refs.dropdownMenu.contains(event.target) ||
          this.$refs.toggle.contains(event.target)
        )

        if (didClickOutside) { this.closeDropdown() }
      } catch (error) {}
    }
  }
}
</script>
