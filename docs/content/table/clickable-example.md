#### Code Example

```vue
<template>
	<cm-table
		clickable
		hoverable
		:table-columns="tableColumns"
		:table-data="tableData"
		@click:row="handleClick"
	/>
	<cm-table
		clickable
		hoverable
		hoverable-text-color="hover:text-success-60"
		:table-columns="tableColumns"
		:table-data="tableData"
	/>
	<cm-table
		hoverable
		hoverable-text-color="hover:text-info-60"
		:table-columns="tableColumns"
		:table-data="tableData"
	/>
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

	methods: {
		handleClick(rowData) {
			alert("Check the console to see the row data!");
			console.log(rowData);
		},
	},
};
</script>
```
