<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Checkboxes</h1>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Nullam laoreet euismod litora; mollis efficitur arcu non nisl urna. Volutpat mauris neque pharetra pharetra posuere morbi. Nullam feugiat ex praesent sociosqu et ultricies non ligula. Risus bibendum mollis varius gravida cubilia fames suspendisse. Adipiscing vitae fusce posuere ac turpis. Donec metus massa proin risus laoreet torquent. Parturient iaculis scelerisque mattis aliquam platea dis senectus.
      </p>
      
      <div>
        <h2>Basic Example</h2>
        <p>
          Checkboxes are primarily used for an array that contains multiple value,
          eventhough the checkbox could also act as a toggler to define a boolean value. <br>
          Using an array as the model value is recommended in many circumstances since.
        </p>
        
        <div class="mt-4 pl-4">
          <p>Selected Languages: {{ languages }}</p>
          
          <cm-checkbox v-model="languages" value="html">HTML</cm-checkbox>
          <cm-checkbox v-model="languages" value="css">CSS</cm-checkbox>
          <cm-checkbox v-model="languages" value="js">JS</cm-checkbox>
        </div>
        <nuxt-content :document="basicExample" />
      </div>

      <div>
        <h2>Boolean Example</h2>
        <p>
          When using checkbox as a toggle (for boolean value), you should define the type of
          the model as a boolean value and only one checkbox can be used at a time.
        </p>
        
        <div class="mt-4 pl-4">
          <p>Remember Me: {{ rememberMe }}</p>
          
          <cm-checkbox v-model="rememberMe">Remember Me?</cm-checkbox>
        </div>
        <nuxt-content :document="booleanExample" />
      </div>

      <div>
        <h2>Sizes Example</h2>
        <p>
          By default, the checkbox sizes includes flex gap for defining a space between the label and the text.
          To override the default values from the sizes, you may use unset as the size props value and define
          the dimension or classes by using the TailwindCSS classes.
        </p>
        
        <div class="mt-4 pl-4">
          <cm-checkbox size="xs">xs checkbox</cm-checkbox>
          <cm-checkbox size="sm">sm checkbox</cm-checkbox>
          <cm-checkbox size="base">base (default) checkbox</cm-checkbox>
          <cm-checkbox size="md">md checkbox</cm-checkbox>
          <cm-checkbox size="lg">lg checkbox</cm-checkbox>
          <cm-checkbox size="xl">xl checkbox</cm-checkbox>
          <cm-checkbox size="unset">unset checkbox</cm-checkbox>
        </div>
        <nuxt-content :document="sizesExample" />
      </div>
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
    const basicExample = await $content("checkbox/basic-example").fetch();
    const booleanExample = await $content("checkbox/boolean-example").fetch();
    const sizesExample = await $content("checkbox/sizes-example").fetch();
    return {
      basicExample,
      booleanExample,
      sizesExample,
    };
  },

  data() {
    return {
      languages: [],
      rememberMe: false
    }
  }
}
</script>
