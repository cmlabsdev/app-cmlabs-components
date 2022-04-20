<template>
  <li class="flex items-center gap-2">
    <component
      :is="component"
      :class="!to ? 'text-gray-80 dark:text-gray-110' : 'text-primary-60 dark:text-primary-40'"
      :to="to"
    >
      <slot />
    </component>
    <span v-if="to" class="text-gray-80 dark:text-gray-110"> / </span>
  </li>
</template>

<script>
export default {
  name: 'CmBreadcrumbItem',

  props: {
    /**
     * The component link.
     */
    to: {
      type: [String, Object],
      default: null
    }
  },

  computed: {
    /**
     * What should the component rendered into?
     */
    component () {
      if (!this.to) { return 'p' } else { return 'nuxt-link' }
    }
  }
}
</script>
