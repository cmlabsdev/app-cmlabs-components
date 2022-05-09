<template>
  <li class="ml-2">
    <component
      :is="tag"
      class="py-1 px-2 text-base text-dark-40 dark:text-gray-60 hover:text-dark-60 dark:hover:text-gray-10 rounded transition ease-out duration-300"
      :class="activeClass"
      v-bind="link"
    >
      <slot />
    </component>
  </li>
</template>

<script>
export default {
  name: "DocsNavigationLink",

  props: {
    /**
     * Apply active class when true.
     */
    isActive: {
      type: Boolean,
      default: false
    },
    /**
     * The element to renders. By default,
     * it will be a nuxt-link
     */
    tag: {
      type: String,
      default: "nuxt-link"
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
      return this.isActive && 'bg-primary-20 !text-primary-60';
    },
    link() {
      if (this.tag === "nuxt-link") {
        return { to: this.to }
      } else {
        return { href: this.to, target: "_blank" }
      }
    }
  }
}
</script>
