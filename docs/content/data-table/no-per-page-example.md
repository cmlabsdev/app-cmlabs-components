### Code Example

```vue
<template>
	<cm-data-table
		api-endpoint="https://kv3.cmlabs.dev/api/team"
		data-key="teams"
		no-per-page
	>
		<template #default="{ tableData }">
			<cm-table :table-columns="tableColumns" :table-data="tableData" />
		</template>
	</cm-data-table>
</template>
```
