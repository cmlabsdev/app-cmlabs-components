### Code Example

```vue
<template>
	<cm-data-table
		api-endpoint="https://kv3.cmlabs.dev/api/team"
		data-key="teams"
	>
		<template #default="{ tableData }">
			<cm-table :table-columns="tableColumns" :table-data="tableData" />
		</template>
	</cm-data-table>
</template>

<script>
export default {
	data() {
		return {
			tableColumns: [
				{
					name: "name",
					title: "Team Name",
				},
				{
					name: "domain_count",
					title: "Number of Domains",
				},
				{
					name: "member_count",
					title: "Number of Members",
				},
				{
					name: "role",
					title: "Role",
				},
			],
		};
	},
};
</script>
```