<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Toggles</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">Toggles component ^^</p>
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

			<p>
				The component itself is an inline element, you can wrap the component
				with another div
			</p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="flex items-center gap-4">
          <span>Toggle dark mode</span>
          <cm-toggle v-model="darkMode" />
        </div>
        <div class="flex items-center gap-4">
          <cm-toggle v-model="darkMode" />
          <span>Toggle dark mode</span>
        </div>
      </div>

			<nuxt-content :document="basicExample" />

			<h2>Size Props</h2>

			<p>
				Below are the sizes value that can accepted:
        <ul>
          <li>xs</li>
          <li>sm</li>
          <li>base</li>
          <li>md</li>
          <li>lg</li>
          <li>xl</li>
          <li>unset</li>
        </ul>
			</p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="flex items-center gap-4">
          <span>MD Size</span>
          <cm-toggle v-model="darkMode" size="md" />
        </div>
        <div class="flex items-center gap-4">
          <cm-toggle v-model="darkMode" size="xl" />
          <span>XL Size</span>
        </div>
      </div>

			<nuxt-content :document="sizeExample" />

			<h2>Disabled Props</h2>

			<p>
				Using the `disabled` boolean props, the toggle will become inactive.
			</p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="flex items-center gap-4">
          <cm-toggle v-model="darkMode" disabled />
          <span>Disabled</span>
        </div>
      </div>

			<nuxt-content :document="disabledExample" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/toast"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/tooltip"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsTogglePage",

	async asyncData({ $content }) {
		const basicExample = await $content("toggle/basic-example").fetch();
		const sizeExample = await $content("toggle/size-example").fetch();
		const disabledExample = await $content("toggle/disabled-example").fetch();
		return {
			basicExample,
      sizeExample,
      disabledExample,
		};
	},

	data() {
		return {
			darkMode: false,
		};
	},
};
</script>
