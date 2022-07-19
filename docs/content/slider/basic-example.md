#### Code Example

```vue
<template>
	<cm-slider v-model="currentProgress" />
	<cm-slider v-model="anotherProgress" :min="50" :max="200" />
</template>

<script>
export default {
	data() {
		return {
			anotherProgress: 100,
			currentProgress: 0,
		};
	},
};
</script>
```
