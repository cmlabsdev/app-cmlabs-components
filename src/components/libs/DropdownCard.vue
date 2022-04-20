<template>
  <div
    class="block p-3 bg-white dark:bg-dark-80 rounded overflow-y-auto"
    style="box-shadow: 0px 3px 5px 0px #091E4233;"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CmDropdownCard'
}
</script>
