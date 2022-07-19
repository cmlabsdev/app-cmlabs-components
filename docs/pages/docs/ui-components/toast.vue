<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Toasts</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">Toasts component ^^</p>
		</header>

		<hr class="text-gray-60" />

		<section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 max-w-none">
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
				Use the <code>$cmToast()</code> helper passing in the toast options and duration as the args. <br>
				See below example to see what are the available toast options.
			</p>

			<div
				class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4"
			>
				<cm-toast />
				<cm-button variant="primary" @click="$cmToast">Toggle Toast</cm-button>
				<cm-button
					variant="success"
					@click="
						$cmToast(
							{ variant: 'success', title: 'Welcome!', text: 'Hello World!' },
							4000
						)
					"
					>Toggle Toast</cm-button
				>
				<cm-button
					variant="warning"
					@click="
						$cmToast(
							{
								variant: 'warning',
								title: 'This toast has a link!',
								text: 'Check the link below',
								hasLink: true,
								toLink: 'https://youtube.com',
								textLink: 'Go to youtube!',
							},
							6000
						)
					"
					>Toggle Toast</cm-button
				>
				<cm-button
					variant="info"
					@click="
						$cmToast(
							{
								variant: 'info',
								title: 'This toast has a link!',
								text: '<strong>It can render an element!</strong> hehehehe',
								hasLink: true,
								toLink: 'https://youtube.com',
								textLink: 'Go to youtube!',
							},
							6000
						)
					"
					>Toggle Toast</cm-button
				>
				<cm-button
					variant="danger"
					@click="
						$cmToast(
							{
								variant: 'danger',
								title: 'Custom Icon',
								text: 'The icon must use the full bx- class form',
								icon: 'bx-user'
							},
							6000
						)
					"
					>Toggle Toast</cm-button
				>
			</div>

			<nuxt-content :document="basicExample" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/table"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/toggle"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsToastPage",

	async asyncData({ $content }) {
		const basicExample = await $content("toast").fetch();
		return {
			basicExample,
		};
	},
};
</script>
