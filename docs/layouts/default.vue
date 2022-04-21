<template>
  <main class="w-full min-h-screen flex flex-col bg-gray-30 overflow-hidden">
    <header class="w-full h-20 flex-shrink-0 bg-white">
      <div class="h-full container mx-auto flex items-center justify-between px-10">
        <div class="flex items-center gap-4">
          <LogoCmlabs />
          <h1 class="font-bold text-h6 text-primary-60"> CMLABS Components </h1>
          <cm-badge size="sm" type="pill"> v.1.1.0 </cm-badge>
        </div>

        <div class="flex items-center divide-x divide-gray-80">
          <div class="flex items-center gap-8 pr-8">
            <nav class="flex items-center gap-8 text-base">
              <BaseLink
                v-for="link in baseLinks"
                :key="link.to"
                :is-active="$route.name.includes(link.to.substr(1))"
                :to="link.to"
              >
                {{ link.label }}
              </BaseLink>
            </nav>
          </div>
          <div class="flex items-center gap-8 pl-8">
            <cm-icon class="text-h6 text-gray-80" icon="bxs-sun" />
            <cm-icon class="text-h6 text-gray-80" icon="bxl-github" />
          </div>
        </div>
      </div>
    </header>

    <section class="container mx-auto px-10 overflow-hidden">
      <section class="w-full h-full flex gap-10 overflow-hidden">
        <aside class="w-80 h-full overflow-auto">
          <nav class="flex flex-col gap-10 py-10">
            <DocsNavigation title="Getting Started">
              <DocsNavigationLink
                v-for="link in navigationLinks.gettingStarted"
                :key="link.to"
                :is-active="$route.name.startsWith(link.to.substr(1))"
                :to="link.to"
              >
                {{ link.label }}
              </DocsNavigationLink>
            </DocsNavigation>

            <DocsNavigation title="Style Guide">
              <DocsNavigationLink
                v-for="link in navigationLinks.styleGuide"
                :key="link.to"
                :is-active="$route.name.startsWith(link.to.substr(1))"
                :to="link.to"
              >
                {{ link.label }}
              </DocsNavigationLink>
            </DocsNavigation>

            <DocsNavigation title="Components Library">
              <DocsNavigationLink
                v-for="link in navigationLinks.components"
                :key="link.to"
                :is-active="$route.name.startsWith(link.to.substr(1))"
                :to="link.to"
              >
                {{ link.label }}
              </DocsNavigationLink>
            </DocsNavigation>

            <DocsNavigation title="Take A Tour">
              <DocsNavigationLink
                v-for="link in navigationLinks.tours"
                :key="link.to"
                tag="a"
                :to="link.to"
              >
                {{ link.label }}
              </DocsNavigationLink>
            </DocsNavigation>
          </nav>
        </aside>

        <article class="flex-1 h-full overflow-auto">
          <div class="py-10">
            <Nuxt />
          </div>
        </article>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "DefaultLayout",

  data () {
    return {
      baseLinks: [
        { to: "/docs", label: "Docs" },
        { to: "/examples", label: "Examples" },
        { to: "/playground", label: "Playground" },
      ],
      navigationLinks: {
        gettingStarted: [
          { to: "/docs/getting-started/installation", label: "Installation" },
          { to: "/docs/getting-started/editor-setup", label: "Editor Setup" },
          { to: "/docs/getting-started/browser-support", label: "Browser Support" },
          { to: "/docs/getting-started/release-notes", label: "Release Notes" },
          { to: "/docs/getting-started/upgrade-guide", label: "Upgrade Guide" },
        ],
        styleGuide: [
          { to: "/docs/style-guide/colors", label: "Colors" },
          { to: "/docs/style-guide/typography", label: "Typography" },
          { to: "/docs/style-guide/icons", label: "Icons" },
        ],
        components: [
          { to: "/docs/ui-components/accordion", label: "Accordion" },
          { to: "/docs/ui-components/alert", label: "Alert" },
          { to: "/docs/ui-components/avatar", label: "Avatar" },
          { to: "/docs/ui-components/badge", label: "Badge" },
          { to: "/docs/ui-components/button", label: "Button" },
          { to: "/docs/ui-components/checkbox", label: "Checkbox" },
          { to: "/docs/ui-components/cleave", label: "Cleave" },
          { to: "/docs/ui-components/data-table", label: "Data Table" },
          { to: "/docs/ui-components/date-picker", label: "Date Picker" },
          { to: "/docs/ui-components/dropdown", label: "Dropdown" },
          { to: "/docs/ui-components/editor", label: "Editor" },
          { to: "/docs/ui-components/forms", label: "Forms" },
          { to: "/docs/ui-components/modal", label: "Modal" },
          { to: "/docs/ui-components/pagination", label: "Pagination" },
          { to: "/docs/ui-components/select", label: "Select" },
          { to: "/docs/ui-components/slider", label: "Slider" },
          { to: "/docs/ui-components/strike", label: "Strike" },
          { to: "/docs/ui-components/table", label: "Table" },
          { to: "/docs/ui-components/toast", label: "Toast" },
          { to: "/docs/ui-components/toggle", label: "Toggle" },
          { to: "/docs/ui-components/tooltip", label: "Tooltip" },
        ],
        tours: [
          { to: "https://cmlabs.co", label: "CMLABS Official Site" },
          { to: "https://v3.cmlabs.dev", label: "CMLABS Analytics" },
        ]
      }
    }
  }
}
</script>
