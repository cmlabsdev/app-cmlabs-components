<template>
  <nuxt-child />
</template>

<script>
export default {
  name: "DocsPage",

  middleware({ redirect, route }) {
    if (route.name === "docs") {
      redirect("/docs/getting-started/installation");
    }
  }
}
</script>
