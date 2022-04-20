<template>
  <div
    class="flex flex-col gap-2"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CmAccordion',

  provide () {
    return {
      register: this.register,
      unregister: this.unregister,
      setOpen: this.setOpen,
      size: this.size
    }
  },

  props: {
    /**
     * If set to true, accordion item will keep
     * being opened whenever another accordion
     * item is toggled.
     */
    persistent: {
      type: Boolean,
      default: false
    },
    /**
     * The accordion size.
     */
    size: {
      type: String,
      default: 'base'
    }
  },

  data () {
    return {
      accordionItems: [],
      accordionOpen: null
    }
  },

  methods: {
    /**
     * Register the child component.
     *
     * @param {VueComponent} accordionItem - Child component
     */
    register (accordionItem) {
      this.accordionItems.push(accordionItem)
    },
    /**
     * Remove the child compoenent.
     *
     * @param {VueComponent} accordionItem - Child component
     */
    unregister (accordionItem) {
      if (this.accordionOpen) {
        this.accordionOpen = null
      }
      const index = this.accordionItems.findIndex(item => item._uid === accordionItem._uid)
      this.accordionItems.splice(index, 1)
    },
    /**
     * Set the accordion item isOpen state.
     *
     * @param {VueComponent} accordionItem - Child component
     * @param {Boolean} isOpen - Is the toggle opened?
     */
    setOpen (accordionItem, isOpen) {
      if (!this.persistent) {
        this.accordionItems.forEach((item) => {
          if (isOpen && item._uid !== accordionItem._uid) {
            item.toggle(false)
          }
        })
      }

      this.accordionOpen = isOpen ? accordionItem : null
    }
  }
}
</script>
