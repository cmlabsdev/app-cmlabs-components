<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">
        Upgrade Guide
      </h1>
      <p class="text-md text-dark-10">
        Upgrading the package on major updates.
      </p>
    </header>

    <hr class="text-gray-60" />

    <div>
      <cm-alert type="outline" variant="info">
        🚧&nbsp; Documentation for this section is not yet complete.
      </cm-alert>
    </div>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/getting-started/browser-support"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/style-guide/colors"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsGettingStartedUpgradeGuidePage"
}
</script>
