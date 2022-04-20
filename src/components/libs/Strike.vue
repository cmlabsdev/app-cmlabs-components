<template>
  <p class="relative text-center after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-full after:border-b after:border-gray-90 dark:after:border-dark-40">
    <span class="relative z-[2] px-3 text-sm text-gray-90 dark:text-dark-40 bg-white dark:bg-dark-90">
      <slot />
    </span>
  </p>
</template>

<script>
export default {
  name: 'CmStrike'
}
</script>
