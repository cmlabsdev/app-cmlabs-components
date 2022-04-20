<template>
  <client-only>
    <VMenu
      :arrow-padding="arrowPadding"
      :disabled="disabled"
      :distance="distance"
      :delay="{
        hide: 0
      }"
      :placement="placement"
      :skidding="skidding"
    >
      <!-- This will be the popover reference (for the events and position) -->
      <slot name="toggler">
        <div class="border">
          Hover me
        </div>
      </slot>

      <!-- This will be the content of the popover -->
      <template #popper>
        <div class="text-sm text-gray-10 dark:text-dark-60">
          <slot />
        </div>
      </template>
    </VMenu>

    <template #placeholder>
      <slot name="placeholder" />
    </template>
  </client-only>
</template>

<script>
export default {
  name: 'CmTooltip',

  props: {
    arrowPadding: {
      type: Number,
      default: 0
    },
    /**
     * Disabled the tooltip.
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

<style lang="postcss">
.v-popper--theme-dropdown.v-popper--theme-menu .v-popper__inner {
  padding: 4px 12px;
  @apply !bg-dark-60 dark:!bg-gray-60 !rounded-md;
}

.v-popper--theme-dropdown.v-popper--theme-menu .v-popper__arrow-inner {
  @apply border-dark-60 dark:border-gray-60;
}

.v-popper--theme-dropdown.v-popper--theme-menu .v-popper__arrow-inner,
.v-popper--theme-dropdown.v-popper--theme-menu .v-popper__arrow-outer {
  @apply block;
}

.v-popper--theme-dropdown.v-popper--theme-menu .v-popper__arrow-outer {
  @apply border-transparent;
}
</style>
