<template>
  <client-only>
    <ckeditor-nuxt
      :disabled="disabled"
      :config="editorConfig"
      :value="value"
      @input="value => $emit('update:value', value)"
    />
  </client-only>
</template>

<script>
export default {
  name: 'CmEditor',

  components: {
    'ckeditor-nuxt': () => { if (process.client) { return import('@blowstack/ckeditor-nuxt') } }
  },

  model: {
    prop: 'value',
    event: 'update:value'
  },

  props: {
    /**
     * Disable the editor.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    uploadUrl: {
      type: String,
      default: 'http://localhost:8000/v1/upload/image'
    },
    /**
     * The value for the content.
     */
    value: {
      type: String,
      default: ''
    }
  },

  computed: {
    editorConfig () {
      const ctx = this

      return {
        // autosave: {},
        heading: {
          options: [
            { model: 'heading1', view: 'h2', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h3', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h4', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h5', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }
          ]
        },
        image: {
          upload: {
            types: ['png', 'jpeg']
          }
        },
        list: {
          properties: {
            styles: true,
            startIndex: true,
            reversed: true
          }
        },
        // Needed to remove no-toolbar-item warning
        mediaEmbed: {
          toolbar: ['|']
        },
        placeholder: 'Write a content here...',
        removePlugins: [
          'ListStyle',
          'Title'
        ],
        simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: ctx.uploadUrl

          // Enable the XMLHttpRequest.withCredentials property.
          // withCredentials: true,

          // Headers sent along with the XMLHttpRequest to the upload server.
          // headers: {
          //   Authorization: 'Bearer MyToken'
          // }
        },
        toolbar: [
          'Heading',
          '|',
          'Bold',
          'Italic',
          'Link',
          'BulletedList',
          'NumberedList',
          'TodoList',
          '|',
          'Indent',
          'Outdent',
          '|',
          'UploadImage',
          'BlockQuote',
          'InsertTable',
          'MediaEmbed',
          'Undo',
          'Redo'
        ]
      }
    }
  }
}
</script>
