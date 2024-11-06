<script setup lang="ts">
import { uuid } from 'vue-uuid'
import type { FormData } from '~/entities/form'

const MAX_CHILD_NUMBER = 5

const formData = ref<FormData>({
  name: '',
  age: null,
  children: [],
})

const handleAddButtonClick = () => {
  if (formData.value.children.length < MAX_CHILD_NUMBER) {
    formData.value.children.push({
      name: '',
      age: null,
      id: uuid.v4(),
    })
  }
}

const handleDeleteButtonClick = (id: string) => {
  formData.value.children = formData.value.children.filter(child => child.id !== id)
}

const isAddButtonVisible = computed(() => formData.value.children.length < MAX_CHILD_NUMBER)

const rules = useValidationRules()

const handleSubmit = () => {
  console.log(formData.value)
}
</script>

<template>
  <v-form
    class="form"
    @submit.prevent
  >
    <div class="form__container">
      <div class="form__field">
        <p class="form__field-title">
          Персональные данные
        </p>

        <div class="form__field-content">
          <AppInput
            v-model="formData.name"
            label="Имя"
            type="text"
            :rules="[rules.required]"
          />

          <AppInput
            v-model="formData.age"
            label="Возраст"
            type="number"
            :rules="[rules.required]"
          />
        </div>
      </div>

      <div class="form__field">
        <div class="form__field-title">
          <p>Дети (макс. {{ MAX_CHILD_NUMBER }})</p>

          <AppButton
            v-if="isAddButtonVisible"
            variant="outlined"
            prepend-icon="/images/icons/plus.svg"
            min-width="204"
            rounded="pill"
            is-bordered
            type="button"
            :handle-button-click="handleAddButtonClick"
          >
            Добавить ребенка
          </AppButton>
        </div>

        <div class="form__field-content">
          <div
            v-for="(child) in formData.children"
            :key="child.id"
            class="form__field-child"
          >
            <AppInput
              v-model="child.name"
              label="Имя"
              type="text"
              :rules="[rules.required]"
            />

            <AppInput
              v-model="child.age"
              label="Возраст"
              type="number"
              :rules="[rules.required]"
            />

            <AppButton
              variant="text"
              type="button"
              :handle-button-click="() => handleDeleteButtonClick(child.id)"
            >
              Удалить
            </AppButton>
          </div>
        </div>
      </div>

      <AppButton
        variant="tonal"
        min-width="118"
        rounded="pill"
        type="submit"
        :handle-button-click="handleSubmit"
      >
        Сохранить
      </AppButton>
    </div>
  </v-form>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

.form {
  padding: 30px 0;

  &__container {
    max-width: 646px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 33px;
  }

  &__field-title {
    @include p2;

    color: var(--typo-dark);
    margin: 0 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__field-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__field-child {
    display: grid;
    grid-template-columns: 260fr 260fr 60fr;
    gap: 18px;
    align-items: center;
  }
}
</style>
