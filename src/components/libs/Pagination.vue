<template>
  <div
    class="w-auto h-10 flex divide-x divide-gray-100 dark:divide-dark-40 border border-gray-100 dark:border-dark-40 rounded overflow-hidden"
  >
    <slot name="prev">
      <cm-pagination-button
        :is-disabled="isInFirstPage"
        @click="onClickPreviousPage"
      >
        {{ prevLabel }}
      </cm-pagination-button>
    </slot>

    <cm-pagination-button
      v-for="page in pages"
      :key="page.name"
      :is-active="currentPage === page.name"
      square
      @click="onClickPage(page.name)"
    >
      {{ page.name }}
    </cm-pagination-button>

    <slot name="next">
      <cm-pagination-button
        :is-disabled="isInLastPage"
        @click="onClickNextPage"
      >
        {{ nextLabel }}
      </cm-pagination-button>
    </slot>
  </div>
</template>

<script>
export default {
  name: "CmPagination",

  props: {
    prevLabel: {
      type: String,
      default: "«",
    },
    nextLabel: {
      type: String,
      default: "»"
    },
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      if (this.isInFirstPage) {
        return 1;
      }
      if (this.isInLastPage) {
        const start = this.totalPages - (this.maxVisibleButtons - 1)
        if (start === 0) return 1
        else return start
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({ name: i });
      }

      return range;
    },
  },

  methods: {
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1)
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1)
    },
    onClickPage(page) {
      this.$emit('pagechanged', page)
    },
  },
};
</script>
