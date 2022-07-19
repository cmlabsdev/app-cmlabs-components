<template>
  <main class="flex flex-col gap-6">
    <header>
      <h1 class="font-bold text-h2">Data Tables</h1>
    </header>

    <hr class="text-gray-60" />

    <section class="prose prose-ol:p-0 prose-li:p-0 prose-p:m-0 max-w-none">
      <nuxt-content :document="responseExample" />
      
      <cm-data-table api-endpoint="https://kv3.cmlabs.dev/api/team" data-key="teams">
        <template #default="{ tableData }">
          <cm-table :table-columns="tableColumns" :table-data="tableData"  />
        </template>
      </cm-data-table>

      <nuxt-content :document="basicExample" />
      
      <nuxt-content :document="propsExample" />

      <cm-data-table api-endpoint="https://kv3.cmlabs.dev/api/team" data-key="teams" :format-data="formatData">
        <template #default="{ tableData }">
          <cm-table :table-columns="tableColumns" :table-data="tableData"  />
        </template>
      </cm-data-table>

      <nuxt-content :document="formattingExample" />

      <cm-data-table api-endpoint="https://kv3.cmlabs.dev/api/team" data-key="teams" no-per-page>
        <template #default="{ tableData }">
          <cm-table :table-columns="tableColumns" :table-data="tableData"  />
        </template>
      </cm-data-table>

      <nuxt-content :document="noPerPageExample" />
    </section>

    <footer class="flex items-center justify-between">
      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/cleave"
      >
        <cm-icon icon="bx-arrow-back" />
        <span>Previous</span>
      </nuxt-link>

      <nuxt-link
        class="flex items-center gap-2 py-3 px-4 rounded border border-dark-10 hover:border-dark-60"
        to="/docs/ui-components/date-picker"
      >
        <span>Continue</span>
        <cm-icon class="rotate-180" icon="bx-arrow-back" />
      </nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  name: "DocsUiComponentsDataTablePage",

  async asyncData({ $content }) {
    const basicExample = await $content("data-table/basic-example").fetch();
    const formattingExample = await $content("data-table/formatting-example").fetch();
    const noPerPageExample = await $content("data-table/no-per-page-example").fetch();
    const propsExample = await $content("data-table/props-example").fetch();
    const responseExample = await $content("data-table/response-example").fetch();

    return {
      basicExample,
      formattingExample,
      noPerPageExample,
      propsExample,
      responseExample,
    };
  },

  data() {
    return {
      tableColumns: [
        {
          name: "name",
          title: "Team Name",
        },
        {
          name: "domain_count",
          title: "Number of Domains",
        },
        {
          name: "member_count",
          title: "Number of Members",
        },
        {
          name: "role",
          title: "Role",
        },
      ]
    }
  },

  methods: {
    formatData(data) {
      const formattedData = [...data]
      formattedData[0].name = formattedData[0].name + " HEHEHEH";
      formattedData[0].domain_count = formattedData[0].domain_count + "0000000x";
      return formattedData
    }
  }
}
</script>
