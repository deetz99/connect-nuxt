<script setup lang="ts">
const model = defineModel<string>({ required: true })

defineProps<{
  id: string
  label: string
  mask?: string
  invalid?: boolean
}>()
</script>

<template>
  <UInput
    :id
    v-model.trim="model"
    v-maska="mask"
    :data-testid="id"
    placeholder="&nbsp;"
    class="w-full grow"
    :ui="{
      base: invalid ? 'ring-0 shadow-inputError focus:shadow-inputError' : '',
    }"
  >
    <label
      :for="id"
      class="floating-label-input"
      :class="invalid ? 'text-error' : ''"
    >
      {{ label }}
    </label>
  </UInput>
</template>
