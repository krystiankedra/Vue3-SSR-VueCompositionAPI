import { filterByNotEqualPropertyKey, filtersWrapper } from '~/commons/Filters/filters'

export default {
  setDataState(state, payload) {
    const { submodule, routeKey, value } = payload
    state[submodule][routeKey].value = value
  },
  filterDataStateListByPropertyKey(state, payload) {
    const { submodule, routeKey, key, value } = payload
    const filters = filtersWrapper(filterByNotEqualPropertyKey(key, value))
    state[submodule][routeKey] = state[submodule][routeKey].filter(filters)
  }
}
