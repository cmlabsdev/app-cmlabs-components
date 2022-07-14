#### Code Example

```vue
<template>
	<cm-form-control>
		<cm-cleave
			:options="{
				date: true,
				delimiter: '-',
				datePattern: ['Y', 'm', 'd'],
			}"
			placeholder="0812 3456 7890"
		/>
	</cm-form-control>
</template>
```
