import { defineStore } from 'pinia'
import type { FormData } from '~/entities/form'

export const useFormStore = defineStore('form', {
  state: (): { formData: FormData } => ({
    formData: {
      name: '',
      age: null,
      children: [],
    },
  }),
  actions: {
    saveFormData(data: FormData) {
      this.formData = data
    },
  },
})
