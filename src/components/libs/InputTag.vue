<template>
  <span class="relative w-full flex flex-col overflow-y-auto" :class="[height, padding]">
    <span v-if="tags.length" class="w-full flex items-start justify-start gap-3 mb-3 flex-wrap">
      <span
        v-for="tag in tags"
        :key="tag"
        class="w-auto h-8 flex items-center justify-between gap-2 px-2 text-dark-10 bg-gray-20 dark:bg-dark-60 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-80 cm-transition"
        tabindex="0"
        @click="onRemoveTag(tag)"
        @keyup.enter="onRemoveTag(tag)"
        @keyup.delete="onRemoveTag(tag)"
      >
        <span> {{ tag }} </span>
        <cm-icon class="cursor-pointer" icon="bxs-x-circle" />
      </span>
    </span>

    <textarea
      v-model="tagInput"
      class="w-full min-h-[32px] h-full focus:outline-none bg-transparent text-dark-60 dark:text-white placeholder-gray-80 dark:placeholder-dark-20 resize-none"
      :disabled="disabled"
      :placeholder="placeholder"
      @keydown.delete="onDelete"
      @keypress.enter.exact="onEnter"
      @keydown.prevent.188="onEnter"
      @keydown.prevent.186="onEnter"
    />

    <transition name="fade-in">
      <span
        v-if="hasDuplicated"
        class="absolute right-0 top-0 h-8 px-2 flex items-center justify-between bg-danger-20 text-danger-60 rounded shadow"
      >
        {{ duplicatedMessage }} <strong>({{ serializedTagInput }})</strong>
      </span>
    </transition>
  </span>
</template>

<script>
/**
 * Replace non-alphanumeric characters from the input string.
 *
 * @param {String} keyword - The keyword to be serialized.
 * @returns {String}
 */
function serializeKeyword (keyword) {
  return keyword.toLowerCase().replaceAll(/[^a-zA-Z0-9 ]/gi, "").trim()
}

export default {
  name: 'CmInputTag',

  model: {
    prop: 'tags',
    event: 'update:tags'
  },

  props: {
    /**
     * Is the input disabled?
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * The message when duplicated record is found.
     */
    duplicatedMessage: {
      type: String,
      default: 'The tag you are trying to add has been stored previously.'
    },
    /**
     * The height class.
     */
    height: {
      type: String,
      default: 'h-[250px]'
    },
    /**
     * Maximum amount of tag.
     * When reach max, a toast will be called.
     */
    max: {
      type: Number,
      default: 0
    },
    /**
     * The padding class.
     */
    padding: {
      type: String,
      default: 'p-3'
    },
    /**
     * The input placeholder.
     */
    placeholder: {
      type: String,
      default: 'Type something...'
    },
    /**
     * The tags controlled by the component.
     * Used with v-model.
     */
    tags: {
      type: Array,
      default () {
        return []
      }
    }
  },

  emits: {
    'update:tags': null
  },

  data () {
    return {
      hasDuplicated: false,
      tagInput: ''
    }
  },

  computed: {
    /**
     * Split the tag input by \n then process to
     * ensuring no non-allowed characters are processed.
     * Returns array of serialized tag input.
     */
    serializedTagInput () {
      const tagInput = this.tagInput
      const breakTags = tagInput.split('\n')
      const serializedTagInput = []

      for (let i = 0; i < breakTags.length; i++) {
        const tag = breakTags[i]
        if (tag === '') { continue }
        serializedTagInput.push(serializeKeyword(tag))
      }

      return serializedTagInput
    }
  },

  watch: {
    /**
     * Immediately remove the duplicated message
     * when the user types in.
     */
    tagInput () {
      if (this.hasDuplicated) {
        this.hasDuplicated = false
      }
    }
  },

  methods: {
    /**
     * Handle enter key on keyboard.
     */
    async onEnter () {
      event.preventDefault()

      if (this.max && this.tags.length >= this.max) {
        return this.$cmToast({
          title: "Maximum number of keyword exceeded.",
          text: "To add more keyword, please visit the advanced version page.",
          variant: "warning"
        })
      }

      if (!this.serializedTagInput.length) { return false }
      let inputs = this.serializedTagInput

      if (this.max) { inputs = [...inputs].splice(0, this.max) }
      
      const tags = [...this.tags]

      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i]
        if (this.tags.includes(input)) { return (this.hasDuplicated = true) }
        tags.push(input)
      }

      this.$emit('update:tags', tags)
      await this.$nextTick()
      this.tagInput = ''
    },
    /**
     * Handle delete key on keyboard.
     */
    onDelete () {
      if (this.tagInput.length) { return false }
      this.$emit('update:tags', this.tags.filter(item => item !== this.tags[this.tags.length - 1]))
    },
    /**
     * Handle when removing a tag from the x icon.
     */
    onRemoveTag (tag) {
      this.$emit('update:tags', this.tags.filter(item => item !== tag))
    }
  }
}
</script>
