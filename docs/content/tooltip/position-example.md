#### Code Example

```html
<cm-tooltip placement="bottom">
	<template #toggler>
		<cm-icon icon="bx-cog" />
	</template>

	<span>Setting</span>
</cm-tooltip>

<cm-tooltip placement="left">
	<template #toggler>
		<cm-button>
			<cm-icon icon="bx-cog" />
		</cm-button>
	</template>

	<span>My toggler is a component!!</span>
</cm-tooltip>
```
