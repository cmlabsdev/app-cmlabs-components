### Code Example

```vue
<template>
	<cm-data-table
		api-endpoint="https://kv3.cmlabs.dev/api/team"
		data-key="teams"
		:format-data="formatData"
	>
		<template #default="{ tableData }">
			<cm-table :table-columns="tableColumns" :table-data="tableData" />
		</template>
	</cm-data-table>
</template>

<script>
export default {
	methods: {
		formatData(data) {
			const formattedData = [...data];
			formattedData[0].name = formattedData[0].name + " HEHEHEH";
			formattedData[0].domain_count =
				formattedData[0].domain_count + "0000000x";
			return formattedData;
		},
	},
};
</script>
```

## No Per Page Functionality

The default _Data Table_ component has per page functionality which you can implement the logic by your own.
To disable this feature entirely, use the `no-per-page` boolean value props.
