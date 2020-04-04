import { SET_USER_AUTH, SET_USER_TOKEN } from '~/store/auth/mutationTypes'

export const useMapGetters = ({ getters }) => ({
  'isAuth': () => getters.isAuth
})

export const useMapMutations = ({ commit }) => ({
  'setUserAuth': (payload) => commit(SET_USER_AUTH, payload),
  'setUserToken': (payload) => commit(SET_USER_TOKEN, payload)
})