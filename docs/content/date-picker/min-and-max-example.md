### Code Example

```vue
<template>
	<div class="w-full">
		<strong>Today: {{ today }}</strong>
		<cm-date-picker v-model="today" :min-date="new Date()" />
	</div>
	<div class="w-full">
		<strong>Birthday: {{ birthday }}</strong>
		<cm-date-picker v-model="birthday" :max-date="new Date()" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			today: new Date(),
			birthday: null,
		};
	},
};
</script>
```
