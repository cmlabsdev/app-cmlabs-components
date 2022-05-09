<template>
  <nuxt-link
    class="text-dark-40 dark:text-gray-10 hover:text-dark-60 transition ease-out duration-300"
    :class="activeClass"
    :to="to"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "BaseLink",

  props: {
    /**
     * Apply active class when true.
     */
    isActive: {
      type: Boolean,
      default: false
    },
    /**
     * The link href binding.
     */
    to: {
      type: String,
      default: ""
    }
  },

  computed: {
    activeClass() {
      return this.isActive && 'font-bold !text-primary-60 hover:!text-primary-60';
    }
  }
}
</script>
