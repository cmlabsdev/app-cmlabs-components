<template>
  <client-only>
    <VDropdown
      :disabled="disabled"
      :distance="distance"
      :placement="placement"
      :skidding="skidding"
    >
      <!-- This will be the popover reference (for the events and position) -->
      <slot name="toggler">
        <button class="border">
          Click me
        </button>
      </slot>

      <!-- This will be the content of the popover -->
      <template #popper="{ hide }">
        <slot :hide="hide" />
      </template>
    </VDropdown>

    <template #placeholder>
      <slot name="placeholder">
        Loading...
      </slot>
    </template>
  </client-only>
</template>

<script>
export default {
  name: 'CmDropdown',

  props: {
    /**
     * Disabled the dropdown.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Offset x-axis, accepts negative value.
     */
    distance: {
      type: Number,
      default: 6
    },
    /**
     * Offset y-axis, accepts negative value.
     */
    skidding: {
      type: Number,
      default: 0
    },
    /**
     * The dropdown placement.
     * Available options are:
     * "top-start", "top-center", "top-end",
     * "bottom-start", "bottom-center", "bottom-end",
     * "right-start", "right-center", "right-end",
     * "left-start", "left-center", "left-end",
     */
    placement: {
      type: String,
      default: 'bottom-start',
      validator (value) {
        return [
          'top',
          'top-start',
          'top-center',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-center',
          'bottom-end',
          'right',
          'right-start',
          'right-center',
          'right-end',
          'left',
          'left-start',
          'left-center',
          'left-end'
        ].includes(value)
      }
    }
  }
}
</script>

<style>
.v-popper__popper[tabindex="0"],
.v-popper__popper[tabindex="0"]:focus {
  outline: none !important;
}

.v-popper--theme-dropdown .v-popper__inner {
  background: unset !important;
  color: unset !important;
  border-radius: unset !important;
  border: unset !important;
  padding: unset;
}

.v-popper--theme-dropdown .v-popper__arrow-inner,
.v-popper--theme-dropdown .v-popper__arrow-outer {
  display: none;
}
</style>
