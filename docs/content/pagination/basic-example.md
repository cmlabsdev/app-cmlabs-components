### Code Example

```vue
<template>
  <cm-pagination
    :total-pages="totalPages"
    :current-page="currentPage"
    @pagechanged="onPageChange"
  ></cm-pagination>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 20,
    };
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
```
