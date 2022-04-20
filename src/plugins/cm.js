import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({
    methods: {
      /**
       * Call the library toast through cm syntax.
       * 
       * @param {Object} options - The toast options.
       * @param {String} options.id - Useful if you want to provide close toast button interface.
       * @param {String} options.variant ["primary", "success", "warning", "danger", "info"] - The toast variant.
       * @param {String} options.icon - Could be customized by providing boxicons class. Defaults to variant theme.
       * @param {String} options.title - The toast title.
       * @param {String} options.text - The toast text. Could be a raw HTML that supports inline elements.
       * @param {Boolean} options.hasLink - If set to true, allow the toast to have navigation link.
       * @param {String} options.toLink - Used if hasLink is true, set the to attributes for the navigation.
       * @param {String} options.textLink - Used if hasLink is true, set the navigation text.
       */
      $cmToast (options, duration = 4000) {
        if (!options) {
          options = {
            id: null,
            variant: "info",
            icon: null,
            title: "Default Toast",
            text: "Thank you for calling the toast!",
            hasLink: null,
            toLink: null,
            textLink: null
          }
        }
        
        this.$notify({
          group: "master",
          ...options
        }, duration)
      }
    }
  })
}
