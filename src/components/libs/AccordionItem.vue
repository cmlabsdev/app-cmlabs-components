<template>
  <div
    class="flex flex-col"
    :class="typographyClass"
  >
    <div
      class="flex items-center justify-between gap-4 cursor-pointer select-none"
      :class="{ 'border-b border-gray-100 dark:border-dark-40 pb-1': useBorder }"
      @click="toggle(!isOpen)"
    >
      <slot
        name="header"
        :is-open="isOpen"
      >
        <div class="text-gray-100 dark:text-dark-40">
          <strong>
            ACCORDION 1
          </strong>
        </div>
      </slot>

      <i
        v-if="!customIcon"
        ref="icon"
        class="bx bx-chevron-down font-bold text-gray-100 dark:text-dark-40 transition ease-out duration-300"
        :class="[isOpen ? 'bx-rotate-180' : '', $attrs['icon-class']]"
      />
    </div>

    <transition
      name="expand"
      @enter="enter"
      @afterEnter="afterEnter"
      @leave="leave"
    >
      <section v-if="isOpen">
        <div class="my-2">
          <slot>
            This is the first item's accordion body. It is shown by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </slot>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CmAccordionItem',

  inject: [
    'size',
    'register',
    'unregister',
    'setOpen'
  ],

  props: {
    /**
     * Wether to use custom icon or not.
     */
    customIcon: {
      type: Boolean,
      default: false
    },
    /**
     * Show or open the accordion item
     * initially?
     */
    show: {
      type: Boolean,
      default: false
    },
    /**
     * Should the accordion item header
     * have border?
     */
    useBorder: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isOpen: this.show
    }
  },

  computed: {
    /**
     * The component text size.
     */
    typographyClass () {
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
          return 'text-h6'
        default:
          return ''
      }
    }
  },

  watch: {
    /**
     * Updates the isOpen state.
     *
     * @param {Boolean} val - The isOpen state.
     */
    show (val) {
      this.isOpen = val
    }
  },

  beforeMount () {
    this.register(this)
  },

  beforeDestroy () {
    this.unregister(this)
  },

  methods: {
    /**
     * Toggle the accordion item.
     *
     * @param {Boolean} show - Should open or not.
     */
    toggle (show) {
      this.isOpen = show
      this.setOpen(this, this.isOpen)
    },
    /**
     * Vue transition hooks.
     *
     * @param {Element} element - The DOM element.
     */
    afterEnter (element) {
      element.style.height = 'auto'
    },
    /**
     * Vue transition hooks.
     *
     * @param {Element} element - The DOM element.
     */
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = 0

      setTimeout(() => {
        element.style.height = height
      })
    },
    /**
     * Vue transition hooks.
     *
     * @param {Element} element - The DOM element.
     */
    leave (element) {
      const { height } = getComputedStyle(element)

      element.style.height = height

      setTimeout(() => {
        element.style.height = 0
      })
    }
  }
}
</script>
