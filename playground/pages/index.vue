<template>
  <div class="container mx-auto flex flex-col items-start gap-12 m-12">
    <cm-toggle>
      cm-toggle
    </cm-toggle>

    <cm-accordion>
      <cm-accordion-item>
        cm-accordion-item 1
      </cm-accordion-item>
      <cm-accordion-item>
        cm-accordion-item 2
      </cm-accordion-item>
    </cm-accordion>

    <cm-alert>
      cm-alert
    </cm-alert>

    <cm-avatar src="https://images.unsplash.com/photo-1640209872074-dd584b38f2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" />

    <cm-badge>
      cm-badge
    </cm-badge>

    <cm-breadcrumb>
      <cm-breadcrumb-item to="/cmlabs">
        cm-breadcrumb-item-1
      </cm-breadcrumb-item>
      <cm-breadcrumb-item>
        cm-breadcrumb-item-2
      </cm-breadcrumb-item>
    </cm-breadcrumb>

    <cm-button>
      cm-button
    </cm-button>

    <cm-checkbox v-model="checkbox">
      Cheryl Jelek
    </cm-checkbox>

    <cm-form-control>
      <cm-cleave
        :options="{ numeral: true }"
        placeholder="cm-cleave (must be wrapped inside cm-form-control)"
      />
    </cm-form-control>

    <cm-data-table>
      <template #header>
        <cm-data-table-header>
          <cm-form-control>
            <cm-input placeholder="cm-input (must be wrapped inside cm-form-control)" />
          </cm-form-control>
        </cm-data-table-header>
      </template>

      <cm-table :table-columns="tableColumns" :table-data="tableData" />

      <template #footer>
        <cm-data-table-footer>
          <cm-data-table-count>
            cm-data-table-count
          </cm-data-table-count>

          <cm-pagination>
            <cm-pagination-button>
              cm-pagination-button-1
            </cm-pagination-button>
            <cm-pagination-button>
              cm-pagination-button-2
            </cm-pagination-button>
            <cm-pagination-button>
              cm-pagination-button-3
            </cm-pagination-button>
          </cm-pagination>
        </cm-data-table-footer>
      </template>
    </cm-data-table>

    <cm-date-picker v-model="date" />
    <cm-date-time-picker v-model="date" />

    <cm-dropdown>
      <template #toggler>
        <cm-dropdown-toggler>
          cm-dropdown-toggler
        </cm-dropdown-toggler>
      </template>

      <cm-dropdown-card>
        cm-dropdown-card
      </cm-dropdown-card>
    </cm-dropdown>

    <cm-form-group>
      <template #label>
        <cm-form-label>
          cm-form-label
        </cm-form-label>
      </template>

      <cm-form-control>
        <cm-input placeholder="cm-input" />
      </cm-form-control>

      <template #error>
        <cm-form-error>
          cm-form-error
        </cm-form-error>
      </template>
    </cm-form-group>

    <cm-form-control>
      <cm-input-tag placeholder="cm-input-tag" />
    </cm-form-control>

    <cm-loader />

    <cm-modal v-model="show">
      <template #title>
        modal title
      </template>

      cm-modal

      <template #actions>
        <cm-button variant="light">
          cm-button variant light
        </cm-button>
        <cm-button variant="success">
          cm-button variant success
        </cm-button>
      </template>
    </cm-modal>

    <cm-radio v-model="radio" value="radio">
      cm-radio {{ radio }}
    </cm-radio>

    <cm-reference-link />

    <cm-select :options="['a', 'b', 'c']" placeholder="cm-select" />

    <cm-button @click="disabled = !disabled">Enable it!</cm-button>
    <div class="w-80">
      <cm-slider v-model="slider" :disabled="disabled" />
    </div>

    <div class="w-80">
      <cm-strike> cm-strike </cm-strike>
    </div>

    <cm-form-control>
      <cm-textarea placeholder="cm-textarea" />
    </cm-form-control>

    <cm-toast />
    <cm-button @click="$cmToast()">
      Toast!
    </cm-button>

    <cm-toggle v-model="toggle">
      Toggle me
    </cm-toggle>

    <cm-tooltip placement="bottom">
      <template #toggler>
        <span> cm-tooltip </span>
      </template>

      tooltip
    </cm-tooltip>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data () {
    return {
      checkbox: false,
      date: new Date(),
      disabled: false,
      show: true,
      slider: 50,
      radio: "",
      toggle: false,
      tableColumns: [
        {
          name: "nama",
          title: "Nama",
          sortField: "nama"
        },
        {
          name: "umur",
          title: "Umur",
          sortField: "umur"
        },
        {
          name: "foto",
          title: "Foto"
        }
      ],
      tableData: [
        {
          nama: "Bram Adl",
          umur: 20,
          foto: "ini"
        },
        {
          nama: "Billie Eilish",
          umur: 20,
          foto: "itu"
        }
      ]
    }
  }
}
</script>
