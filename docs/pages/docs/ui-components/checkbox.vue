<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Checkboxes</h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Checkboxes component ^^
      </p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 max-w-none">
      <nuxt-content :document="page" />
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/button"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/cleave"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsUiComponentsCheckboxPage",

  async asyncData({ $content }) {
    const page = await $content("checkbox").fetch();
    return {
      page,
    };
  }
}
</script>
