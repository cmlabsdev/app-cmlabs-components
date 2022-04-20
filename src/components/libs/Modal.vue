<template>
  <vue-final-modal
    v-slot="{ params, close }"
    v-bind="$attrs"
    attach="body"
    classes="flex justify-center items-center"
    :click-to-close="clickToClose"
    :content-class="contentClasses"
    :focus-trap="true"
    :esc-to-close="true"
    overlay-class="dark:!bg-dark-60/75"
    :z-index="zIndex"
    v-on="$listeners"
  >
    <div class="inline-flex items-center gap-2 font-bold text-xl text-left">
      <slot name="title" />
    </div>
    <div class="flex flex-col gap-4 flex-grow">
      <slot :params="params" />
    </div>
    <div v-if="$slots.actions" class="flex-shrink-0 flex justify-end items-center gap-4">
      <slot name="actions" :close="close">
        <cm-button @click="$emit('cancel', close)">
          cancel
        </cm-button>
        <cm-button @click="$emit('confirm', close)">
          confirm
        </cm-button>
      </slot>
    </div>
    <slot name="close" :close="close" />
  </vue-final-modal>
</template>

<script>
export default {
  name: 'CmModal',

  inheritAttrs: false,

  props: {
    /**
     * If set to false, the user can not
     * click the overlay to close this modal.
     */
    clickToClose: {
      type: Boolean,
      default: true
    },
    /**
     * The modal padding.
     * Used to define if the modal should have no padding,
     * then the padding is defined from the parent context.
     */
    padding: {
      type: String,
      default: 'p-6'
    },
    /**
     * The modal width.
     * Use tailwind class to define the width.
     */
    width: {
      type: String,
      default: ''
    },
    /**
     * Overrides the default z-index of 1000.
     */
    zIndex: {
      type: [String, Number, Boolean],
      default: false
    }
  },

  computed: {
    /**
     * The content class.
     */
    contentClasses () {
      let baseClasses = 'relative flex flex-col gap-4 bg-white dark:bg-dark-100 rounded'
      baseClasses += ' ' + this.width + ' ' + this.padding

      return baseClasses
    }
  }
}
</script>

<style lang="postcss">
.vfm--absolute {
  @apply !fixed;
}
</style>
