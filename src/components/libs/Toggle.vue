<template>
  <client-only>
    <toggle-button
      :disabled="disabled"
      :css-colors="true"
      :height="height"
      :sync="true"
      :value="value"
      :width="width"
      @input="$emit('update:value', !value)"
    />
  </client-only>
</template>

<script>
// import appConfig from '~/config/globals/appConfig'

export default {
  name: 'CmToggle',

  model: {
    prop: 'value',
    event: 'update:value'
  },

  props: {
    /**
     * Is the component disabled?
     */
    disabled: {
      type: Boolean,
      default: false
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
     * The component value.
     * Used with v-model binding.
     */
    value: {
      type: Boolean,
      default: false
    }
  },

  emits: {
    'update:value': null
  },

  computed: {
    /**
     * The component width.
     */
    width () {
      switch (this.size) {
        case 'xs':
          return 26
        case 'sm':
          return 32
        case 'base':
          return 38
        case 'md':
          return 44
        case 'lg':
          return 50
        case 'xl':
          return 56
        default:
          return ''
      }
    },
    /**
     * The component height.
     */
    height () {
      switch (this.size) {
        case 'xs':
          return 13
        case 'sm':
          return 16
        case 'base':
          return 19
        case 'md':
          return 24
        case 'lg':
          return 25
        case 'xl':
          return 28
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="postcss">
.vue-js-switch.disabled {
  @apply opacity-100;
}

/* Disabled no toggled */

.vue-js-switch.disabled .v-switch-core {
  @apply !bg-gray-60 dark:!bg-dark-60;
}

.vue-js-switch.disabled .v-switch-button {
  @apply !bg-gray-80 dark:!bg-gray-10;
}

/* Disabled toggled */

.vue-js-switch.disabled.toggled .v-switch-core {
  @apply !bg-primary-20 dark:!bg-primary-30;
}

.vue-js-switch.disabled.toggled .v-switch-button {
  @apply !bg-white dark:!bg-gray-10;
}

/* Toggled */

.vue-js-switch.toggled .v-switch-core {
  @apply bg-primary-60 dark:bg-primary-40;
}

.vue-js-switch.toggled .v-switch-button {
  @apply bg-white;
}

/* Default */

.v-switch-core {
  @apply bg-gray-90 dark:bg-dark-30;
}

.v-switch-button {
  @apply bg-white;
}
</style>
