### Code Example

```vue
<template>
	<!-- append-to-body: teleport the select's dropdown to body -->
	<!-- field-key: which property from the options object to take as a value for the v-model -->
	<!-- label: which property  from the options object to take as the value for the option's rendered text -->
	<!-- placeholder: show a string when no value is provided (e.g null) -->
	<cm-select
		v-model="language"
		append-to-body
		field-key="value"
		label="name"
		placeholder="Select a Language"
		:options="options"
	/>
</template>

<script>
export default {
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
```
