<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">
        Typography
      </h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Theme and CMLABS texts guidelines.
      </p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        All classes are applicable for use with <code>text-${size}</code>, <code>font-${family|weight}</code>,  and any specific tailwind
        classes which support text utility.
      </p>

      <h2 class="text-dark-60 dark:text-gray-10"> Example Usage </h2>

      <p v-highlight>
        <pre class="language-html"><code>&ltdiv class="text-sm"&gt; Small Text &lt;/div&gt;</code>
<code>&ltp class="font-bold"&gt; Display bold text &lt;/p&gt;</code>
<code>&ltarticle class="font-serif"&gt; Show serif family class &lt;/article&gt;</code></pre>
      </p>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Heading 1 </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-h1">Font Bold Text h1</p>
          <code>.font-bold.text-h1</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-h1">Font Semibold Text h1</p>
          <code>.font-semibold.text-h1</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-h1">Font Medium Text h1</p>
          <code>.font-medium.text-h1</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-h1">Font Normal Text h1</p>
          <code>.text-h1</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-h1">Font Light Text h1</p>
          <code>.font-light.text-h1</code>
        </div>
      </div>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Heading 2 </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-h2">Font Bold Text h2</p>
          <code>.font-bold.text-h2</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-h2">Font Semibold Text h2</p>
          <code>.font-semibold.text-h2</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-h2">Font Medium Text h2</p>
          <code>.font-medium.text-h2</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-h2">Font Normal Text h2</p>
          <code>.text-h2</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-h2">Font Light Text h2</p>
          <code>.font-light.text-h2</code>
        </div>
      </div>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Heading 3 </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-h3">Font Bold Text h3</p>
          <code>.font-bold.text-h3</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-h3">Font Semibold Text h3</p>
          <code>.font-semibold.text-h3</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-h3">Font Medium Text h3</p>
          <code>.font-medium.text-h3</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-h3">Font Normal Text h3</p>
          <code>.text-h3</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-h3">Font Light Text h3</p>
          <code>.font-light.text-h3</code>
        </div>
      </div>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Heading 4 </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-h4">Font Bold Text h4</p>
          <code>.font-bold.text-h4</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-h4">Font Semibold Text h4</p>
          <code>.font-semibold.text-h4</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-h4">Font Medium Text h4</p>
          <code>.font-medium.text-h4</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-h4">Font Normal Text h4</p>
          <code>.text-h4</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-h4">Font Light Text h4</p>
          <code>.font-light.text-h4</code>
        </div>
      </div>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Heading 5 </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-h5">Font Bold Text h5</p>
          <code>.font-bold.text-h5</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-h5">Font Semibold Text h5</p>
          <code>.font-semibold.text-h5</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-h5">Font Medium Text h5</p>
          <code>.font-medium.text-h5</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-h5">Font Normal Text h5</p>
          <code>.text-h5</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-h5">Font Light Text h5</p>
          <code>.font-light.text-h5</code>
        </div>
      </div>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Heading 6 </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-h6">Font Bold Text h6</p>
          <code>.font-bold.text-h6</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-h6">Font Semibold Text h6</p>
          <code>.font-semibold.text-h6</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-h6">Font Medium Text h6</p>
          <code>.font-medium.text-h6</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-h6">Font Normal Text h6</p>
          <code>.text-h6</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-h6">Font Light Text h6</p>
          <code>.font-light.text-h6</code>
        </div>
      </div>
      
      <h2 class="text-dark-60 dark:text-gray-10"> Text Extra Large </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-xl">Font Bold Text xl</p>
          <code>.font-bold.text-xl</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-xl">Font Semibold Text xl</p>
          <code>.font-semibold.text-xl</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-xl">Font Medium Text xl</p>
          <code>.font-medium.text-xl</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-xl">Font Normal Text xl</p>
          <code>.text-xl</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-xl">Font Light Text xl</p>
          <code>.font-light.text-xl</code>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Text Large </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-lg">Font Bold Text lg</p>
          <code>.font-bold.text-lg</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-lg">Font Semibold Text lg</p>
          <code>.font-semibold.text-lg</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-lg">Font Medium Text lg</p>
          <code>.font-medium.text-lg</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-lg">Font Normal Text lg</p>
          <code>.text-lg</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-lg">Font Light Text lg</p>
          <code>.font-light.text-lg</code>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Text Medium </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-md">Font Bold Text md</p>
          <code>.font-bold.text-md</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-md">Font Semibold Text md</p>
          <code>.font-semibold.text-md</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-md">Font Medium Text md</p>
          <code>.font-medium.text-md</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-md">Font Normal Text md</p>
          <code>.text-md</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-md">Font Light Text md</p>
          <code>.font-light.text-md</code>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Text Base </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold">Font Bold Text default | base</p>
          <code>.font-bold</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold">Font Semibold Text default | base</p>
          <code>.font-semibold</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium">Font Medium Text default | base</p>
          <code>.font-medium</code>
        </div>
        <div class="flex items-center justify-between">
          <p>Font Normal Text default | base</p>
          <code></code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light">Font Light Text default | base</p>
          <code>.font-light</code>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Text Small </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-sm">Font Bold Text sm</p>
          <code>.font-bold.text-sm</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-sm">Font Semibold Text sm</p>
          <code>.font-semibold.text-sm</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-sm">Font Medium Text sm</p>
          <code>.font-medium.text-sm</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-sm">Font Normal Text sm</p>
          <code>.text-sm</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-sm">Font Light Text sm</p>
          <code>.font-light.text-sm</code>
        </div>
      </div>

      <h2 class="text-dark-60 dark:text-gray-10"> Text Extra Small </h2>

      <div class="dark:text-gray-40">
        <div class="flex items-center justify-between">
          <p class="font-bold text-xs">Font Bold Text xs</p>
          <code>.font-bold.text-xs</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-semibold text-xs">Font Semibold Text xs</p>
          <code>.font-semibold.text-xs</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-medium text-xs">Font Medium Text xs</p>
          <code>.font-medium.text-xs</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-xs">Font Normal Text xs</p>
          <code>.text-xs</code>
        </div>
        <div class="flex items-center justify-between">
          <p class="font-light text-xs">Font Light Text xs</p>
          <code>.font-light.text-xs</code>
        </div>
      </div>
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/style-guide/colors"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/style-guide/icons"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsStyleGuideTypographyPage"
}
</script>
