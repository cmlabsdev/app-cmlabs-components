#### Code Example

```vue
  <template>
    <p>Selected Languages: {{ languages }}</p>
        
    <cm-checkbox v-model="languages" value="html">HTML</cm-checkbox>
    <cm-checkbox v-model="languages" value="css">CSS</cm-checkbox>
    <cm-checkbox v-model="languages" value="js">JS</cm-checkbox>
  </template>

  <script>
    export default {
      data() {
        return {
          languages: [],
        }
      }
    }
  </script>
```
