import { SET_USER_AUTH } from '~/store/auth/mutationTypes'

export const useMapGetters = ({ getters }) => ({
  'isAuth': () => getters.isAuth
})

export const useMapMutations = ({ commit }) => ({
  'setUserAuth': (payload) => commit(SET_USER_AUTH, payload)
})