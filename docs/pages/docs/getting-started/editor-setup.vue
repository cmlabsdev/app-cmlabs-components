<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">
        Editor Setup
      </h1>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <h2 class="text-dark-60 dark:text-gray-10"> IDE Recommendation </h2>

      <p class="dark:text-gray-40">
        <a class="dark:text-gray-20" href="https://code.visualstudio.com/">VS Code</a>
        is the recommended code editor since the editor has the extension called
        <a class="dark:text-gray-20" href="https://github.com/tailwindlabs/tailwindcss-intellisense.git">Tailwind CSS IntelliSense</a>
        for tailwindcss classes autocomplete, syntax highlighting,
        and linting. You may choose your own editor which might have
        a similar extension to provide intellisense for tailwindcss classes.
      </p>

      <h2 class="text-dark-60 dark:text-gray-10"> Default Configuration File </h2>

      <p class="dark:text-gray-40">
        The package comes with a preconfigured tailwind configuration
        under the <code>/src/tailwind.config.js</code>
      </p>

      <div v-highlight class="my-4">
        <pre class="language-javascript"><code>module.exports = {
  content: [
    `~/components/**/*.{js,vue,ts}`,
    `~/layouts/**/*.{js,vue,ts}`,
    `~/mixins/**/*.{js,ts}`,
    `~/pages/**/*.{js,vue,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/nuxt.config.{js,ts}`,
    `~/store/**/*.{js,ts}`,
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Graphik', 'sans-serif'],
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'base': '14px',
      'md': '16px',
      'lg': '18px',

      'h6': '20px',
      'h5': '24px',
      'h4': '30px',
      'h3': '36px',
      'h2': '42px',
      'h1': '46px',

      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '42px',
      '6xl': '46px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000000',
        danger: {
          10: '#FFF3E5',
          20: '#FFE7D5',
          30: '#FFC9AB',
          40: '#FFA481',
          50: '#FF8061',
          60: '#FF433D',
          70: '#DB2820',
          80: '#B7161D',
          90: '#930E1E',
          100: '#7A081F',
          110: '#570424'
        },
        dark: {
          10: '#929396',
          20: '#858689',
          30: '#797A7D',
          40: '#66676A',
          50: '#4C4D50',
          60: '#393A3D',
          70: '#2C2D30',
          80: '#232427',
          90: '#191A1D',
          100: '#111215',
          110: '#0B0C0F'
        },
        gray: {
          10: '#FCFCFC',
          20: '#FAFAFC',
          30: '#F6F6F8',
          40: '#F1F1F3',
          50: '#EDEDEF',
          60: '#E6E6E6',
          70: '#CDCDCD',
          80: '#C0C0C0',
          90: '#B2B2B2',
          100: '#AAAAAA',
          110: '#989A9F'
        },
        info: {
          10: '#ECF0FF',
          20: '#E0E5FF',
          30: '#C2CAFF',
          40: '#A4AFFF',
          50: '#8D9AFF',
          60: '#6877FF',
          70: '#4C58DB',
          80: '#343EB7',
          90: '#212893',
          100: '#13197A',
          110: '#090D57'
        },
        primary: {
          10: '#E3FEFE',
          20: '#D0F7FE',
          30: '#A2E9FE',
          40: '#74D6FD',
          50: '#51C1FC',
          60: '#18A0FB',
          70: '#117CD7',
          80: '#0C5DB4',
          90: '#074191',
          100: '#042E78',
          110: '#021A56'
        },
        secondary: {
          10: '#F9EAFE',
          20: '#F1DCFD',
          30: '#E0BAFC',
          40: '#CA96F8',
          50: '#B47AF2',
          60: '#9450EA',
          70: '#733AC9',
          80: '#5528A8',
          90: '#3B1987',
          100: '#280F70',
          110: '#160750'
        },
        success: {
          10: '#E9FDE1',
          20: '#D2FBCD',
          30: '#9EF89C',
          40: '#69EA74',
          50: '#42D65D',
          60: '#0FBB3F',
          70: '#0AA043',
          80: '#078643',
          90: '#046C3F',
          100: '#02593C',
          110: '#014037'
        },
        warning: {
          10: '#FFFCE2',
          20: '#FFF9D0',
          30: '#FFF0A1',
          40: '#FFE673',
          50: '#FFDC50',
          60: '#FFCC16',
          70: '#DBAA10',
          80: '#B78A0B',
          90: '#936B07',
          100: '#7A5504',
          110: '#573702'
        },
        white: '#FFFFFF'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography')
  ]
};
</code></pre>
      </div>

      <p class="dark:text-gray-40">
        The pallete and font family along with the font sizes
        has been configured out of the box, but you do have a favor
        to use your own configuration. This package will merge the
        default configuration with your configuration automatically.
        The package also installed the official <code class="code-badge">@tailwind/line-clamp</code>
        and <code class="code-badge">@tailwind/typography</code> plugins out of the box.
      </p>

      <h2 class="text-dark-60 dark:text-gray-10"> Custom Configuration File </h2>

      <p class="dark:text-gray-40">
        If you want to specify your own configuration file, make sure to
        place the configuration file in the root directory (one level with the package.json file)
        with a name of <code>tailwind.config.js</code>.
      </p>
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/getting-started/installation"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/getting-started/release-notes"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsGettingStartedEditorSetupPage"
}
</script>
