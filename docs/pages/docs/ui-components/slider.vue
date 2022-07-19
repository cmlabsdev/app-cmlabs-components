<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Sliders</h1>
      <p class="text-md text-dark-10 dark:text-gray-40">
        Sliders component ^^
      </p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris massa quam
        pretium venenatis at quis interdum eros. Laoreet efficitur nullam
        himenaeos nam pellentesque pretium turpis facilisi dis. Eu quis dictum
        aenean consequat nibh blandit vivamus. Vulputate venenatis varius eros
        facilisis id. Rutrum platea suspendisse a ipsum sit pharetra adipiscing.
        Sem vitae etiam maximus venenatis eleifend cubilia fermentum
        consectetur. Leo erat tincidunt facilisis ultrices vivamus justo
        dignissim.
      </p>

      <h2>Basic Usage</h2>

      <p class="text-md">
        The slider component act like a normal html progress element. Use a v-model
        to bind a value within the component. The default min and value are from 0 to 100 but
        you can change the value using the <code>min</code> and <code>max</code> props.
      </p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="w-full">
          <strong>Current Progress: {{ currentProgress }}</strong>
          <cm-slider v-model="currentProgress" />
        </div>
        <div class="w-full">
          <strong>Current Progress: {{ anotherProgress }}</strong>
          <cm-slider v-model="anotherProgress" :min="50" :max="200" />
        </div>
      </div>

      <nuxt-content :document="basicExample" />

      <h2>Disabled Slider</h2>

      <p class="text-md">
        Use the <code>disabled</code> boolean props to disable the slider.
      </p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="w-full">
          <strong>Current Progress: {{ currentProgress }}</strong>
          <cm-slider v-model="currentProgress" disabled />
        </div>
      </div>

      <nuxt-content :document="disabledExample" />
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/select">
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/strike">
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsUiComponentsSliderPage",

  async asyncData({ $content }) {
    const basicExample = await $content("slider/basic-example").fetch();
    const disabledExample = await $content("slider/disabled-example").fetch();
    return {
      basicExample,
      disabledExample,
    };
  },

  data() {
    return {
      anotherProgress: 100,
      currentProgress: 0,
    }
  }
}
</script>
