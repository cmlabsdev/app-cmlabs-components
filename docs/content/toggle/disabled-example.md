#### Code Example

```vue
<template>
	<div class="flex items-center gap-4">
		<cm-toggle v-model="darkMode" disabled />
		<span>Disabled</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			darkMode: false,
		};
	},
};
</script>
```
