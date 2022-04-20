<template>
  <client-only>
    <v-date-picker
      class="cm-time-picker"
      :is-required="isRequired"
      mode="time"
      :model-config="modelConfig"
      :value="date"
      @input="value => $emit('input', value)"
    >
      <template v-if="isDropdown" #default="{ inputValue, togglePopover }">
        <button type="button" class="w-full" tabindex="-1" @click="togglePopover()">
          <slot :input-value="inputValue">
            <cm-form-control>
              <cm-icon v-if="iconPosition === 'left'" :icon="icon" />
              <cm-input
                class="cursor-pointer"
                readonly
                :value="inputValue"
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
  name: 'CmTimePicker',

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
     * If set to true, the time will show 20:30 instead of 8:30p.m
     * and renders no a.m or p.m
     */
    is24hr: {
      type: Boolean,
      default: false
    },
    /**
     * Is the component a dropdown?
     * If false, the actual date picker is shown automatically
     * without the need to open the dropdown.
     */
    isDropdown: {
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
      default: true
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
     * The format of the value binding.
     * Used to specify the format of the value when user selects a date.
     * Defaults to local timezone.
     */
    parser: {
      type: String,
      default: 'HH:mm',
      validator (value) {
        return ['HH:mm', 'HH:mm:ss'].includes(value)
      }
    }
  },

  computed: {
    /**
     * V-calendar configuration for masking the value.
     * See: https://vcalendar.io/datepicker.html#model-config
     */
    modelConfig () {
      switch (this.parser) {
        case 'HH:mm':
          return {
            type: 'string',
            mask: 'HH:mm'
          }
        case 'HH:mm:ss':
          return {
            type: 'string',
            mask: 'HH:mm:ss'
          }
        default:
          return {}
      }
    }
  }
}
</script>
