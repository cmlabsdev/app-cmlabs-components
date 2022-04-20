<template>
  <div class="w-auto h-10 flex divide-x divide-gray-100 dark:divide-dark-40 border border-gray-100 dark:border-dark-40 rounded overflow-hidden">
    <slot name="prev">
      <cm-pagination-button>
        Prev
      </cm-pagination-button>
    </slot>

    <slot />

    <slot name="next">
      <cm-pagination-button>
        Next
      </cm-pagination-button>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'CmPagination'
}
</script>
