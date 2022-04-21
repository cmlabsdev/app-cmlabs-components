<template>
  <ul class="flex flex-col gap-2">
    <li class="mb-2 text-md font-bold">
      {{ title }}
    </li>

    <slot />
  </ul>
</template>

<script>
export default {
  name: "DocsNavigation",

  props: {
    /**
     * The navigation grouping title.
     * Used to indicate the navigation grouping.
     */
    title: {
      type: String,
      default: "Navigation Title"
    }
  }
}
</script>
