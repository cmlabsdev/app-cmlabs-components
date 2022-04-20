<template>
  <transition name="fade-in" mode="out-in">
    <template v-if="!src">
      <slot :classes="[masterClass, 'flex items-center justify-center rounded-full']">
        <div
          :class="masterClass"
          class="bg-gray-110 animate-pulse"
        />
      </slot>
    </template>
    <img
      v-else
      :alt="alt"
      class="object-cover"
      :class="masterClass"
      :src="src"
    >
  </transition>
</template>

<script>
export default {
  name: 'CmAvatar',

  props: {
    /**
     * The image alternative text.
     */
    alt: {
      type: String,
      default: ''
    },
    /**
     * Should the image be circle?
     */
    rounded: {
      type: Boolean,
      default: true
    },
    /**
     * The image size.
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
     * The image source.
     */
    src: {
      type: String,
      default: null
    }
  },

  computed: {
    /**
     * The alert all classes.
     */
    masterClass () {
      return [
        this.roundedClass,
        this.sizeClass
      ]
    },
    /**
     * The rounded class.
     */
    roundedClass () {
      if (this.rounded) { return 'rounded-full' }
      return ''
    },
    /**
     * The size class.
     */
    sizeClass () {
      switch (this.size) {
        case 'xs':
          return 'w-4 h-4'
        case 'sm':
          return 'w-6 h-6'
        case 'base':
          return 'w-8 h-8'
        case 'md':
          return 'w-10 h-10'
        case 'lg':
          return 'w-12 h-12'
        case 'xl':
          return 'w-14 h-14'
        default:
          return ''
      }
    }
  }
}
</script>
