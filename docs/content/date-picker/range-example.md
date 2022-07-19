### Code Example

```vue
<template>
	<div class="w-full">
		<strong>Booking For: {{ bookingFor }}</strong>
		<cm-date-picker
			v-model="bookingFor"
			formatter="YYYY-MM-DD"
			:min-date="new Date()"
			is-range
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bookingFor: {
				start: this.$moment().format("YYYY-MM-DD"),
				end: this.$moment().format("YYYY-MM-DD"),
			},
		};
	},
};
</script>
```
