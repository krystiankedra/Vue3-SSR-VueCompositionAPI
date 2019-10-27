import Vue from 'vue'

const StoreSymbol = Symbol()

export function provideStore(store) {
  Vue.provide(StoreSymbol, store)
}

export function useStore() {
  const store = Vue.inject(StoreSymbol)
  return store
}