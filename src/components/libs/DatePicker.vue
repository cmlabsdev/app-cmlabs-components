<template>
  <client-only>
    <v-date-picker
      :class="{ 'cm-date-picker': isDropdown }"
      :is-range="isRange"
      :is-required="isRequired"
      mode="date"
      :min-date="minDate"
      :max-date="maxDate"
      trim-weeks
      :model-config="modelConfig"
      :value="date"
      @input="onInput"
    >
      <template v-if="isDropdown" #default="{ inputValue, togglePopover }">
        <button type="button" class="w-full" tabindex="-1" @click="togglePopover()">
          <slot :input-value="formatInputValue(inputValue)">
            <cm-form-control :error="error">
              <cm-icon v-if="iconPosition === 'left'" :icon="icon" />
              <cm-input
                class="cursor-pointer"
                :class="{ 'text-gray-80 dark:text-gray-110': !inputValue }"
                :error="error"
                placeholder="Select date"
                readonly
                :value="formatInputValue(inputValue)"
              />
              <cm-icon v-if="iconPosition === 'right'" :icon="icon" />
            </cm-form-control>
          </slot>
        </button>
      </template>
    </v-date-picker>

    <template #placeholder>
      <slot name="placeholder">
        Loading...
      </slot>
    </template>
  </client-only>
</template>

<script>
export default {
  name: 'CmDatePicker',

  model: {
    prop: 'date',
    event: 'input'
  },

  props: {
    /**
     * The date to bind to the component.
     * Used with v-model binding.
     */
    date: {
      type: [Date, String, Object],
      default: null
    },
    /**
     * Is the picker error?
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * Which icon should be used to display?
     */
    icon: {
      type: String,
      default: 'bx-calendar'
    },
    /**
     * Set the icon position to either left or right.
     */
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return ['left', 'right'].includes(value)
      }
    },
    /**
     * Is the component a dropdown?
     * If false, the actual date picker is shown automatically
     * without the need to open the dropdown.
     */
    isDropdown: {
      type: Boolean,
      default: true
    },
    /**
     * Is the component a range picker?
     */
    isRange: {
      type: Boolean,
      default: false
    },
    /**
     * Is the component should be filled?
     * If set to true, the component won't allow empty value.
     * Use to prevent user from deselecting a selected date.
     */
    isRequired: {
      type: Boolean,
      default: false
    },
    /**
     * The format of the input value which will be given to moment.format().
     * Used to specify how the component should render the value.
     * Defaults to local timezone.
     */
    formatter: {
      type: String,
      default: null
    },
    /**
     * The format of the value binding.
     * Used to specify the format of the value when user selects a date.
     * Defaults to local timezone.
     */
    parser: {
      type: String,
      default: 'YYYY-MM-DD',
      validator (value) {
        return ['YYYY-MM-DD', 'YYYY-MM-DDTHH:mm', 'YYYY-MM-DDTHH:mm:ss'].includes(value)
      }
    },
    /**
     * Specify the maximum dates user can choose.
     * Defaults to null.
     */
    maxDate: {
      type: [String, Date],
      default: null
    },
    /**
     * Specify the minimum dates user can choose.
     * Defaults to null.
     */
    minDate: {
      type: [String, Date],
      default: null
    }
  },

  computed: {
    /**
     * V-calendar configuration for masking the value.
     * See: https://vcalendar.io/datepicker.html#model-config
     */
    modelConfig () {
      switch (this.parser) {
        case 'YYYY-MM-DD':
          return {
            type: 'string',
            mask: 'YYYY-MM-DD'
          }
        case 'YYYY-MM-DDTHH:mm':
          return {
            type: 'string',
            mask: 'YYYY-MM-DDTHH:mm'
          }
        case 'YYYY-MM-DDTHH:mm:ss':
          return {
            type: 'string',
            mask: 'YYYY-MM-DDTHH:mm:ss'
          }
        default:
          return {}
      }
    }
  },

  methods: {
    defaultFormatter () {
      const m = this.$moment().utcOffset(0)
      m.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      m.toISOString()
      return m.format(this.formatter || 'YYYY-MM-DD HH:mm:ss')
    },
    /**
     * Returns the formatted value defined from formatter props.
     * If no formatter given, returns local timezone format.
     *
     * @param {String} value - The date value.
     */
    formatInputValue (value) {
      if (!value) { return this.$moment().format(this.formatter || this.defaultFormatter()) }
      if (!this.formatter) { return value }

      if (typeof value === 'object') {
        const { start, end } = value
        if (start === '' || end === '') { return null }

        const startDate = this.$moment(new Date(start)).format(this.formatter)
        const endDate = this.$moment(new Date(end)).format(this.formatter)

        return `${startDate} - ${endDate}`
      }

      const parseDate = new Date(value)
      return this.$moment(parseDate).format(this.formatter)
    },
    /**
     * Parse the value into readable string based on parser
     * props. Always emits a string value v-model.
     *
     * @param {String} value - The value given from vcalendar
     */
    onInput (value) {
      if (typeof value === 'object') {
        const { start, end } = value
        if (start === '' || end === '') { return null }

        const startDate = this.$moment(new Date(start)).format(this.parser)
        const endDate = this.$moment(new Date(end)).format(this.parser)
        value = `${startDate}:${endDate}`
      }

      this.$emit('input', value)
    }
  }
}
</script>
