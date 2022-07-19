## Populating Data to Store

The first one we will be looking at is the fact that
the table fetches data with the given endpoint and store the returned value internally as it becomes a stateful component.  
But how exactly we want to store the data within our own state for example a state management using VueX?<br></br>

Luckily, the Data Table component accepts `populate-store` props which accepts a string value of a _vuex's commit action_ name.
This way, when the the fetches is being in a successeful state, the component will also dispatch a commit to the store passing
in the data as the argument. You may choose to use this options if you would like to trigger a commit action.

### Code Example

```vue
<template>
	<cm-data-table
		api-endpoint="https://kv3.cmlabs.dev/api/team"
		data-key="teams"
		populate-store="users"
	>
		<template #default="{ tableData }">
			<cm-table :table-columns="tableColumns" :table-data="tableData" />
		</template>
	</cm-data-table>
</template>
```

## Formatting Response Data

When the data comes from the API is not how you wanted it to be or, for example, you want to change a specific column text differently
from the other rows, you can have a custom function which accepts the data from the response and modify the item based on your specific
use case.