import { filterByNotEqualPropertyKey, filtersWrapper } from '~/commons/Filters/filters'

export default {
  setDataState(state, payload) {
    const { subModule, routeKey, value } = payload
    state[subModule][routeKey].value = value
  },
  filterDataStateListByPropertyKey(state, payload) {
    const { subModule, routeKey, key, value } = payload
    const filters = filtersWrapper(filterByNotEqualPropertyKey(key, value))
    state[subModule][routeKey] = state[subModule][routeKey].filter(filters)
  }
}
