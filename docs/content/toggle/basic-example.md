#### Code Example

```vue
<template>
	<div class="flex items-center gap-4">
		<span>Toggle dark mode</span>
		<cm-toggle v-model="darkMode" />
	</div>
	<div class="flex items-center gap-4">
		<cm-toggle v-model="darkMode" />
		<span>Toggle dark mode</span>
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
