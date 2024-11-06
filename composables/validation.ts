export const useValidationRules = () => ({
  required: (value: unknown) => ((!!value?.toString().trim()) || 'Это поле обязательное.'),
})
