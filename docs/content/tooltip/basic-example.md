#### Code Example

```html
<!-- Each slots should use an element as a wrapper -->
<cm-tooltip>
	<template #toggler>
		<span>Hover me</span>
	</template>

	<span>Hello World</span>
</cm-tooltip>

<cm-tooltip>
	<template #toggler>
		<cm-button>Hover me</cm-button>
	</template>

	<span>My toggler is a component!!</span>
</cm-tooltip>

<!-- This wouldn't work -->
<cm-tooltip>
	<template #toggler> Hover me </template>

	My toggler is a component!!
</cm-tooltip>
```
