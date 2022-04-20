<template>
  <div>
    <label class="flex flex-col">
      <slot name="label" />
      <slot />
      <slot name="error" />
    </label>

    <span
      v-if="$slots.utils"
      class="inline-flex w-full mt-2"
    >
      <slot name="utils" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'CmFormGroup'
}
</script>
