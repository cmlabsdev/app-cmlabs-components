#### Code Example

```html
<cm-tooltip placement="bottom" :distance="16">
	<template #toggler>
		<cm-icon icon="bx-cog" />
	</template>

	<span>Setting</span>
</cm-tooltip>

<cm-tooltip placement="left" :distance="16">
	<template #toggler>
		<cm-button>
			<cm-icon icon="bx-cog" />
		</cm-button>
	</template>

	<span>My toggler is a component!!</span>
</cm-tooltip>
```
