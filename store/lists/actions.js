import { SET_DATA_STATE } from '~/store/rootMutationTypes'

export default {
  async setDataStateFromApi({ commit }, { submodule, routeKey, callback }) {
    const value = await callback()
    commit(SET_DATA_STATE, { submodule, routeKey, value })
  }
}
