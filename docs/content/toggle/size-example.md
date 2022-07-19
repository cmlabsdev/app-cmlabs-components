#### Code Example

```vue
<template>
	<div class="flex items-center gap-4">
		<span>MD Size</span>
		<cm-toggle v-model="darkMode" size="md" />
	</div>
	<div class="flex items-center gap-4">
		<cm-toggle v-model="darkMode" size="xl" />
		<span>XL Size</span>
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
