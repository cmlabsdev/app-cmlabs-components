<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Selects</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">Selects component ^^</p>
		</header>

		<hr class="text-gray-60" />

		<section
			class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none"
		>
			<h2>Basic Usage</h2>

			<p>
				The required props are <code>options</code> props which holds an array
				of object with some predefined structure. Additional props are for targeting
        label and or value of the option and model binding.
			</p>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white shadow rounded">
				<p>Selected Language: {{ language || "none" }}</p>
				<cm-select
					v-model="language"
					append-to-body
					field-key="value"
					label="name"
					placeholder="Select a Language"
					:options="options"
				/>
			</div>

			<nuxt-content :document="basicExample" />

			<h2>Custom Dropdown's Width and Height</h2>

			<p>
				By default, the width will take up as wide as the input control, however
        sometimes the input control might take a very small space. Luckily, you
        can force the width and height value into any valid TailwindCSS classes
        by using the <code>width</code> and <code>height</code> props.
			</p>

      <p>
        <strong>Do note:</strong>
        <span>
          The default height class will have max-h-[250px] applied. To force no
          maximum height, you have to override the max height class with `!` as
          TailwindCSS recommend to mark an important class.
        </span>
      </p>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white shadow rounded">
				<p>Selected Language: {{ language || "none" }}</p>
				<cm-select
					v-model="language"
					append-to-body
					field-key="value"
					label="name"
					placeholder="Select a Language"
					:options="options"
          width="!w-80"
          height="!max-h-none !h-80"
				/>
			</div>

			<nuxt-content :document="customDimensionExample" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/pagination"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/slider"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsSelectPage",

	async asyncData({ $content }) {
		const basicExample = await $content("select/basic-example").fetch();
		const customDimensionExample = await $content("select/custom-dimension-example").fetch();
		return {
			basicExample,
      customDimensionExample,
		};
	},

	data() {
		return {
			language: null,
			options: [
				{ id: 1, name: "HTML", value: "html" },
				{ id: 2, name: "CSS", value: "css" },
				{ id: 3, name: "JavaScript", value: "js" },
			],
		};
	},
};
</script>
