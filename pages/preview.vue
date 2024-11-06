<script setup lang="ts">
const { formData } = useFormStore()

function formatYears(age: number): string {
  if (age % 10 === 1 && age % 100 !== 11) {
    return `${age} год`
  }
  else if (
    [2, 3, 4].includes(age % 10)
    && ![12, 13, 14].includes(age % 100)
  ) {
    return `${age} года`
  }
  else {
    return `${age} лет`
  }
}
</script>

<template>
  <div class="preview">
    <div class="preview__container">
      <div class="preview__section">
        <p class="preview__section-title">
          Персональные данные
        </p>

        <div
          v-if="formData.name && formData.age"
          class="preview__section-content"
        >
          <div class="preview__section-data">
            <span class="preview__section-text">{{ formData.name }}, </span>
            <span class="preview__section-text">{{ formatYears(formData.age) }}</span>
          </div>
        </div>

        <p
          v-else
          class="preview__section-title"
        >
          Пока пусто
        </p>
      </div>

      <div class="preview__section">
        <p class="preview__section-title">
          Дети
        </p>

        <div
          v-if="formData.children.length"
          class="preview__section-content"
        >
          <div
            v-for="item in formData.children"
            :key="item.id"
            class="preview__section-data preview__section-data_child"
          >
            <span class="preview__section-text">{{ item.name }}, </span>
            <span class="preview__section-text">{{ formatYears(item.age!) }}</span>
          </div>
        </div>

        <p
          v-else
          class="preview__section-title"
        >
          Пока пусто
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview {
    @import '@/assets/styles/mixins.scss';

    padding: 30px 0;

    &__container {
        max-width: 646px;
        margin: 0 auto;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    &__section-title {
        @include p2;

        color: var(--typo-dark);
        margin: 0 0 20px;
    }

    &__section-text {
        @include p2;

        color: var(--typo-dark);
        font-weight: 700;
    }

    &__section-data {
        width: fit-content;

        &_child {
            padding: 10px 20px;
            border-radius: 5px;
            background-color: var(--gray-bg-secondary);
        }
    }

    &__section-content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

}
</style>
