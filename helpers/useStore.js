import { provide, inject } from '@vue/composition-api'

const StoreSymbol = Symbol()

export const provideStore = store => provide(StoreSymbol, store)

export const useStore = () => {
  const store = inject(StoreSymbol)
  if (!store) {
    // future
  }
  return store
}