<template>
  <cm-table-row :columns="columns">
    <cm-table-column
      v-for="(column, index) in columns"
      :key="index"
      class="flex-1 w-full p-4"
      :width="column.width"
    >
      <div class="w-full h-8 bg-gray-30 dark:bg-dark-70 animate-pulse rounded" />
    </cm-table-column>
  </cm-table-row>
</template>

<script>
export default {
  name: 'CmTableSkeleton',

  props: {
    /**
     * How many columns should be mocked?
     * Setup the actual column config.
     */
    columns: {
      type: [Number, Array],
      default: 4
    }
  }
}
</script>
