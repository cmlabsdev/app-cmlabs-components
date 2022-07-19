<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Modals</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">Modals component ^^</p>
		</header>

		<hr class="text-gray-60" />

		<section
			class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none"
		>
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

			<div class="flex flex-col gap-4 mt-4 p-4 bg-white rounded shadow">
				<cm-modal v-model="defaultModal">
					<template #title>
						<div>Hello World!</div>
					</template>

					<div>Ini konten ceritanya</div>
				</cm-modal>
				<cm-modal v-model="customModal" width="w-[768px]">
					<template #title>
						<div>Hello World!</div>
					</template>

					<div>Ini konten ceritanya</div>
				</cm-modal>
				<cm-modal v-model="noPaddingModal" padding="p-0">
					<template #title>
						<div>Hello World!</div>
					</template>

					<div>Ini konten ceritanya</div>
				</cm-modal>
				<cm-modal v-model="noClickOutsideModal" :click-to-close="false">
					<template #title>
						<div>Hello World!</div>
            <cm-button @click="noClickOutsideModal = false">
              <cm-icon icon="bx-x" />
            </cm-button>
					</template>

					<div>You can't click outside!</div>

          <template #close="{ close }">
            <cm-button @click="close">
              <cm-icon icon="bx-x" />
            </cm-button>
          </template>
				</cm-modal>

				<cm-button @click="defaultModal = true"> Open Default Modal </cm-button>
				<cm-button variant="secondary" @click="customModal = true"> Open Custom Width Modal </cm-button>
				<cm-button variant="info" @click="noPaddingModal = true"> Open No Padding Modal </cm-button>
				<cm-button variant="success" @click="noClickOutsideModal = true"> Open No Click Outside Modal </cm-button>
			</div>

			<nuxt-content :document="page" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/forms"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>

			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/pagination"
			>
				<span>Continue</span>
				<cm-icon class="rotate-180" icon="bx-arrow-back" />
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsModalPage",

	async asyncData({ $content }) {
		const page = await $content("modal").fetch();
		return {
			page,
		};
	},

	data() {
		return {
			defaultModal: false,
      customModal: false,
      noPaddingModal: false,
      noClickOutsideModal: false,
		};
	},
};
</script>
