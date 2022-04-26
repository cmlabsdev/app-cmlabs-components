<template>
  <div class="flex flex-col gap-16 items-center justify-center">
    <img src="../../src/thumbnail.png">
    <nuxt-link to="/docs">
      <cm-button variant="outline">
        Go to the docs
      </cm-button>
    </nuxt-link>
  </div>  
</template>

<script>
export default {
  name: "IndexPage",

  layout: "home"
}
</script>
