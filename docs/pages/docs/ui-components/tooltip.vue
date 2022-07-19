<template>
	<main class="flex flex-col gap-6">
		<header>
			<h1 class="font-bold text-h2">Tooltips</h1>
			<p class="text-md text-dark-10 dark:text-gray-40">
				Tooltips component ^^
			</p>
		</header>

		<hr class="text-gray-60" />

		<section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
			<p class="text-md text-dark-10 dark:text-gray-40">
				The tooltip component uses an internal popper wrapper. It exposes three
				slots which can be used one and another.
			</p>

      <h2>Basic Usage</h2>

      <p class="text-md">
				The required slots are `#toggler` and `default` slots. When using the
				tooltip, each slots must contain an element.
			</p>

			<div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <cm-tooltip>
          <template #toggler>
            <span>Hover me</span>
          </template>

          <span>Hello World</span>
        </cm-tooltip>

        <cm-tooltip>
          <template #toggler>
            <cm-button>Hover me</cm-button>
          </template>

          <span>My toggler is a component!!</span>
        </cm-tooltip>
      </div>

			<nuxt-content :document="basicExample" />

      <h2>Tooltip Placement</h2>

      <p class="text-md">
				Using the `position` props, you can place the tooltip within the following positition:
        <ul>
          <li>top</li>
          <li>top-start</li>
          <li>top-center</li>
          <li>top-end</li>
          <li>bottom</li>
          <li>bottom-start -> Default</li>
          <li>bottom-center</li>
          <li>bottom-end</li>
          <li>right</li>
          <li>right-start</li>
          <li>right-center</li>
          <li>right-end</li>
          <li>left</li>
          <li>left-start</li>
          <li>left-center</li>
          <li>left-end</li>
        </ul> 
			</p>

			<div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <cm-tooltip placement="bottom">
          <template #toggler>
            <cm-icon icon="bx-cog" />
          </template>

          <span>Setting</span>
        </cm-tooltip>

        <cm-tooltip placement="left">
          <template #toggler>
            <cm-button>
              <cm-icon icon="bx-cog" />
            </cm-button>
          </template>

          <span>My toggler is a component!!</span>
        </cm-tooltip>
      </div>

			<nuxt-content :document="basicExample" />

      <h2>Tooltip Distance</h2>

      <p class="text-md">
				Using the `distance` number props, you can place the tooltip move further from the wrapper.
        It moves the x-axis and accept negative number.
			</p>

			<div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <cm-tooltip placement="bottom" :distance="16">
          <template #toggler>
            <cm-icon icon="bx-cog" />
          </template>

          <span>Setting</span>
        </cm-tooltip>

        <cm-tooltip placement="left" :distance="16">
          <template #toggler>
            <cm-button>
              <cm-icon icon="bx-cog" />
            </cm-button>
          </template>

          <span>My toggler is a component!!</span>
        </cm-tooltip>
      </div>

			<nuxt-content :document="basicExample" />
		</section>

		<footer class="flex items-center justify-between">
			<nuxt-link
				class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
				to="/docs/ui-components/toggle"
			>
				<cm-icon icon="bx-arrow-back" />
				<span>Previous</span>
			</nuxt-link>
		</footer>
	</main>
</template>

<script>
export default {
	name: "DocsUiComponentsTooltipbasicExample",

	async asyncData({ $content }) {
		const basicExample = await $content("tooltip/basic-example").fetch();
		return {
			basicExample,
		};
	},
};
</script>
