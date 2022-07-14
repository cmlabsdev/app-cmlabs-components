<p class="text-md text-dark-10 dark:text-gray-40">
  The avatar component has built-in function to render a pulsing animation only if the <code>src</code> value is falsy (e.g: fetching the picture).
</p>

## Basic Usage

When no `src` is passed down, the component will render a circle-pulse animation by default. This is useful if the image is actually being fetched.  
The component also accept `alt` attribute if you want to specify an alt option.

<div style="display: flex; align-items: center; gap: 8px; margin-top: 16px;">
  <cm-avatar></cm-avatar>
  <cm-avatar alt="CMLABS" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
</div>

#### Code Example

```html
  <cm-avatar />
  <cm-avatar alt="CMLABS" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
```

## Avatar Sizes

The avatar has sizes supported as follow:

- xs
- sm
- base -> Default
- md
- lg
- xl
- unset -> Useful if you want to set the dimension on your own

<div style="display: flex; align-items: center; gap: 8px; margin-top: 16px;">
  <cm-avatar alt="CMLABS" size="xs" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
  <cm-avatar alt="CMLABS" size="sm" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
  <cm-avatar alt="CMLABS" size="base" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
  <cm-avatar alt="CMLABS" size="md" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
  <cm-avatar alt="CMLABS" size="lg" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
  <cm-avatar alt="CMLABS" size="xl" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>
  <cm-avatar alt="CMLABS" size="unset" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" width="80" height="80"></cm-avatar>
</div>

#### Code Example

```html
  <cm-avatar alt="CMLABS" size="xs" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
  <cm-avatar alt="CMLABS" size="sm" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
  <cm-avatar alt="CMLABS" size="base" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
  <cm-avatar alt="CMLABS" size="md" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
  <cm-avatar alt="CMLABS" size="lg" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
  <cm-avatar alt="CMLABS" size="xl" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
  <cm-avatar alt="CMLABS" size="unset" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" width="80" height="80" />
```

## Square Avatar

The avatar by default will render a circle shape. To force the avatar to not be circle, use the `rounded` boolean props and set it to false.

<cm-avatar alt="CMLABS" :rounded="false" size="lg" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg"></cm-avatar>

#### Code Example

```html
  <cm-avatar alt="CMLABS" :rounded="false" size="lg" src="https://design.cmlabs.dev/_nuxt/img/cmlabs.21b68bc.svg" />
```

