<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Forms</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">Forms component ^^</p>
		</header>

		<hr class="text-gray-60" />

		<section
			class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none"
		>
			<p class="text-md text-dark-10 dark:text-gray-40">
				Use the <code>cm-form-group</code> component to group
				<strong>form control</strong>, <strong>form error</strong>, and
				<strong>form label</strong>. You may use <code>cm-input</code> as a
				child within the <strong>form control</strong> component. This will
				allow you to make a form component. See example below
			</p>

			<h2>Basic Usage</h2>

      <p>
        The form group component exposes 4 slots that you can use one and another.
        The following example shows full usage of the slots starting from the label,
        form control wrapper for input, error field, and utils used to display other
        information. You can combine the usage of <code>v-if</code> with the error
        slots to dynamically show the error element.
      </p>

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
				<cm-form-group>
					<template #label>
						<cm-form-label> Username </cm-form-label>
					</template>

					<cm-form-control>
						<cm-input placeholder="Enter your username" />
					</cm-form-control>

					<template #error>
						<cm-form-error> Please insert your username! </cm-form-error>
					</template>

					<template #utils>
						<span class="text-dark-40 text-sm"
							>We will create a unique ID based on your username that can't
							never be changed.</span
						>
					</template>
				</cm-form-group>
			</div>

			<nuxt-content :document="page" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/editor"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/modal"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsFormPage",

	async asyncData({ $content }) {
		const page = await $content("forms").fetch();
		return {
			page,
		};
	},
};
</script>
