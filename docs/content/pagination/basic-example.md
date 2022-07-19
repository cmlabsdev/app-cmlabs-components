### Code Example

```vue
<template>
	<cm-pagination>
		<template #prev>
			<cm-pagination-button>Prev</cm-pagination-button>
		</template>

		<cm-pagination-button>Button</cm-pagination-button>

		<template #next>
			<cm-pagination-button>Next</cm-pagination-button>
		</template>
	</cm-pagination>

	<cm-pagination>
		<template #prev>
			<cm-pagination-button
				:is-disabled="1 === activePage"
				@click="handleClick(activePage - 1)"
			>
				Prev
			</cm-pagination-button>
		</template>

		<cm-pagination-button
			v-for="button in 5"
			:key="button"
			:is-active="button === activePage"
			@click="() => handleClick(button)"
		>
			{{ button }}
		</cm-pagination-button>

		<template #next>
			<cm-pagination-button
				:is-disabled="5 === activePage"
				@click="handleClick(activePage + 1)"
      >
        Next
      </cm-pagination-button>
		</template>
	</cm-pagination>
</template>

<script>
export default {
	data() {
		return {
			activePage: 1,
		};
	},

	methods: {
		handleClick(button) {
			this.activePage = button;
		},
	},
};
</script>
```
