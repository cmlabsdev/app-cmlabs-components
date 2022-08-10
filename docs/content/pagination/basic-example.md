### Code Example

```vue
<template>
  <cm-pagination>
    <template #prev>
      <cm-pagination-button>Prev</cm-pagination-button>
    </template>

    <cm-pagination-button>Button</cm-pagination-button>

    <template #next>
      <cm-pagination-button>Next</cm-pagination-button>
    </template>
  </cm-pagination>

  <cm-pagination>
    <template #prev>
      <cm-pagination-button
        :is-disabled="1 === activePage"
        @click="handleClick(activePage - 1)"
      >
        Prev
      </cm-pagination-button>
    </template>

    <cm-pagination-button
      v-for="button in 5"
      :key="button"
      :is-active="button === activePage"
      @click="() => handleClick(button)"
    >
      {{ button }}
    </cm-pagination-button>

    <template #next>
      <cm-pagination-button
        :is-disabled="5 === activePage"
        @click="handleClick(activePage + 1)"
      >
        Next
      </cm-pagination-button>
    </template>
  </cm-pagination>

  <cm-pagination>
    <template #prev>
      <cm-pagination-button
        :is-disabled="1 === page"
        @click="handleOnClick(page - 1)"
        >Prev</cm-pagination-button
      >
    </template>

    <cm-pagination-button v-if="showPrevDots" @click="jumpOutbounds('down')"
      >...</cm-pagination-button
    >

    <cm-pagination-button
      v-for="button in paginationOutbounds"
      :key="button"
      :is-active="button === page"
      square
      @click="() => handleOnClick(button)"
    >
      {{ button }}
    </cm-pagination-button>

    <cm-pagination-button v-if="showNextDots" @click="jumpOutbounds('up')"
      >...</cm-pagination-button
    >

    <template #next>
      <cm-pagination-button
        :is-disabled="numberOfPages === page"
        @click="handleOnClick(page + 1)"
        >Next</cm-pagination-button
      >
    </template>
  </cm-pagination-button>
</template>

<script>
export default {
  data() {
    return {
      activePage: 1,
      page: 1,
      numberOfPages: 10,
      threshold: 3,
      paginationOutbounds: [1, 2, 3, 4],
    };
  },

  computed: {
    showPrevDots() {
      if (this.paginationOutbounds.includes(1)) return false;
      return true;
    },
    showNextDots() {
      if (this.paginationOutbounds.includes(this.numberOfPages)) return false;
      return true;
    },
  },

  methods: {
    handleClick(button) {
      this.activePage = button;
    },
    handleOnClick(page) {
      const direction = page < this.page ? "down" : "up";

      if (page !== this.numberOfPages) {
        const isPageBreaker = this.isPageBreaker(page);
        if (isPageBreaker) {
          this.jumpOutbounds(direction);
        }
      }

      this.page = page;
    },
    isPageBreaker(page) {
      if (page === 1) return false;
      return (page % this.threshold) - 1 === 0;
    },
    jumpOutbounds(direction) {
      this.paginationOutbounds = this.paginationOutbounds.map((outbound) => {
        if (direction === "down") {
          this.page = this.paginationOutbounds[0];
          return outbound - this.threshold;
        } else {
          this.page =
            this.paginationOutbounds[this.paginationOutbounds.length - 1];
          return outbound + this.threshold;
        }
      });
    },
  },
};
</script>
```
