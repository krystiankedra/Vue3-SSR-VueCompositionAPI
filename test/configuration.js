import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

export const createLocalVueConfiguration = () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
}

export const createVuexConfiguration = submodule => new Vuex.Store(submodule)