### Code Example

```vue
<template>
	<div class="w-full">
		<strong>Today: {{ today }}</strong>
		<cm-date-picker v-model="today" />
	</div>
	<div class="w-full">
		<strong>Birthday: {{ birthday }}</strong>
		<cm-date-picker v-model="birthday" />
	</div>
	<div class="w-full">
		<strong>Custom Formatter: {{ customFormat }}</strong>
		<cm-date-picker v-model="customFormat" formatter="MMMM Do YYYY" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			today: new Date(),
			birthday: null,
			customFormat: this.$moment().format("YYYY-MM-DD"),
		};
	},
};
</script>
```
