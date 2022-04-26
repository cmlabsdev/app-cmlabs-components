<template>
  <div
    class="w-full overflow-auto"
    :class="{ 'shadow': theme === 'base' && !noShadow }"
  >
    <table class="table-auto w-full overflow-x-auto">
      <thead>
        <cm-table-header :transparent-bg="transparentBg" :theme="theme">
          <cm-table-column
            v-for="column in columns"
            :key="column.name"
            tag="th"
            class="text-left"
            :class="{ '!p-0': noColumnPadding }"
          >
            <div class="flex items-center gap-2.5 font-medium">
              <slot :name="`header_${column.name}`">
                <span class="line-clamp-1">
                  {{ column.title || column.name }}
                </span>
              </slot>
              <cm-icon
                v-if="column.sortField"
                class="cursor-pointer"
                icon="bx-sort"
                @click="$emit('sort', column.sortField)"
              />
            </div>
          </cm-table-column>
        </cm-table-header>
      </thead>

      <template v-if="!$slots.skeleton">
        <template v-if="data.length">
          <TransitionGroup
            name="list"
            mode="out-in"
            tag="tbody"
          >
            <cm-table-row
              v-for="(datum, index) in data"
              :key="datum.id || index"
              class="border-gray-40 dark:border-dark-40 bg-white dark:bg-transparent cm-transition"
              :class="[
                { 'cursor-pointer': clickable },
                { [hoverableTextColor]: hoverable },
                theme !== 'last-border' ? 'border-b last:border-b-0' : 'last:border-t'
              ]"
              @click="clickable && $emit('click:row', datum)"
            >
              <cm-table-column
                v-for="column in columns"
                :key="column.name"
                :class="[datum.attrs, { '!p-0': noColumnPadding }]"
                :width="column.width"
              >
                <slot
                  :name="column.name"
                  :data="datum"
                  :column="column"
                  :value="datum[column.name]"
                >
                  <div class="line-clamp-1">
                    {{ datum[column.name] }}
                  </div>
                </slot>
              </cm-table-column>
            </cm-table-row>
          </TransitionGroup>
        </template>
        <tbody v-else>
          <cm-table-row>
            <cm-table-column colspan="9999">
              <slot name="no-data">
                <span class="block w-full text-center">
                  No data available...
                </span>
              </slot>
            </cm-table-column>
          </cm-table-row>
        </tbody>
      </template>
      <tbody v-else>
        <slot name="skeleton" />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CmTable',

  provide () {
    return {
      size: this.size
    }
  },

  props: {
    /**
     * Is the row clickable?
     */
    clickable: {
      type: Boolean,
      default: false
    },
    /**
     * Custom data formatter.
     * By defaults returns the original data.
     * Used to modify the given data attributes.
     */
    formatData: {
      type: Function,
      default (data) {
        return data
      }
    },
    /**
     * If set to true, the table row
     * would have the hoverableTextColor props
     * class applied into it.
     *
     * The default hoverableTextColor props is
     * text-primary-60
     */
    hoverable: {
      type: Boolean,
      default: false
    },
    /**
     * The hover color to set when the table row
     * is being hovered.
     */
    hoverableTextColor: {
      type: String,
      default: 'hover:text-primary-60 dark:hover:text-primary-40'
    },
    /**
     * Remove padding from the table columns.
     */
    noColumnPadding: {
      type: Boolean,
      default: false
    },
    /**
     * Display table with no shadow.
     */
    noShadow: {
      type: Boolean,
      default: false
    },
    /**
     * The table theme. Defaults to base.
     * The plain theme will not give background color to
     * the table headers instead add borders.
     */
    theme: {
      type: String,
      default: 'base',
      validator (value) {
        return ['plain', 'base', 'clean', 'last-border'].includes(value)
      }
    },
    /**
     * The component size.
     */
    size: {
      type: String,
      default: 'base',
      validator (value) {
        return ['sm', 'base'].includes(value)
      }
    },
    /**
     * The table column definition.
     * This contains an object which should hold
     * name and title field.
     * The name property is used to procure the
     * data from the tableData item.
     * While the title is used to display the
     * table header text.
     */
    tableColumns: {
      type: Array,
      required: true
    },
    /**
     * The data for the table.
     * This data should have properties configured
     * by the table columns in order to be displayed.
     */
    tableData: {
      type: Array,
      required: true
    },
    /**
     * A transparent will render no background by default,
     * when necessary, we need to mockup the parent layer
     * background so it looks like the background is the same.
     * To do so, pass in this property with any valid
     * tailwind background class. This may be needed on
     * dark theme tables.
     */
    transparentBg: {
      type: String,
      default: 'dark:bg-transparent'
    }
  },

  emits: {
    'click:row': null
  },

  computed: {
    /**
     * Wrap the original table columns.
     * Automatically set name property when is not defined.
     */
    columns () {
      if (!this.tableColumns) { return }

      const columns = [...this.tableColumns]

      for (let i = 0; i < columns.length; i++) {
        if (typeof columns[i] === 'string') {
          columns[i] = { name: columns[i] }
        }
      }

      return columns
    },
    /**
     * Wrap the original table data.
     * Pass the cloned data to the custom formatter.
     */
    data () {
      if (!this.tableData) { return }
      return this.formatData([...this.tableData])
    }
  }
}
</script>
