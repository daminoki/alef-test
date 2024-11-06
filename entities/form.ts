export interface FormData {
  name: string
  age: number | null
  children: FormDataChild[]
}

export interface FormDataChild {
  name: string
  age: number | null
  id: string
}
