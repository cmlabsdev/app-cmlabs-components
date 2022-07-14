#### Code Example

```vue
<template>
	<cm-form-group>
		<cm-form-control error>
			<cm-cleave
				error
				:options="{ creditCard: true }"
				placeholder="Enter a credit card number"
			/>
		</cm-form-control>

		<template #error>
			<cm-form-error>An error occured!</cm-form-error>
		</template>
	</cm-form-group>
</template>
```
