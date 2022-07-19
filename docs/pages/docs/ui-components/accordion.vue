<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Accordions</h1>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <nuxt-content :document="page" />
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/style-guide/icons"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/alert"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsUiComponentsAccordionPage",

  async asyncData({ $content }) {
    const page = await $content("accordion").fetch();
    return {
      page,
    };
  }
}
</script>
