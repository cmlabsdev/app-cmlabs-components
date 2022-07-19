### Code Example

```vue
<template>
	<cm-modal v-model="defaultModal">
		<template #title>
			<div>Hello World!</div>
		</template>

		<div>Ini konten ceritanya</div>
	</cm-modal>
	<cm-modal v-model="customModal" width="w-[768px]">
		<template #title>
			<div>Hello World!</div>
		</template>

		<div>Ini konten ceritanya</div>
	</cm-modal>
	<cm-modal v-model="noPaddingModal" padding="p-0">
		<template #title>
			<div>Hello World!</div>
		</template>

		<div>Ini konten ceritanya</div>
	</cm-modal>
	<cm-modal v-model="noClickOutsideModal" :click-to-close="false">
		<template #title>
			<div>Hello World!</div>
			<cm-button @click="noClickOutsideModal = false">
				<cm-icon icon="bx-x" />
			</cm-button>
		</template>

		<div>You can't click outside!</div>

		<template #close="{ close }">
			<cm-button @click="close">
				<cm-icon icon="bx-x" />
			</cm-button>
		</template>
	</cm-modal>

	<cm-button @click="defaultModal = true"> Open Default Modal </cm-button>
	<cm-button variant="secondary" @click="customModal = true">
		Open Custom Width Modal
	</cm-button>
	<cm-button variant="info" @click="noPaddingModal = true">
		Open No Padding Modal
	</cm-button>
	<cm-button variant="success" @click="noClickOutsideModal = true">
		Open No Click Outside Modal
	</cm-button>
</template>

<script>
export default {
	data() {
		return {
			defaultModal: false,
			customModal: false,
			noPaddingModal: false,
			noClickOutsideModal: false,
		};
	},
};
</script>
```
