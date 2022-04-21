[![CMLABS Components Design System](./thumbnail.png)](https://cmlabs.co)

# CMLABS Components

[![npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]


> CMLABS Components Design System **only** for [NuxtJS 2](https://nuxtjs.org) project using [TailwindCSS](https://tailwindcss.com/) as the base CSS Utility Framework.

- [✨ &nbsp;Release Notes](https://components.cmlabs.co/docs/getting-started/releases)
- [📖 &nbsp;Documentation](https://components.cmlabs.co/docs/getting-started/installation)

## Introduction
This package uses [@nuxt/postcss8](https://www.npmjs.com/package/@nuxt/postcss8) (for [`TailwindCSS`] requirement) and [@nuxtjs/moment](https://www.npmjs.com/package/@nuxtjs/moment) (for `datepicker` component) under the hood and register them automatically so it is encouraged for you not to install these packages in your project.

The base component uses `cm-{component_name}` as a prefix for conventional use and to avoid component name conflict issue. Some component uses external libraries (which have been automatically registered) as defined below:

- [@blowstack/ckeditor-nuxt](https://npmjs.com/package/@blowstack/ckeditor-nuxt) - used for `<cm-editor>` component.
- [floating-vue](https://npmjs.com/package/floating-vue) - used for `<cm-tooltip>` and `<cm-dropdown>` components.
- [v-calendar](https://npmjs.com/package/v-calendar) - used for `<cm-date-picker>`, `<cm-date-time-picker>`, and `<cm-time-picker>` components.
- [vee-validate](https://npmjs.com/package/vee-validate) - automatically registers `<ValidationObserver>` and `<ValidationProvider>` components with standard rules configuration. ([see the configuration here](https://github.com/cmlabsdev/app-cmlabs-components/blob/main/src/plugins/vee-validate.js))
- [vt-notifications](https://npmjs.com/package/vt-notifications) - used for `<cm-toast>` component.
- [vue-cleave-component](https://npmjs.com/package/vue-cleave-component) - used for `<cm-cleave>` component.
- [vue-final-modal](https://npmjs.com/package/vue-final-modal) - used for `<cm-modal>` component.
- [vue-js-toggle-button](https://npmjs.com/package/vue-js-toggle-button) - used for `<cm-toggle>` component.
- [vue-multipane](https://npmjs.com/package/vue-multipane) - automatically registers `<Multipane>` and `<MultipaneResizer>` components.
- [vue-slider-component](https://npmjs.com/package/vue-slider-component) - used for `<cm-slider>` component.

The library and dependencies are installed with respect of the [Vue](https://vuejs.org) version for compatibility. For the next major updates, these library and dependencies will be upgraded. There is no need for you to install the listed packages above (the libraries have been installed automatically).

Please do ***note** that this package is used only in [NuxtJS 2](https://nuxtjs.org) project at the moment.

## Features

- 👌&nbsp; [NuxtJS](https://nuxtjs.org) version 2 compatible.
- ⚡️&nbsp; [TailwindCSS](https://nuxtjs.org) version 3 installed.
- 🗜&nbsp; Automatically merge your `tailwind.config.js` with the package's default [configuration](https://github.com/cmlabsdev/app-cmlabs-components/blob/main/src/tailwind.config.js).
- 📦&nbsp; Automatically install and configure peer component library dependencies.
- 🎨&nbsp; Uses only [CMLABS](https://cmlabs.co) style guide. ([see the theme here](https://www.figma.com/file/48g4gtDjQFyVyqXolpBOXZ/Analytics-V3-Components?node-id=8923%3A396280))
- 🪄&nbsp; Accessibility and usability driven components.
- ⚙️&nbsp; Configurable and composable components.
- ☀️&nbsp; Light and Dark support for the components. 

## Installation
1. Add `@cmlabs/components` package to your project.

```bash
# Using npm
npm install @cmlabs/components
# Using yarn
yarn add @nuxtjs/tailwindcss
```

2. Add `@cmlabs/components` to the `modules` section of `nuxt.config.js`.

```js
{
  modules: [
    '@cmlabs/components'
  ]
}
```

3. Add **boxicons** cdn to your `nuxt.config.js` to use the icons.

```js
{
  head: {
    ...
    link: [
      ...
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'
      },
      ...
    ],
    ...
  },
}
```

That's it! You can now use Tailwind classes and CMLABS components in your Nuxt app ✨

[📖 &nbsp;Read more about the configuration](https://components.cmlabs.co/docs)

## Usage

Make sure to add the [boxicons](https://boxicons.com/) cdn in order to use `bx-icon` syntax to render your icons.

[📖 &nbsp;Read more about boxicons usage](https://boxicons.com/)

### Examples:

```vue
<cm-button outline variant="info">
  Hello, World
</cm-button>
```

```vue
<cm-dropdown placement="bottom-start">
  <template #toggler>
    <cm-dropdown-toggler>
      <div class="flex items-center gap-4">
        <cm-icon
          class="text-gray-80 text-xl"
          icon="bx-cog"
        />
        <p> Manage User </p>
      </div>
    </cm-dropdown-toggler>
  </template>

  <cm-dropdown-card>
    ...
  </cm-dropdown-card>
</cm-button>
```

[📖 &nbsp;Read more about the components](https://components.cmlabs.co/docs/components/accordion)

## License
[MIT License](./License)

[npm-version-src]: https://img.shields.io/npm/v/@cmlabs/components/latest.svg
[npm-version-href]: https://npmjs.com/package/@cmlabs/components

[npm-downloads-src]: https://img.shields.io/npm/dt/@cmlabs/components.svg
[npm-downloads-href]: https://npmjs.com/package/@cmlabs/components

[license-src]: https://img.shields.io/npm/l/@nuxtjs/tailwindcss.svg
[license-href]: https://npmjs.com/package/@nuxtjs/tailwindcss