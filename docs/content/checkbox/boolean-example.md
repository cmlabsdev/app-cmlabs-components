#### Code Example

```vue
  <template>
    <p>Remember Me: {{ rememberMe }}</p>
          
    <cm-checkbox v-model="rememberMe">Remember Me?</cm-checkbox>
  </template>

  <script>
    export default {
      data() {
        return {
          rememberMe: false,
        }
      }
    }
  </script>
```
