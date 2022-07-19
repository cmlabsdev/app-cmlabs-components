### Code Example

```vue
<template>
	<cm-form-group>
		<template #label>
			<cm-form-label> Username </cm-form-label>
		</template>

		<cm-form-control>
			<cm-input placeholder="Enter your username" />
		</cm-form-control>

		<template #error>
			<cm-form-error> Please insert your username! </cm-form-error>
		</template>

		<template #utils>
			<span class="text-dark-40 text-sm"
				>We will create a unique ID based on your username that can't never be
				changed.</span
			>
		</template>
	</cm-form-group>
</template>
```
