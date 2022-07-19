<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">
        Installation
      </h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Using cmlabs components in your Nuxt 2 project is only one command away ✨
      </p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <h2 class="text-dark-60 dark:text-gray-10" >Setup </h2>

      <ol class="text-dark-60 dark:text-gray-10">
        <li>
          <p> 1. Add <code class="code-badge">@cmlabs/components</code> package to your project. </p>
          <div v-highlight class="my-4">
            <pre class="language-bash"><code># using npm
> npm install @cmlabs/components
# using yarn
> yarn add @cmlabs/components</code></pre>
          </div>
        </li>
        <li>
          <p> 2. Add <code class="code-badge">@cmlabs/components</code> to the <code class="code-badge">modules</code> section of <code class="code-badge">nuxt.config.js</code>. </p>
          <div v-highlight class="my-4">
            <pre class="language-javascript"><code>{
  modules: [
    '@cmlabs/components'
  ]
}</code></pre>
          </div>
        </li>
        <li>
          <p> 3. Add <strong>Boxicons</strong> cdn to your <code class="code-badge">nuxt.config.js</code> to use the icons. </p>
          <div v-highlight class="my-4">
            <pre class="language-javascript"><code>{
  head: {
    ...
    link: [
      ...
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'
      },
      ...
    ],
    ...
  },
}</code></pre>
          </div>
        </li>
      </ol>
 
      <cm-alert>
        That's it! You can now use Tailwind classes and CMLABS components in your Nuxt app ✨
      </cm-alert>
    </section>

    <footer class="flex items-center justify-end">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/getting-started/editor-setup"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsGettingStartedInstallationPage"
}
</script>
