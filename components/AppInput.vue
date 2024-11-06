<script setup lang="ts">
type ValidationRule = (value: string | number | null | undefined) => boolean | string

withDefaults(defineProps<{
  label: string
  type?: string
  modelValue: string | number | null
  rules?: ValidationRule[]
}>(), {
  type: 'text',
  rules: () => [],
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    :label="label"
    variant="solo"
    flat
    hide-details="auto"
    class="input"
    :type="type"
    :rules="rules"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixins.scss';

.input:deep() {
    .v-field {
      @include p2;

      color: var(--typo-dark);
      border: 1px solid #F1F1F1;
      border-radius: 4px;
      font-weight: 400;
      opacity: 1;
    }

    .v-field--focused {
      border-color: var(--typo-contrast);
    }

    .v-field-label {
      color: var(--typo-gray);
      opacity: 1;
    }

    .v-field-label--floating {
      @include p3;
    }
}
</style>
