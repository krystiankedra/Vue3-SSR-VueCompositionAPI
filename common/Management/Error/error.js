import { SET_ERROR } from '~/store/errors/mutationTypes'

export const useMapGetters = ({ getters }) => ({
  'error': () => getters.error
})

export const useMapMutations = ({ commit }) => ({
  'setError': (payload) => commit(SET_ERROR, payload)
})
