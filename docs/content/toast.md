#### Code Example

```vue
<cm-toast />

<cm-button variant="primary" @click="$cmToast">Toggle Toast</cm-button>

<!-- available variants are only "primary", "info", "success", "warning", "danger" -->
<cm-button
	variant="success"
	@click="
		$cmToast(
			{ variant: 'success', title: 'Welcome!', text: 'Hello World!' },
			4000
		)
	"
>Toggle Toast</cm-button>

<cm-button
	variant="warning"
	@click="
		$cmToast(
			{
				variant: 'warning',
				title: 'This toast has a link!',
				text: 'Check the link below',
				hasLink: true,
				toLink: 'https://youtube.com',
				textLink: 'Go to youtube!',
			},
			6000
		)
	"
>Toggle Toast</cm-button>

<cm-button
	variant="info"
	@click="
		$cmToast(
			{
				variant: 'info',
				title: 'This toast has a link!',
				text: '<strong>It can render an element!</strong> hehehehe',
				hasLink: true,
				toLink: 'https://youtube.com',
				textLink: 'Go to youtube!',
			},
			6000
		)
	"
>Toggle Toast</cm-button>

<cm-button
	variant="danger"
	@click="
		$cmToast(
			{
				variant: 'danger',
				title: 'Custom Icon',
				text: 'The icon must use the full bx- class form',
				icon: 'bx-user',
			},
			6000
		)
	"
>Toggle Toast</cm-button>
```
