<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Icons</h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Theme and CMLABS icons guidelines.
      </p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        We integrate
        <a class=" dark:text-gray-20 no-underline hover:underline" href="https://boxicons.com" target="_blank">Boxicons</a>
        into our icon components library. In order to use
        <a class=" dark:text-gray-20 no-underline hover:underline" href="https://boxicons.com" target="_blank">Boxicons</a>,
        you need to install boxicons through CDN: <br>
        <code>&lt;link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'></code>
      </p>

      <h2 class="text-dark-60 dark:text-gray-10"> Example Usage </h2>

      <p v-highlight>
        <pre class="language-html"><code>&ltcm-icon icon="bx-user" /&gt;</code>
<code>&ltcm-icon class="bx-spin" icon="bx-spinner" /&gt;</code>
<code>&ltcm-icon :class="{ 'rotate-180': isOpen }" icon="bx-chevron-down" /&gt;</code></pre>
      </p>

      <p class="dark:text-gray-10">Refer to the official website for more usage</p>
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/style-guide/typography"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/accordion"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsStyleGuideIconsPage",
};
</script>
