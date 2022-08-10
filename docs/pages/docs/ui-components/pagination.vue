<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Paginations</h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Paginations component ^^
      </p>
    </header>

    <hr class="text-gray-60" />

    <section
      class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none"
    >
      <p class="text-md text-dark-10 dark:text-gray-40">
        The pagination component exposes two available components. One being the
        pagination wrapper and the other one represents the pagination button.
        The pagination button is a wrapped component which exposes several
        events and accept different props to define the pagination behaviour.
        For dynamic purpose, you should define the event listener for changing
        between basicExamples.
      </p>

      <h2>Basic Usage</h2>

      <div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
        <div class="inline-flex">
          <cm-pagination
            :total-pages="totalPages"
            :current-page="currentPage"
            @pagechanged="onPageChange"
          ></cm-pagination>
        </div>
      </div>

      <nuxt-content :document="basicExample" />
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/modal"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/select"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsUiComponentsPaginationPage",

  async asyncData({ $content }) {
    const basicExample = await $content("pagination/basic-example").fetch();
    return {
      basicExample,
    };
  },

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
