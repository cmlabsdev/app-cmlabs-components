<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Dropdowns</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">
				Dropdowns component ^^
			</p>
		</header>

		<hr class="text-gray-60" />

		<section
			class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none"
		>
			<p class="text-md text-dark-10 dark:text-gray-40">
				The dropdown component exposes <code>dropdown-toggler</code> and
				<code>dropdown-card</code>
				with the usage correspondingly to the name. You can change how the
				toggler looks by creating a custom component by yourself. However, the
				default look of the toggler is what mainly used from the design. On the
				other hand, the dropdown card is responsible to maintain a consistent
				look of the content box.
			</p>

			<h2>Basic Usage</h2>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
				<cm-dropdown>
					<template #toggler>
						<cm-dropdown-toggler> Open Dropdown </cm-dropdown-toggler>
					</template>

					<cm-dropdown-card>
						<div>Hello, I am a dropodown</div>
					</cm-dropdown-card>
				</cm-dropdown>
			</div>

			<nuxt-content :document="page" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/date-picker"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/editor"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsDropdownPage",

	async asyncData({ $content }) {
		const page = await $content("dropdown").fetch();
		return {
			page,
		};
	},
};
</script>
