<template>
  <!-- class="text-primary-60/50" -->
  <vue-slider
    :dot-options="dotOptions"
    :disabled="disabled"
    drag-on-click
    :min="min"
    :max="max"
    :rail-style="railStyle"
    :value="value"
    @change="value => $emit('update:value', value)"
  />
</template>

<script>
export default {
  name: 'CmSlider',

  model: {
    prop: 'value',
    event: 'update:value'
  },

  props: {
    /**
     * Is the slider disabled?
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * The minimum range the slider can go.
     */
    min: {
      type: Number,
      default: 0
    },
    /**
     * The maximum range the slider can go.
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * The component value.
     * Used with v-model binding.
     */
    value: {
      type: Number,
      default: 0
    }
  },

  emits: {
    'update:value': null
  },

  computed: {
    /**
     * Vue-slider-component dot configuration
     * See https://github.com/NightCatSama/vue-slider-component
     */
    dotOptions () {
      return {
        tooltip: 'none',
        focusStyle: {
          boxShadow: '0 0px 2px 2px rgb(24, 160, 251, 0.5)'
        },
        disabledStyle: {
          background: '#989A9F',
          boxShadow: 'unset'
        }
      }
    },
    /**
     * The rail or the component color.
     */
    railStyle () {
      return {
        background: '#E6E6E6'
      }
    }
  }
}
</script>

<style lang="postcss">


/* Buletan - Not Focused - Not Disabled */
.vue-slider-dot-handle,
.vue-slider-process {
  @apply bg-primary-60 dark:bg-primary-40 shadow-none;
}

.vue-slider-disabled .vue-slider-process {
  @apply bg-gray-100;
}
</style>
