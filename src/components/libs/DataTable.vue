<template>
  <div class="flex flex-col gap-6">
    <slot name="header" />

    <div v-if="$fetchState.pending">
      <cm-table :table-columns="tableOptions.columns" :table-data="[]">
        <template #skeleton>
          <cm-table-skeleton
            v-for="n in 4"
            :key="n"
            :columns="tableOptions.columns"
          />
        </template>
      </cm-table>
    </div>
    <div v-else-if="$fetchState.error">An error has occured...</div>
    <div v-else>
      <slot :table-columns="tableColumns" :table-data="tableData" />
    </div>

    <slot
      name="footer"
      :current-count="currentCount"
      :total-count="totalCount"
      :current-page="currentPage"
      :total-page="totalPage"
    >
      <cm-data-table-footer>
        <cm-data-table-count>
          Showing <strong>{{ currentCount }}</strong> of
          <strong>{{ totalCount }}</strong>
        </cm-data-table-count>

        <div class="flex items-center gap-8">
          <div v-if="!noPerPage" class="flex items-center gap-4">
            <p class="text-sm">Rows per page</p>
            <cm-select
              class="!w-20"
              :options="rowsPerPageOptions"
              :value="perPage"
              @update:value="(value) => $emit('change:per-page', value)"
            />
          </div>

          <cm-pagination>
            <template #prev>
              <cm-pagination-button
                :is-disabled="+currentPage === 1"
                @click="handleClick(+currentPage - 1)"
              >
                «
              </cm-pagination-button>
            </template>

            <template v-if="totalPage <= threshold">
              <cm-pagination-button
                v-for="page in Number(totalPage)"
                :key="page"
                :is-active="page === +currentPage"
                square
                @click="() => handleClick(+page)"
              >
                {{ page }}
              </cm-pagination-button>
            </template>

            <template v-else>
              <cm-pagination-button
                v-if="showPrevDots"
                @click="jumpOutbounds('down')"
                >...</cm-pagination-button
              >

              <cm-pagination-button
                v-for="page in paginationOutbounds"
                :key="page"
                :is-active="page === +currentPage"
                square
                @click="() => handleClick(+page)"
              >
                {{ page }}
              </cm-pagination-button>

              <cm-pagination-button
                v-if="showNextDots"
                @click="jumpOutbounds('up')"
                >...</cm-pagination-button
              >
            </template>

            <template #next>
              <cm-pagination-button
                :is-disabled="!+totalPage || totalPage === currentPage"
                @click="handleClick(+currentPage + 1)"
              >
                »
              </cm-pagination-button>
            </template>
          </cm-pagination>
        </div>
      </cm-data-table-footer>
    </slot>
  </div>
</template>

<script>
export default {
  name: "CmDataTable",

  props: {
    /**
     * The endpoint this data table should call.
     * If null, no API calls will be made.
     */
    apiEndpoint: {
      type: String,
      default: null,
    },
    /**
     * Which property should be used as a key
     * from the API data response.
     *
     * Suppose the response looks like:
     * {
     *  code: 200,
     *  data: {
     *    user: []
     *  }
     * }
     *
     * We might wanna use the data.user key.
     */
    dataKey: {
      type: String,
      default: null,
    },
    /**
     * The table data formatter. Used to modify
     * the attrs property. By default, returns
     * the original table data.
     */
    formatData: {
      type: Function,
      default(data) {
        return data;
      },
    },
    /**
     * Which store should be set upon successful
     * API calls? If null, no VueX mutations is
     * called.
     */
    populateStore: {
      type: String,
      default: null,
    },
    /**
     * Disable per page functionality if set to true.
     */
    noPerPage: {
      type: Boolean,
      default: false,
    },
    /**
     * The table data options containing columns,
     * data, and pagination by default.
     *
     * The column might be in a simple array of
     * strings or in an object data.
     *
     * If is an object, the accepted configuration are
     * {
     *  name: String - The name used to match the response item property.
     *  title: String - The text appeared on table header for this column.
     *  width: String - The column width. Default to flex-1
     *  sortField: String - The key used for sorting calls.
     * }
     *
     * The table options is configured automatically if you set
     * this without data or pagination, suppose the endpoint includes
     * data and pagination property, the data and the pagination will be
     * taken from the API response automatically. To determine which
     * property should be taken from the data response, use the dataKey
     * property.
     */
    tableOptions: {
      type: Object,
      default() {
        return {
          columns: ["column1", "column2", "column3", "action"],
          data: [
            {
              id: 0,
              column1: "Column 1A Value",
              column2: "Column 2A Value",
              column3: "Column 3A Value",
            },
            {
              id: 1,
              column1: "Column 1B Value",
              column2: "Column 2B Value",
              column3: "Column 3B Value",
            },
          ],
          pagination: {
            per_page: "8",
            current_page: "1",
            total_page: "1",
            total_items: "8",
          },
        };
      },
    },
  },

  data() {
    return {
      threshold: 3,
      paginationOutbounds: [1, 2, 3, 4],
      /**
       * Replica of the tableOption property.
       * This object is used to avoid mutating original data.
       */
      tableOptions_: null,
      /**
       * Items to show for the rows per page data.
       */
      rowsPerPageOptions: [
        { label: "5" },
        { label: "10" },
        { label: "15" },
        { label: "20" },
      ],
    };
  },

  /**
   * Fetch API with the given apiEndpoint props.
   *
   * Assuming the reponse do have data and pagination property
   * from the successful response, hence we destructure the response.
   * To avoid destructuring null data, we pass the fallback value of empty
   * object.
   *
   * Get the desired key from data response using the dataKey property.
   * If no data key provided, use the original data from the response itself.
   *
   * Create the data and pagination property for the tableOptions replica.
   * This is to make sure the tableOptions stay hidrated and contains the
   * desired value.
   *
   * Finally, if populateStore is defined, call the vuex mutations and send
   * the data taken from the API call.
   */
  async fetch() {
    if (!this.apiEndpoint) {
      return;
    }

    const tableOptions = Object.assign({}, this.tableOptions);
    const { data, pagination } =
      (await this.$axios.$get(this.apiEndpoint)) || {};

    const dataValue = this.dataKey ? data[this.dataKey] : data;

    tableOptions.data = this.formatData(dataValue);
    tableOptions.pagination = pagination;
    this.tableOptions_ = tableOptions;

    if (this.populateStore) {
      this.$store.commit(this.populateStore, dataValue);
    }
  },

  computed: {
    showPrevDots() {
      if (this.paginationOutbounds.includes(1)) return false;
      return true;
    },
    showNextDots() {
      if (this.paginationOutbounds.includes(this.totalPage)) return false;
      return true;
    },
    /**
     * The columns from the tableOptions replica.
     * Defaults to the original tableOptions.
     */
    tableColumns() {
      if (this.tableOptions_) {
        return this.tableOptions_.columns;
      }
      return this.tableOptions.columns ? [...this.tableOptions.columns] : [];
    },
    /**
     * The data from the tableOptions replica.
     * Defaults to the original tableOptions.
     */
    tableData() {
      if (this.tableOptions_) {
        return this.tableOptions_.data;
      }
      return this.tableOptions.data ? [...this.tableOptions.data] : [];
    },
    /**
     * The pagination from the tableOptions replica.
     * Defaults to the original tableOptions.
     */
    pagination() {
      if (this.tableOptions_) {
        return this.tableOptions_.pagination;
      }
      return this.tableOptions.pagination ? this.tableOptions.pagination : {};
    },
    /**
     * The amount of records inside the table data items to be shown
     * in the pagination element.
     * Recalculate automatically when searching,
     * filtering, or no data because tableData is re-assigned upon fetch hooks.
     */
    currentCount() {
      return this.tableData.length || 0;
    },
    /**
     * The total amount of the original data taken from the pagination.
     * Automatically synced with the server response.
     */
    totalCount() {
      return this.pagination.total_items || 0;
    },
    /**
     * Current per page from the pagination.
     * Automatically synced with the server response.
     */
    perPage() {
      return this.pagination.per_page || 10;
    },
    /**
     * Current page from the pagination.
     * Automatically synced with the server response.
     */
    currentPage() {
      return this.pagination.current_page || 0;
    },
    /**
     * Total page from the pagination.
     * Automatically synced with the server response.
     */
    totalPage() {
      return this.pagination.total_page || 0;
    },
  },

  watch: {
    /**
     * When API Endpoint changes, re-fetch the data.
     */
    apiEndpoint() {
      this.$fetch();
    },
  },

  mounted() {
    /**
     * Emitter to handle refreshing data table.
     * Automatically re-fetch the data.
     */
    this.$nuxt.$on("refresh:data_table", () => {
      this.$fetch();
    });
  },

  beforeDestory() {
    /**
     * Emitter to handle refreshing data table.
     * De-attach the listener for performance.
     */
    this.$nuxt.$off("refresh:data_table", () => {
      this.$fetch();
    });
  },

  methods: {
    handleClick (page) {
      const direction = +page < +this.currentPage ? "down" : "up"

      if (+page !== +this.totalPage) {
        const isPageBreaker = this.isPageBreaker(+page)
        if (isPageBreaker) {
          this.jumpOutbounds(direction)
        }
      }

      this.$emit('go:to', +page)
    },
    isPageBreaker(page) {
      if (page === 1) return false;
      return (page % this.threshold) - 1 === 0;
    },
    normalizeOutbounds (newOutbounds) {
      if (newOutbounds.length < this.threshold + 1) {
        return newOutbounds
      } else {
        return this.normalizeOutbounds(newOutbounds.unshift(newOutbounds[0] - 1))
      }
    },
    jumpOutbounds(direction) {
      let newOutbounds = this.paginationOutbounds.map((outbound) => {
        if (direction === "down") {
          this.$emit('go:to', this.paginationOutbounds[0]) 
          return outbound - this.threshold;
        } else {
          this.$emit('go:to', this.paginationOutbounds[this.paginationOutbounds.length - 1])
          if (outbound + this.threshold > this.totalPage) return null
          return outbound + this.threshold;
        }
      }).filter((outbound) => outbound !== null)

      this.normalizeOutbounds(newOutbounds)

      this.paginationOutbounds = newOutbounds
    },
  }
};
</script>
