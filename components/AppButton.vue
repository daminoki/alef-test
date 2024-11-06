<script setup lang="ts">
defineProps<{
  handleButtonClick?: () => void
  prependIcon?: string
  variant?: 'outlined' | 'text' | 'flat' | 'elevated' | 'tonal' | 'plain' | undefined
  minWidth?: string
  rounded?: string
  isBordered?: boolean
  type?: 'button' | 'submit' | 'reset'
}
>()
</script>

<template>
  <v-btn
    :variant="variant"
    color="--typo-contrast"
    :rounded="rounded"
    height="44"
    :min-width="minWidth"
    class="button"
    :class="{ bordered: isBordered, contrast: variant === 'tonal' }"
    :type="type"
    @click="handleButtonClick"
  >
    <template
      v-if="prependIcon"
      #prepend
    >
      <img
        src="/images/icons/plus.svg"
        alt="Добавить"
        width="24"
        height="24"
      >
    </template>
    <slot />
  </v-btn>
</template>

<style scoped land="scss">
@import '@/assets/styles/mixins.scss';

.button:deep() {
    width: fit-content;

    .v-btn__content {
      color: var(--typo-contrast);
      text-transform: none;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      letter-spacing: normal;
    }

    .v-btn__prepend {
      margin: 0 4px 0 0;
    }
}

.bordered:deep() {
    border-color: var(--typo-contrast);
    border-width: 2px;
}

.contrast:deep() {
    background-color: var(--typo-contrast);
    .v-btn__content {
        color: var(--typo-light);
    }

    .v-btn__overlay {
        display: none;
    }

    .v-btn__underlay {
        display: none;
    }
}
</style>
