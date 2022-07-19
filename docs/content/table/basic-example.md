#### Code Example

```vue
<template>
	<cm-table :table-columns="tableColumns" :table-data="tableData"></cm-table>
</template>

<script>
export default {
	data() {
		return {
			tableColumns: [
				{
					name: "no",
					title: "No",
				},
				{
					name: "name",
					title: "Name",
				},
				{
					name: "email",
					title: "Email",
				},
			],
			tableData: [
				{
					no: 1,
					name: "CMLABS",
					email: "hello@cmlabs.co",
				},
				{
					no: 2,
					name: "John Doe",
					email: "johndoe@gmail.com",
				},
			],
		};
	},
};
</script>
```
