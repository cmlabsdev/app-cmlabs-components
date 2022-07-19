<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Tables</h1>
      <p class="text-md text-dark-10 dark:text-gray-40">Tables component ^^</p>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 prose-table:my-0 max-w-none">
      <p class="text-md text-dark-10 dark:text-gray-40">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Mauris massa quam
        pretium venenatis at quis interdum eros. Laoreet efficitur nullam
        himenaeos nam pellentesque pretium turpis facilisi dis. Eu quis dictum
        aenean consequat nibh blandit vivamus. Vulputate venenatis varius eros
        facilisis id. Rutrum platea suspendisse a ipsum sit pharetra adipiscing.
        Sem vitae etiam maximus venenatis eleifend cubilia fermentum
        consectetur. Leo erat tincidunt facilisis ultrices vivamus justo
        dignissim.
      </p>

      <h2>Basic Usage</h2>

      <p class="text-md">
        The table component expects two required configuration passed as props.
        They are <code>tableColumns</code> and <code>tableData</code>. Take a
        look at the options structure down below.
      </p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <cm-table :table-columns="tableColumns" :table-data="tableData"></cm-table>
      </div>

      <nuxt-content :document="basicExample" />

      <p>
        The table columns expect name and title key as its required option to
        prepare what data should be taken from the table data. You use the title
        property to show what label should be written inside the table header.
        While the name is used to index what key to take from the table data.
      </p>

      <h2>Table Theming</h2>

      <p class="text-md">
        The table component comes with several themes. The available theme options
        are as follow:
      <ul>
        <li>plain</li>
        <li>base</li>
        <li>clean</li>
        <li>last-border</li>
      </ul>
      </p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="w-full">
          <strong>Plain Table</strong>
          <cm-table :table-columns="tableColumns" :table-data="tableData" theme="plain"></cm-table>
        </div>
        <div class="w-full">
          <strong>Base (Default)</strong>
          <cm-table :table-columns="tableColumns" :table-data="tableData" theme="base"></cm-table>
        </div>
        <div class="w-full">
          <strong>Clean</strong>
          <cm-table :table-columns="tableColumns" :table-data="tableData" theme="clean"></cm-table>
        </div>
        <div class="w-full">
          <strong>Last Border</strong>
          <cm-table :table-columns="tableColumns" :table-data="tableData" theme="last-border"></cm-table>
        </div>
      </div>

      <nuxt-content :document="themeExample" />

      <h2>Clickable Table</h2>

      <p class="text-md">
        When using <code>clickable</code> boolean props, the table will have
        the ability to emit an event as the row clicked while passing that row
        as the first argument. You can also define a color when that hoverable
        row is being clicked. Otherwise, you can just specify a hover color
        without allowing the table to be clicked.
      </p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="w-full">
          <cm-table clickable hoverable :table-columns="tableColumns" :table-data="tableData"
            @click:row="handleClick" />
        </div>
        <div class="w-full">
          <cm-table clickable hoverable hoverable-text-color="hover:text-success-60" :table-columns="tableColumns"
            :table-data="tableData" />
        </div>
        <div class="w-full">
          <cm-table hoverable hoverable-text-color="hover:text-info-60" :table-columns="tableColumns"
            :table-data="tableData" />
        </div>
      </div>

      <nuxt-content :document="clickableExample" />

      <h2>Table Overrides</h2>

      <p class="text-md">
        Some additional props will allow you to reinvorce the table looks. Check the available props
        below.
      </p>

      <div class="flex flex-col items-start gap-4 mt-4 bg-white shadow rounded p-4">
        <div class="w-full">
          <strong>No Column Padding</strong>
          <cm-table no-column-padding :table-columns="tableColumns" :table-data="tableData" />
        </div>
        <div class="w-full">
          <strong>No Shadow</strong>
          <cm-table no-shadow :table-columns="tableColumns"
            :table-data="tableData" />
        </div>
      </div>

      <nuxt-content :document="overridesExample" />
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/strike">
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/toast">
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsUiComponentsTablePage",

  async asyncData({ $content }) {
    const basicExample = await $content("table/basic-example").fetch();
    const themeExample = await $content("table/theme-example").fetch();
    const clickableExample = await $content("table/clickable-example").fetch();
    const overridesExample = await $content("table/overrides-example").fetch();
    return {
      basicExample,
      themeExample,
      clickableExample,
      overridesExample,
    };
  },

  data() {
    return {
      tableColumns: [
        {
          name: "no",
          title: "No",
        },
        {
          name: "name",
          title: "Name",
        },
        {
          name: "email",
          title: "Email",
        },
      ],
      tableData: [
        {
          no: 1,
          name: "CMLABS",
          email: "hello@cmlabs.co",
        },
        {
          no: 2,
          name: "John Doe",
          email: "johndoe@gmail.com",
        },
      ],
    };
  },

  methods: {
    handleClick(rowData) {
      alert("Check the console to see the row data!");
      console.log(rowData)
    }
  }
};
</script>
